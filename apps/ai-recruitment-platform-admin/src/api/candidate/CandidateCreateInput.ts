import { ApplicationCreateNestedManyWithoutCandidatesInput } from "./ApplicationCreateNestedManyWithoutCandidatesInput";
import { InputJsonValue } from "../../types";

export type CandidateCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutCandidatesInput;
  email?: string | null;
  name?: string | null;
  resume?: InputJsonValue;
};
