<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Provide } from 'vue-property-decorator';
import type { HomeState } from './common/interface/data';
import { lexicalAnalysisFaildRes, lexicalAnalysisSuccessRes } from './utils';

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
  };

  @Provide()
  updateCode(newCode: string): void {
    this.homeState.code = newCode;
    this.homeState.isSaved = false;
  }

  @Provide()
  runCode(): void {
    const loading = ElLoading.service({
      lock: true,
      text: 'Running code...',
      background: 'rgba(0, 0, 0, 0.7)',
    });

    setTimeout(() => {
      this.homeState.lexicalAnalysisState = {
        success: true,
        data: lexicalAnalysisSuccessRes,
      };
      // this.homeState.errorStates = lexicalAnalysisFaildRes;

      loading.close();
      console.log('Running code:', this.homeState.code);
    }, 2000);
  }

  @Provide()
  saveCode(): void {
    this.homeState.isSaved = true;
  }

  mounted(): void {
    console.log('App mounted');
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
  padding-top: max(70px, 0);
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
