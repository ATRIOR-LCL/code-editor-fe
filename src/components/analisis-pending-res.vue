<script lang="ts">
import { Vue, Options } from 'vue-class-component';

import { ElResult } from 'element-plus';

@Options({
  components: {
    ElResult,
  },
})
export default class AnalisisPendingRes extends Vue {}
</script>

<template>
  <div class="res-container">
    <el-result icon="info" title="Info Tip">
      <template #sub-title>
        <p>Please save the code to obtain the analysis results.</p>
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
