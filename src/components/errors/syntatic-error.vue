<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({})
export default class SyntaticError extends Vue {
  @Prop({ required: true })
  error: string;
}
</script>

<template>
  <div>{{ error }}</div>
</template>
