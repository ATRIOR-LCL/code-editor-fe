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
    <div class="card-container">
      <el-card class="card">
        <template #header>
          <span>Pcode</span>
        </template>
        <p
          v-for="(item, index) in semanticAndIntermediateCodeState.pcode"
          style="margin-bottom: 5px"
          :key="index"
        >
          {{ item }}
        </p>
      </el-card>
    </div>

    <div class="card-container">
      <el-card class="card">
        <template #header>
          <span>quads</span>
        </template>
        <p
            v-for="(funcArr, funcName) in semanticAndIntermediateCodeState.quads.functions"
            :key="funcName"
          >
            <div style="margin-bottom: 10px">
              <div style="font-weight: bold; margin-bottom: 5px">{{ funcName }}</div>
              <div>
                <p
                  v-for="(item, index) in funcArr"
                  :key="index"
                  style="margin-bottom: 5px"
                >
                  {{ parseQuads(item[0], item[1], item[2], item[3]) }}
                </p>
              </div>
            </div>
          </p>
      </el-card>
    </div>
  </div>
</template>

<style scoped lang="less">
.si-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .card-container {
    width: 45%;
    height: 550px;
    overflow-y: auto;
    padding-bottom: 30px;
  }

  & .card {
    width: 100%;
    height: auto;
  }
}
</style>
