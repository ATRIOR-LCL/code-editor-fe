<template>
  <div class="wrap">
    <div ref="el" class="editor"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import * as monaco from 'monaco-editor';
import { Inject } from 'vue-property-decorator';
import { HomeState } from '@/common/interface/data.vo';

@Options({})
export default class MonacoEditor extends Vue {
  @Inject()
  homeState!: HomeState;

  @Inject()
  updateCode!: (newCode: string) => void;

  mounted() {
    this.$nextTick(() => {
      const el = this.$refs.el as HTMLDivElement;

      monaco.editor.defineTheme('myTheme', {
        base: 'vs-dark', // vs / vs-dark / hc-black
        inherit: true,
        rules: [],
        colors: {
          'editor.background': '#111111',
        },
      });

      const editor = monaco.editor.create(el, {
        value: this.homeState.code,
        language: 'cpp',
        fontSize: 16,
        theme: 'myTheme',
        minimap: { enabled: false },
        scrollbar: {
          verticalScrollbarSize: 0,
          horizontalScrollbarSize: 0,
        },
      });

      editor.onDidChangeModelContent(() => {
        const code = editor?.getValue() || '';
        this.updateCode(code);
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
