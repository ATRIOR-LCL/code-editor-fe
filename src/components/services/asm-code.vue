<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({})
export default class AsmCode extends Vue {
  @Prop({ required: true })
  asmCodeState!: string;

  @Prop({ required: true })
  codeState!: string;
}
</script>

<template>
  <header class="lc-header" v-if="codeState === 'SUCCESS'">
    <span>Asm Code</span>
  </header>
  <div class="lc-content" v-if="codeState === 'SUCCESS'">
    <pre>{{ asmCodeState }}</pre>
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
  box-sizing: border-box;

  pre {
    margin: 0;
    font-family: 'Source Code Pro', monospace;
    font-size: 14px;
    line-height: 1.5;
  }
}
</style>
