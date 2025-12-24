/** 词法分析 */
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

/** 语法分析 */
export interface SynaticAnalysisDTO {
  kind: number;
  name: string;
  type: number;
}

export interface GetSyntacticAnalysisReqSuccessDTO {
  level: number;
  symbols: SynaticAnalysisDTO[];
}

export interface GetSyntacticAnalysisFaildDTO {
  error: string;
  raw_stderr: string;
  raw_stdout: string;
  returncode: number;
  success: boolean;
}

/** 语义分析 */
export interface GetSemanticAndIntermediateCodeReqDTO {
  code: string;
}

export interface GetSemanticAndIntermediateCodeResDTO {
  pcode: Array<string>;
  quads: {
    functions: {
      main: Array<Array<string>>;
    };
  };
}

/** 目标代码生成 */
export interface GetSyntaticTreeReqDTO {
  code: string;
}

export interface GetSyntaticTreeResDTO {
  type: string;
  name: string;
  value: string;
  son: Array<GetSyntaticTreeResDTO>;
}
