export interface GetCodeLexicalAnalysisReqDTO {
  code: string;
}

export interface GetCodeLexicalAnalysisResSuccessDTO {
  col_end: number;
  col_start: number;
  line: number;
  type: string;
  value: string;
}

export interface GetCodeLexicalAnalysisResFaildDTO extends GetCodeLexicalAnalysisResSuccessDTO {
  message: string;
}

export interface Res {
  success: boolean;
  code: number;
  data: (GetCodeLexicalAnalysisResSuccessDTO | GetCodeLexicalAnalysisResFaildDTO)[];
}
