export interface GetCodeReqDTO {
  code: string;
}

export interface GetCodeResSuccessDTO {
  col_end: number;
  col_start: number;
  line: number;
  type: string;
  value: string;
}

export interface GetCodeResFaildDTO extends GetCodeResSuccessDTO {
  message: string;
}

export interface Res {
  success: boolean;
  code: number;
  data: (GetCodeResSuccessDTO | GetCodeResFaildDTO)[];
}
