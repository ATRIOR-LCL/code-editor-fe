<template>
  <div class="wrap">
    <div ref="el" class="editor"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import * as monaco from 'monaco-editor';

@Options({})
export default class MonacoEditor extends Vue {
  mounted() {
    this.$nextTick(() => {
      const el = this.$refs.el as HTMLDivElement;
      console.log('container:', el);

      monaco.editor.create(el, {
        value: 'hello monaco',
        language: 'plaintext',
        theme: 'vs-dark',
      });
    });
  }
}
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
}

.editor {
  width: 100%;
  height: 100%;
}
</style>
