import { Application } from "../application/Application";

export type Job = {
  applications?: Array<Application>;
  createdAt: Date;
  description: string | null;
  id: string;
  requirements: string | null;
  title: string | null;
  updatedAt: Date;
};
