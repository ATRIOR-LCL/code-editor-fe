<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Inject } from 'vue-property-decorator';

import MonacoEditor from '@/components/monaco-editor.vue';
import { ElButton, ElIcon } from 'element-plus';
import { Check } from '@element-plus/icons-vue';

@Options({
  components: {
    MonacoEditor,
    ElButton,
    Check,
    ElIcon,
  },
})
export default class Code extends Vue {
}
</script>

<template>
  <div class="code-container">
    <div class="btn-container">
      <el-button type="primary" size="small">
        <el-icon size="large" style="margin-right: 5px"><Check /></el-icon> Run Code</el-button
      >
    </div>
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
