import {
  GetCodeLexicalAnalysisResSuccessDTO,
  GetCodeLexicalAnalysisResFaildDTO,
} from '@/common/modules/data.dto';

export const lexicalAnalysisSuccessRes: GetCodeLexicalAnalysisResSuccessDTO[] = [
  {
    col_end: 4,
    col_start: 1,
    line: 1,
    type: 'T_Identifier',
    value: 'main',
  },
  {
    col_end: 5,
    col_start: 5,
    line: 1,
    type: '(',
    value: '(',
  },
  {
    col_end: 6,
    col_start: 6,
    line: 1,
    type: ')',
    value: ')',
  },
  {
    col_end: 1,
    col_start: 1,
    line: 2,
    type: '{',
    value: '{',
  },
  {
    col_end: 7,
    col_start: 2,
    line: 2,
    type: 'T_Identifier',
    value: 'retunr',
  },
  {
    col_end: 8,
    col_start: 8,
    line: 2,
    type: 'T_IntConstant',
    value: '1',
  },
  {
    col_end: 9,
    col_start: 9,
    line: 2,
    type: ';',
    value: ';',
  },
  {
    col_end: 10,
    col_start: 10,
    line: 2,
    type: '}',
    value: '}',
  },
];

export const lexicalAnalysisFaildRes: GetCodeLexicalAnalysisResFaildDTO[] = [
  {
    col_end: 1,
    col_start: 1,
    line: 1,
    message: 'Invalid identifier starting with digit',
    type: 'LEX_ERROR',
    value: '1sdadsa',
  },
];
