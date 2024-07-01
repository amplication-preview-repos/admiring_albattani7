import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  requirements?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
