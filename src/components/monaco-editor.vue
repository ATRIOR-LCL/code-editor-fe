<template>
  <div class="wrap">
    <div ref="el" class="editor"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import * as monaco from 'monaco-editor';
import { Inject } from 'vue-property-decorator';

@Options({})
export default class MonacoEditor extends Vue {

  mounted() {
    this.$nextTick(() => {
      const el = this.$refs.el as HTMLDivElement;

       const editor = monaco.editor.create(el, {
        value: '',
        language: 'cpp',
        theme: 'vs-dark',
      });

      editor.onDidChangeModelContent(() => {
        const code = editor.getValue();
        console.log('Code changed:', code);
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
