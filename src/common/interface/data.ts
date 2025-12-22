import {
  GetCodeLexicalAnalysisResSuccessDTO,
  GetCodeLexicalAnalysisResFaildDTO,
} from '../modules/data.dto';

export interface LexicalAnalysisState {
  success: boolean;
  data: GetCodeLexicalAnalysisResSuccessDTO[];
}

export interface ErrorState {
  line: number;
  col_start: number;
  col_end: number;
  message: string;
  type: string;
}

export interface HomeState {
  code: string; // 代码内容
  isSaved: boolean; // 代码是否保存
  lexicalAnalysisState?: LexicalAnalysisState;
  errorStates?: ErrorState[];
}

