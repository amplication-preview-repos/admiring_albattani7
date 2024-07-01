import { ApplicationUpdateManyWithoutCandidatesInput } from "./ApplicationUpdateManyWithoutCandidatesInput";
import { InputJsonValue } from "../../types";

export type CandidateUpdateInput = {
  applications?: ApplicationUpdateManyWithoutCandidatesInput;
  email?: string | null;
  name?: string | null;
  resume?: InputJsonValue;
};
