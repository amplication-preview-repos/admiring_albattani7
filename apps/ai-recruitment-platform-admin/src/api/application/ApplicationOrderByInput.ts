import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  candidateId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
