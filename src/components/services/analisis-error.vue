<script lang="ts">
import { Vue, Options } from 'vue-class-component';

import { ElResult } from 'element-plus';

@Options({
  components: {
    ElResult,
  },
})
export default class AnalisisError extends Vue {}
</script>

<template>
  <div class="res-container">
    <el-result icon="error" title="Error Tip">
      <template #sub-title>
        <p>An error occurred during the code compilation process. Please check the code.</p>
      </template>
    </el-result>
  </div>
</template>

<style scoped lang="less">
.res-container {
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
</style>
