import {
  GetCodeLexicalAnalysisResSuccessDTO,
  GetSyntacticAnalysisFaildDTO,
  GetSyntacticAnalysisReqSuccessDTO,
  GetSemanticAndIntermediateCodeResDTO,
  GetSyntaticTreeResDTO,
} from '../modules/data.dto';
import { CodeState } from '../enum/data.enum';

export interface LexicalAnalysisState extends GetCodeLexicalAnalysisResSuccessDTO {}

export interface SyntacticAnalysisState extends GetSyntacticAnalysisReqSuccessDTO {}

export interface SemanticAndIntermediateCodeState extends GetSemanticAndIntermediateCodeResDTO {}

export interface lexicalErrorState {
  line: number;
  col_start: number;
  col_end: number;
  message: string;
  type: string;
}

export interface SyntaticErrorState extends GetSyntacticAnalysisFaildDTO {}

export interface SyntaticTreeState extends GetSyntaticTreeResDTO {}

export interface OptimizedAsmCodeState {
  optimized_asm: string;
}

export type AsmCodeState = string;

export interface HomeState {
  code: string; // 代码内容
  isSaved: boolean; // 代码是否保存
  hasInput: boolean;
  terminalResult?: string;
  userInput: string;
  codeState: CodeState; // 代码状态
  lexicalAnalysisState?: LexicalAnalysisState[]; // 词法分析结果
  syntacticAnalysisState?: SyntacticAnalysisState[]; // 语法分析结果
  semanticAndIntermediateCodeState?: SemanticAndIntermediateCodeState; // 语义分析及中间代码s生成结果
  syntaticTreeState?: SyntaticTreeState; // 语法树结果
  asmCodeState?: AsmCodeState; // 目标代码生成结果
  optimizedAsmCodeState?: OptimizedAsmCodeState; // 优化后的目标代码生成结果
  errorStates?: {
    // 错误信息
    error: string; // 通用错误信息
    lexicalErrors?: lexicalErrorState[]; // 词法错误信息
    syntaticErrors?: SyntaticErrorState; // 语法错误信息
  };
}
