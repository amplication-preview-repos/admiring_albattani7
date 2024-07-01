import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ApplicationWhereInput = {
  candidate?: CandidateWhereUniqueInput;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  status?: "Option1";
};
