<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { SyntacticAnalysisState } from '@/common/interface/data.vo';
import { CodeState, SymbolLabel, TypeLabel } from '@/common/enum/data.enum';

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

  parseKind(kind: number): SymbolLabel {
    switch (kind) {
      case 0:
        return 'func';
      case 1:
        return 'var';
      case 2:
        return 'param';
      default:
        return 'unknown';
    }
  }

  parseType(type: number): TypeLabel {
    switch (type) {
      case 0:
        return 'int';
      default:
        return 'unknown';
    }
  }
}
</script>

<template>
  <header class="lc-header" v-if="codeState === 'SUCCESS'">
    <span>Symbols Table</span>
  </header>
  <el-table
    v-if="codeState === 'SUCCESS'"
    :data="syntacticAnalysisState"
    border
    style="width: 100%"
  >
    <el-table-column type="expand">
      <template #default="props">
        <el-table :data="props.row.symbols">
          <el-table-column label="Kind" :formatter="(row) => parseKind(row.kind)" />
          <el-table-column label="Name" prop="name" />
          <el-table-column label="Type" :formatter="(row) => parseType(row.type)" />
        </el-table>
      </template>
    </el-table-column>
    <el-table-column label="Level" prop="level" />
  </el-table>
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
