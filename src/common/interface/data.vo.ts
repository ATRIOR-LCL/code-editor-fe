import {
  GetCodeLexicalAnalysisResSuccessDTO,
  GetSyntacticAnalysisFaildDTO,
  GetSyntacticAnalysisReqSuccessDTO,
} from '../modules/data.dto';
import { CodeState } from '../enum/data.enum';

export interface LexicalAnalysisState extends GetCodeLexicalAnalysisResSuccessDTO {}

export interface SyntacticAnalysisState extends GetSyntacticAnalysisReqSuccessDTO {}


export interface lexicalErrorState {
  line: number;
  col_start: number;
  col_end: number;
  message: string;
  type: string;
}

export interface SyntaticErrorState extends GetSyntacticAnalysisFaildDTO {}

export interface HomeState {
  code: string; // 代码内容
  isSaved: boolean; // 代码是否保存
  codeState: CodeState; // 代码状态
  lexicalAnalysisState?: LexicalAnalysisState[]; // 词法分析结果
  syntacticAnalysisState?: SyntacticAnalysisState[]; // 语法分析结果
  errorStates?: {
    // 错误信息
    lexicalErrors?: lexicalErrorState[]; // 词法错误信息
    syntaticErrors?: SyntaticErrorState; // 语法错误信息
  };
}
