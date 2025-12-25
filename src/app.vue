<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Provide } from 'vue-property-decorator';
import type { HomeState } from './common/interface/data.vo';
import {
  fetchLexicalData,
  fetchSyntacticData,
  fetchSemanticAndIntermediateCodeData,
  fetchSyntaticTreeData,
  fetchAsmCodeData,
} from './utils/fetch-data';
import Cookies from 'js-cookie';

import Code from '@/modules/code.vue';
import Analize from '@/modules/analize.vue';
import Terminal from '@/modules/terminal.vue';
import Navheader from '@/components/nav-header.vue';
import HomeFooter from '@/components/home-footer.vue';
import { ElLoading } from 'element-plus';

@Options({
  components: {
    Code,
    Analize,
    Terminal,
    Navheader,
    HomeFooter,
  },
})
export default class App extends Vue {
  @Provide({ reactive: true })
  homeState: HomeState = {
    code: '',
    isSaved: true,
    hasInput: false,
    userInput: '',
    codeState: 'PENDING',
  };

  @Provide()
  updateCode(newCode: string): void {
    this.homeState.code = newCode;
    this.homeState.isSaved = false;
  }

  @Provide()
  toRunCode() {
    this.checkHasInput();
  }

  @Provide()
  async runCode(): Promise<void> {
    this.homeState.terminalResult = '10';
    console.info('User input received:', this.homeState.userInput);
  }

  @Provide()
  async saveCode(): Promise<void> {
    /** 初始化代码状态  */
    this.homeState.isSaved = true;
    this.homeState.errorStates = undefined;

    Cookies.set('code', this.homeState.code);

    const loading = ElLoading.service({
      lock: true,
      text: 'Running code...',
      background: 'rgba(0, 0, 0, 0.7)',
    });

    try {
      /** Lexical Analysis */
      try {
        const fetchLexicalRes = await fetchLexicalData(this.homeState.code);
        console.info('Fetched lexical analysis result:', fetchLexicalRes);
        this.homeState = {
          ...this.homeState,
          lexicalAnalysisState: fetchLexicalRes.data,
        };
      } catch (e) {
        console.info('Lexical analysis error:', e.response.data);
        this.homeState = {
          ...this.homeState,
          codeState: 'ERROR',
          errorStates: {
            lexicalErrors: e.response.data,
          },
        };
        return;
      }

      /** Syntactic Analysis */
      try {
        const fetchSyntacticRes = await fetchSyntacticData(this.homeState.code);
        console.info('Fetched syntactic analysis result:', fetchSyntacticRes);
        this.homeState = {
          ...this.homeState,
          syntacticAnalysisState: fetchSyntacticRes.data,
        };
      } catch (e) {
        console.info('Syntactic analysis error:', e.response.data);
        this.homeState = {
          ...this.homeState,
          codeState: 'ERROR',
          errorStates: {
            syntaticErrors: e.response.data,
          },
        };
        return;
      }

      /** Semantic Analysis and Intermediate Code Generation */
      try {
        const fetchSemanticRes = await fetchSemanticAndIntermediateCodeData(this.homeState.code);
        this.homeState = {
          ...this.homeState,
          semanticAndIntermediateCodeState: {
            pcode: fetchSemanticRes.pcode,
            quads: fetchSemanticRes.quads,
          },
        };
      } catch (e) {
        console.info('Semantic analysis error:', e.response.data);
        return;
      }

      /** Syntactic Tree Generation */
      try {
        const fetchSyntaticTreeRes = await fetchSyntaticTreeData(this.homeState.code);
        console.info('Fetched syntactic tree result:', fetchSyntaticTreeRes.data);
        this.homeState = {
          ...this.homeState,
          syntaticTreeState: fetchSyntaticTreeRes.data,
        };
      } catch (e) {
        console.info('Syntactic tree generation error:', e.response.data);
        return;
      }

      /** Asm Code Generation */
      try {
        const fetchAsmCodeRes = await fetchAsmCodeData(this.homeState.code);
        console.info('Fetched asm code result:', fetchAsmCodeRes.data);
        this.homeState = {
          ...this.homeState,
          asmCodeState: fetchAsmCodeRes.data,
        };
      } catch (e) {
        console.info('Asm code generation error:', e.response.data);
        return;
      }

      this.homeState = {
        ...this.homeState,
        codeState: 'SUCCESS',
      };
    } catch (error) {
      this.homeState = {
        ...this.homeState,
        codeState: 'ERROR',
      };
    } finally {
      loading.close();
    }
  }

  private checkHasInput(): void {
    this.homeState.hasInput = this.homeState.code.includes('inputInt()');
  }

  mounted(): void {
    const savedCode = Cookies.get('code') || '';
    if (savedCode.length) {
      this.updateCode(savedCode);
      this.saveCode();
    }
  }
}
</script>

<template>
  <div class="lay">
    <Navheader />

    <!-- 代码框、编译过程标签页 -->
    <div class="lay-main">
      <div class="lay-code">
        <Code />
      </div>
      <div class="lay-analize">
        <Analize />
      </div>
    </div>

    <!-- 终端标签页 -->
    <div class="lay-terminal">
      <Terminal />
    </div>

    <home-footer />
  </div>
</template>

<style scoped lang="less">
.lay {
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: max(50px, 0);
  gap: 10px;

  & .lay-main {
    width: 90%;
    height: 65%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & .lay-code {
      width: 45%;
      height: 100%;
      padding: 5px;
      position: relative;
      &::before {
        content: 'Coding Here';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        transform: translateX(5px) translateY(-120%);
        color: gray;
      }
    }

    & .lay-analize {
      width: 45%;
      height: 100%;
      padding: 5px;
    }
  }

  & .lay-terminal {
    width: 85%;
    height: 20%;
  }
}
</style>
