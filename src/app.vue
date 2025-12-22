<script lang="ts">
import { Vue, Options } from 'vue-class-component';

import Code from '@/modules/code.vue';
import Analize from '@/modules/analize.vue';
import Terminal from '@/modules/terminal.vue';
import Navheader from '@/components/nav-header.vue';

@Options({
  components: {
    Code,
    Analize,
    Terminal,
    Navheader,
  },
})
export default class App extends Vue {
  mounted(): void {
    console.log('App mounted');
  }
}
</script>

<template>
  <div class="lay">
    <Navheader />
    <div class="lay-main">
      <div class="lay-code">
        <Code />
      </div>
      <div class="lay-analize">
        <Analize />
      </div>
    </div>
    <div class="lay-terminal">
      <Terminal />
    </div>
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
    }

    & .lay-analize {
      width: 45%;
      height: 100%;
      padding: 5px;
    }
  }

  & .lay-terminal {
    width: 90%;
    height: 20%;
    background-color: blue;
  }
}
</style>
