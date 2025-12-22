<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({})
export default class Terminal extends Vue {}
</script>

<template>
    <div class="tm-container"></div>
</template>

<style scoped lang="less">
.tm-container {
    width: 100%;
    height: 100%;
}
</style>

