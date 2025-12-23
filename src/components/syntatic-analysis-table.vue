<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Inject, Prop } from 'vue-property-decorator';
import { SyntacticAnalysisState } from '@/common/interface/data.vo';
import { GetSyntacticAnalysisReqSuccessDTO } from '@/common/modules/data.dto';
import { CodeState } from '@/common/enum/data.enum';

import { ElTable, ElTableColumn } from 'element-plus';

@Options({
  components: {
    ElTable,
    ElTableColumn,
  },
})
export default class SyntaticAnalysisTable extends Vue {
  @Prop({ required: true })
  syntacticAnalysisState!: SyntacticAnalysisState;

  @Prop({ required: true })
  codeState!: CodeState;
}
</script>

<template>
  <el-table
    v-if="codeState === 'SUCCESS'"
    :data="syntacticAnalysisState"
    border
    style="width: 100%"
  >
    <el-table-column type="expand">
      <template #default="props">
        <el-table :data="props.row.symbols">
          <el-table-column label="Kind" prop="kind" />
          <el-table-column label="Name" prop="name" />
          <el-table-column label="Type" prop="type" />
        </el-table>
      </template>
    </el-table-column>
    <el-table-column label="Level" prop="level" />
  </el-table>
</template>

<style scoped lang="less"></style>
