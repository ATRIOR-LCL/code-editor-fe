<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { ErrorState } from '@/common/interface/data';
import { Prop } from 'vue-property-decorator';

@Options({})
export default class TerminalErrorWindow extends Vue {
  @Prop({ required: true })
  errorStates!: ErrorState[];

  get errorInfo(): string {
    return this.errorStates
      .map((err, index) => `Error at line ${err.line}: ${err.message}`)
      .join('\n');
  }
}
</script>

<template>
  <div>{{ errorInfo }}</div>
</template>
