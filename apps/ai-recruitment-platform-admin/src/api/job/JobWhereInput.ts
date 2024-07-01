import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type JobWhereInput = {
  applications?: ApplicationListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  requirements?: StringNullableFilter;
  title?: StringNullableFilter;
};
