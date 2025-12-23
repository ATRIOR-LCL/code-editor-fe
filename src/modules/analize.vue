<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Inject } from 'vue-property-decorator';
import { HomeState } from '@/common/interface/data.vo';

import { ElTabs, ElTabPane } from 'element-plus';
import LexicalAnalysisTable from '@/components/services/lexical-analysis-table.vue';
import SyntaticAnalysisTable from '@/components/services/syntatic-analysis-table.vue';
import AnalisisPendingRes from '@/components/services/analisis-pending-res.vue';

@Options({
  components: {
    ElTabs,
    ElTabPane,
    LexicalAnalysisTable,
    AnalisisPendingRes,
    SyntaticAnalysisTable,
  },
})
export default class Analize extends Vue {
  @Inject()
  homeState!: HomeState;
}
</script>

<template>
  <!-- 编译原理分析过程标签页 -->
  <!-- 每个标签页对应编译器的一个阶段 -->
  <div class="analize-container">
    <!-- 词法分析 -->
    <el-tabs class="demo-tabs">
      <el-tab-pane label="词法分析">
        <LexicalAnalysisTable
        v-if="homeState.lexicalAnalysisState"
          :lexicalAnalysisState="homeState.lexicalAnalysisState"
          :codeState="homeState.codeState"
        />
      </el-tab-pane>

      <AnalisisPendingRes v-if="homeState.codeState === 'PENDING'" />

      <!-- 语法分析 -->
      <el-tab-pane label="语法分析">
        <SyntaticAnalysisTable
          v-if="homeState.syntacticAnalysisState"
          :syntacticAnalysisState="homeState.syntacticAnalysisState"
          :codeState="homeState.codeState"
        />
      </el-tab-pane>

      <!-- 语义分析 -->
      <el-tab-pane label="语义分析 & 中间代码生成">语义分析 & 中间代码生成</el-tab-pane>

      <!-- 目标代码生成 -->
      <el-tab-pane label="目标代码生成">目标代码生成</el-tab-pane>

      <!-- 代码优化 -->
      <el-tab-pane label="代码优化">代码优化</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="less">
.analize-container {
  width: 100%;
  height: 100%;
  border-radius: var(--br-size);
  background-color: var(--card-bg-color);
  padding: 10px 20px;
  position: relative;

  &::before {
    content: 'Analyzing Here';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(5px) translateY(-120%);
    color: gray;
  }
}

.demo-tabs {
  height: 100%;
  border-radius: var(--br-size);
  background-color: var(--card-bg-color);
}

.demo-tabs > .el-tabs__content {
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
