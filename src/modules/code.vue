<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import MonacoEditor from '@/components/monaco-editor.vue';
import TestMonaco from '@/components/monaco-editor.vue';

@Options({
  components: {
    MonacoEditor
  },
})
export default class Code extends Vue {}
</script>

<template>
  <div class="code-container">
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
}
</style>
