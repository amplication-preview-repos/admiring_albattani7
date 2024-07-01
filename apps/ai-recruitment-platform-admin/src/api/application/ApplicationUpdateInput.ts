import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ApplicationUpdateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  job?: JobWhereUniqueInput | null;
  status?: "Option1" | null;
};
