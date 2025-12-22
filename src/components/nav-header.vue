<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({})
export default class NavHeader extends Vue {}
</script>

<template>
    <header class="nav-header"></header>
</template>

<style scoped lang="less">
.nav-header {
    width: 100%;
    height: 70px;
    background-color: var(--card-bg-color);
    position: fixed;
    top: 0;
}
</style>