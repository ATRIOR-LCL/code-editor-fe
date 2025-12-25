<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Inject } from 'vue-property-decorator';
import { HomeState } from '@/common/interface/data.vo';

import MonacoEditor from '@/components/services/monaco-editor.vue';
import { ElButton, ElIcon } from 'element-plus';
import { Check, Stopwatch } from '@element-plus/icons-vue';

@Options({
  components: {
    MonacoEditor,
    ElButton,
    Check,
    ElIcon,
    Stopwatch,
  },
})
export default class Code extends Vue {
  @Inject()
  homeState!: HomeState;
  @Inject()
  saveCode!: () => void;

  @Inject()
  toRunCode!: () => void;
}
</script>

<template>
  <div class="code-container">
    <!-- 代码操作栏 -->
    <div class="btn-container">
      <el-button size="small" @click="saveCode" :disabled="homeState.isSaved">
        <el-icon size="large" style="margin-right: 5px"><Check /></el-icon>
        Save
      </el-button>

      <el-button type="primary" size="small" @click="toRunCode">
        <el-icon
          size="large"
          style="margin-right: 5px"
          :disabled="homeState.isSaved && homeState.codeState === 'SUCCESS'"
          ><Stopwatch
        /></el-icon>
        Run Code</el-button
      >
    </div>

    <!-- 代码框组件 -->
    <MonacoEditor />
  </div>
</template>

<style scoped lang="less">
.code-container {
  width: 100%;
  height: 100%;
  border-radius: var(--br-size);
  background-color: var(--card-bg-color);
  overflow: hidden;
  position: relative;

  & .btn-container {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
  }
}
</style>
