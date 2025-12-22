<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { ElIcon } from 'element-plus';
import { MostlyCloudy } from '@element-plus/icons-vue';

@Options({
  components: {
    ElIcon,
    MostlyCloudy,
  },
})
export default class NavHeader extends Vue {}
</script>

<template>
  <header class="nav-header">
    <el-icon style="margin-right: 10px"><mostly-cloudy /></el-icon>
    <span class="title">Code Editor</span>
    <span class="subtitle">online code compile tool</span>
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
  justify-content: left;
  align-items: center;
  font-weight: bold;
  padding: 0 100px;
  font-size: 35px;

  & .subtitle {
    line-height: 35;
    color: gray;
    font-weight: normal;
    font-size: 16px;
    margin-top:16px;
    margin-left: 10px;
  }
}
</style>
