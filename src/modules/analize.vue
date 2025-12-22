<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({})
export default class Analize extends Vue {}
</script>

<template>
  <div class="analize-container"></div>
</template>

<style scoped lang="less">
.analize-container {
  width: 100%;
  height: 100%;
  border-radius: var(--br-size);
  background-color: var(--card-bg-color);
}
</style>
