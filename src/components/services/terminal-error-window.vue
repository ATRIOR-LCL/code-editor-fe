<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { HomeState } from '@/common/interface/data.vo';

import LexicalError from '../errors/lexical-error.vue';

@Options({
  components: {
    LexicalError,
  },
})
export default class TerminalErrorWindow extends Vue {
  @Prop({ required: true })
  errorStates!: HomeState['errorStates'];
}
</script>

<template>
  <LexicalError v-if="errorStates?.lexicalErrors" :lexicalErrors="errorStates.lexicalErrors" />
</template>
