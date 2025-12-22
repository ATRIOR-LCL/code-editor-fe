<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { ElTabs, ElTabPane } from 'element-plus';

@Options({
  components: {
    ElTabs,
    ElTabPane,
  },
})
export default class Analize extends Vue {}
</script>

<template>
  <div class="analize-container">
    <el-tabs class="demo-tabs">
      <el-tab-pane label="词法分析">词法分析</el-tab-pane>
      <el-tab-pane label="语法分析">语法分析</el-tab-pane>
      <el-tab-pane label="语义分析">语义分析</el-tab-pane>
      <el-tab-pane label="中间代码生成">中间代码生成</el-tab-pane>
      <el-tab-pane label="目标代码生成">目标代码生成</el-tab-pane>
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
  padding: 20px;
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

.el-tabs__nav-wrap::after {
  background-color: #ff4d4f !important; /* 你想要的颜色 */
}

.demo-tabs > .el-tabs__content {
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
