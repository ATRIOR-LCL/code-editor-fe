<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Inject } from 'vue-property-decorator';
import { HomeState } from '@/common/interface/data';

import { ElTabs, ElTabPane, ElIcon } from 'element-plus';
import { Printer, Cpu } from '@element-plus/icons-vue';
import TerminalErrorWindow from '@/components/terminal-error-window.vue';

@Options({
  components: {
    ElTabs,
    ElTabPane,
    ElIcon,
    Printer,
    Cpu,
    TerminalErrorWindow,
  },
})
export default class Terminal extends Vue {
  @Inject()
  homeState!: HomeState;
}
</script>

<template>
  <!-- 终端标签页 -->
  <div class="tm-container">
    <el-tabs class="demo-tabs">
      <!-- 代码运行结果 -->
      <el-tab-pane label="终端">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><cpu /></el-icon>
            <span>终端</span>
          </span>
        </template>
        运行代码「Run Code」以查看终端输出结果。
      </el-tab-pane>

      <!-- 代码编译结果 -->
      <el-tab-pane label="问题">
        <template #label>
          <el-icon><printer /></el-icon>
          <span class="custom-tabs-label">
            <span>问题</span>
          </span>
        </template>
        <TerminalErrorWindow
          v-if="homeState.errorStates && homeState.errorStates.length > 0"
          :errorStates="homeState.errorStates"
        />
        <div v-else>未在工作区检测到问题。</div>
      </el-tab-pane>
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
