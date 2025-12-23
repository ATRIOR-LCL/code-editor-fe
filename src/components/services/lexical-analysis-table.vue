<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { LexicalAnalysisState } from '@/common/interface/data.vo';
import { CodeState } from '@/common/enum/data.enum';

import { ElTable, ElTableColumn, ElButton, ElIcon, ElDialog, ElPopover } from 'element-plus';
import { InfoFilled } from '@element-plus/icons-vue';

@Options({
  components: {
    ElTable,
    ElTableColumn,
    ElButton,
    ElIcon,
    InfoFilled,
    ElDialog,
    ElPopover,
  },
})
export default class LexicalAnalysisTable extends Vue {
  @Prop({ required: true })
  lexicalAnalysisState!: LexicalAnalysisState;

  @Prop({ required: true })
  codeState!: CodeState;

  showDialog: boolean = false;

  closeDialog() {
    this.showDialog = false;
  }

  openDialog() {
    this.showDialog = true;
  }
}
</script>

<template>
  <!-- 词法分析 section header -->
  <header class="lc-header">
    <span>Token Stream</span>
    <el-popover placement="top" width="200" trigger="hover">
      <template #reference>
        <el-icon @click="openDialog" style="cursor: pointer">
          <InfoFilled />
        </el-icon>
      </template>
      <div>Word Classification Table</div>
    </el-popover>
  </header>

  <!-- 词法分析 token stream 表格 -->
  <el-table v-if="codeState === 'SUCCESS'" :data="lexicalAnalysisState" stripe="true">
    <el-table-column prop="value" label="token" />
    <el-table-column prop="type" label="tokenType" />
  </el-table>
  <div v-else>程序有语法错误，请查看终端日志。</div>

  <!-- 单词分类表 dialog -->
  <el-dialog
    v-model="showDialog"
    :modal="false"
    modal-penetrable
    width="600px"
    title="Word Classification Table"
  >
    <el-table :data="lexicalAnalysisState" stripe="true" border>
      <el-table-column prop="value" label="Name" />
      <el-table-column prop="line" label="Kind" />
      <el-table-column prop="type" label="Type" />
    </el-table>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="closeDialog"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped lang="less">
.lc-header {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
