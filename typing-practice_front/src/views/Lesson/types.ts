export interface IResult {
  [key: number]: string;
}

export enum StepStatuses {
  COMPLETE = 'complete',
  ERROR = 'error',
  NOT_RESOLVE = 'not_resolve'
}

export type Step = {
  value: string;
  status: StepStatuses;
};
