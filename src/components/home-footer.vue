<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({})
export default class HomeFooter extends Vue {}
</script>

<template>
  <footer class="home-footer">Copyright © 2025 coolarec & atrior. All rights reserved. 🎉</footer>
</template>

<style scoped lang="less">
.home-footer {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  color: gray;
  user-select: none;
}
</style>
