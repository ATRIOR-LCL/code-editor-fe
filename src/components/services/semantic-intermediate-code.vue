<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { SemanticAndIntermediateCodeState } from '@/common/interface/data.vo';
import { Prop } from 'vue-property-decorator';

import { ElCard } from 'element-plus';

@Options({
  components: {
    ElCard,
  },
})
export default class SemanticIntermediateCode extends Vue {
  @Prop({ required: true })
  semanticAndIntermediateCodeState!: SemanticAndIntermediateCodeState;

  private parseQuads(a: string, b: string, c: string, d: string): string {
    return `(${a}, ${b}, ${c}, ${d})`;
  }
}
</script>

<template>
  <div class="si-container">
    <el-card class="card">
      <template #header>
        <span>Pcode</span>
      </template>
      <p v-for="(item, index) in semanticAndIntermediateCodeState.pcode" style="margin-bottom: 5px;" :key="index">
        {{ item }}
      </p>
    </el-card>

    <el-card class="card">
      <template #header>
        <span>quads</span>
      </template>
      <!-- <p>此处展示中间代码生成结果。</p> -->
       <p v-for="(item, index) in semanticAndIntermediateCodeState.quads.functions.main" :key="index" style="margin-bottom: 5px;">
        {{ parseQuads(item[0], item[1], item[2], item[3]) }}
        </p>
    </el-card>
  </div>
</template>

<style scoped lang="less">
.si-container {
  width: 100%;
  height: 100%;
  display: flex;

  & .card {
    width: 45%;
    height: 600px;
    min-height: 600px;
  }
}
</style>
