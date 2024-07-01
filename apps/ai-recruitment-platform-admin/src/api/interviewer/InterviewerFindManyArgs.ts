import { InterviewerWhereInput } from "./InterviewerWhereInput";
import { InterviewerOrderByInput } from "./InterviewerOrderByInput";

export type InterviewerFindManyArgs = {
  where?: InterviewerWhereInput;
  orderBy?: Array<InterviewerOrderByInput>;
  skip?: number;
  take?: number;
};
