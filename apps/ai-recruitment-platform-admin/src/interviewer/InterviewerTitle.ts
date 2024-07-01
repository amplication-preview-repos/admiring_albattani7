import { Interviewer as TInterviewer } from "../api/interviewer/Interviewer";

export const INTERVIEWER_TITLE_FIELD = "name";

export const InterviewerTitle = (record: TInterviewer): string => {
  return record.name?.toString() || String(record.id);
};
