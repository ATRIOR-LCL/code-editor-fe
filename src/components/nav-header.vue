<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { ElIcon } from 'element-plus';
import { MostlyCloudy, UploadFilled } from '@element-plus/icons-vue';

@Options({
  components: {
    ElIcon,
    MostlyCloudy,
    UploadFilled,
  },
})
export default class NavHeader extends Vue {}
</script>

<template>
  <header class="nav-header">
    <div class="nav-sec">
      <el-icon style="margin-right: 10px"><mostly-cloudy /></el-icon>
      <span class="title">Code Editor</span>
      <span class="subtitle">online code compile tool</span>
    </div>
    <div class="nav-sec">
      <el-icon><upload-filled /></el-icon>
    </div>
  </header>
</template>

<style scoped lang="less">
.nav-header {
  width: 100%;
  height: 70px;
  background-color: var(--card-bg-color);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding: 0 100px;
  font-size: 35px;
  user-select: none;

  & .nav-sec {
    display: flex;
    align-items: center;
    transition: color 0.3s ease;

    &:hover {
      color: #409EFF;

      & .subtitle {
        color: #40a0ffa2;
      }
    }
  }

  & .subtitle {
    color: gray;
    font-weight: normal;
    line-height: 35px;
    font-size: 16px;
    margin-left: 10px;
    transition: all 0.3s ease;
    transform: translateY(20%);
  }
}
</style>
