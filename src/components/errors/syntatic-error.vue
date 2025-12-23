<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { SyntaticErrorState } from '@/common/interface/data.vo';
import { Prop } from 'vue-property-decorator';

@Options({})
export default class SyntaticError extends Vue {
  @Prop({ required: true })
  synaticErrors!: SyntaticErrorState;
}
</script>

<template>
  <div>{{ synaticErrors.error }}</div>
</template>
