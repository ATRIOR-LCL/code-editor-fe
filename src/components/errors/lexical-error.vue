<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { lexicalErrorState } from '@/common/interface/data.vo';

@Options({})
export default class LexicalError extends Vue {
  @Prop({ required: true })
  lexicalErrors!: lexicalErrorState[];

  get errorInfo(): string {
    return this.lexicalErrors.map((err) => `Error at line ${err.line}: ${err.message}`).join('\n');
  }
}
</script>

<template>
  <div>{{ errorInfo }}</div>
</template>
