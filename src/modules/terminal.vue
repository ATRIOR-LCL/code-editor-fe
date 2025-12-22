<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { ElTabs, ElTabPane, ElIcon } from 'element-plus';
import { Printer, Cpu } from '@element-plus/icons-vue';
@Options({
  components: {
    ElTabs,
    ElTabPane,
    ElIcon,
    Printer,
    Cpu,
  },
})
export default class Terminal extends Vue {}
</script>

<template>
  <div class="tm-container">
    <el-tabs class="demo-tabs">
      <el-tab-pane label="终端">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><cpu /></el-icon>
            <span>终端</span>
          </span>
        </template>
        终端</el-tab-pane
      >
      <el-tab-pane label="输出">
        <template #label>
          <el-icon><printer /></el-icon>
          <span class="custom-tabs-label">
            <span>输出</span>
          </span>
        </template>
        输出</el-tab-pane
      >
    </el-tabs>
  </div>
</template>

<style scoped lang="less">
.tm-container {
  width: 100%;
  height: 100%;
  border-radius: var(--br-size);
  background-color: var(--card-bg-color);
  padding: 10px 20px;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
