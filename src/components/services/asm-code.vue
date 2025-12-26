<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { OptimizedAsmCodeState } from '@/common/interface/data.vo';

@Options({})
export default class AsmCode extends Vue {
  @Prop({ required: true })
  asmCodeState!: string;

  @Prop({ required: true })
  optimizedAsmCodeState!: OptimizedAsmCodeState;

  @Prop({ required: true })
  codeState!: string;
}
</script>

<template>
  <header class="lc-header" v-if="codeState === 'SUCCESS'">
    <span>Asm Code & Optimized Code</span>
  </header>
  <div class="lc-content" v-if="codeState === 'SUCCESS'">
    <pre>{{ asmCodeState }}</pre>
    <pre>{{ optimizedAsmCodeState.optimized_asm }}</pre>
  </div>
</template>

<style scoped lang="less">
.lc-header {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.lc-content {
  width: 100%;
  height: calc(100% - 30px);
  overflow: auto;
  padding: 10px;
  display: flex;
  justify-content: space-around;

  pre {
    margin: 0;
    font-family: 'Source Code Pro', monospace;
    font-size: 14px;
    line-height: 1.5;
    max-width: 50%;
    max-height: 600px;
  }
}
</style>
