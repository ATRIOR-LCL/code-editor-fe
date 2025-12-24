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

export const syntacticAnalysisSuccessRes = [
  {
    level: 1,
    symbols: [
      {
        kind: 2,
        name: 'a',
        type: 0,
      },
    ],
  },
  {
    level: 0,
    symbols: [
      {
        kind: 0,
        name: 'main',
        type: 0,
      },
    ],
  },
];

export const syntacticAnalysisFaildRes = {
  error: "Syntax error at 1:1 - 1:1, near '('\n",
  raw_stderr: "Syntax error at 1:1 - 1:1, near '('\n",
  raw_stdout: '[\n]\n',
  returncode: 1,
  success: false,
};

let WordClassTokens = {
  T_And: '逻辑与运算符',
  T_Break: '跳出循环',
  T_Continue: '跳过本次循环',
  T_Else: '条件分支 else',
  T_Eq: '等于比较运算符',
  T_Explain: '注释或说明关键字',
  T_Ge: '大于等于运算符',
  T_Identifier: '标识符（变量名或函数名）',
  T_If: '条件判断 if',
  T_Int: '整型类型',
  T_IntConstant: '整型常量',
  T_Le: '小于等于运算符',
  T_Ne: '不等于比较运算符',
  T_Or: '逻辑或运算符',
  T_Power: '幂运算函数',
  T_Return: '函数返回语句',
  T_Void: '空类型',
  T_While: 'while 循环语句',
  T_inputInt: '输入整数函数',
  T_outputInt: '输出整数函数',
};

export const WordClassArray = Object.entries(WordClassTokens).map(([key, value]) => ({
  key,
  value,
}));