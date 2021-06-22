export enum EstimateExpert {
  PIZDABOL = 0,
  FROM_TIME_TO_TIME = 1,
  GENIUS = 2
}
export interface User {
  id: number;
  name: string;
}

export interface Feedback {
  pmName: string;
  devId: number;
  communication: number;
  estimateFuckup: EstimateExpert;
  meetingLate: boolean;
  ignoreMeeting?: boolean;
  comment?: string;
}