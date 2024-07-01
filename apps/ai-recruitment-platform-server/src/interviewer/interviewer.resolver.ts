import * as graphql from "@nestjs/graphql";
import { InterviewerResolverBase } from "./base/interviewer.resolver.base";
import { Interviewer } from "./base/Interviewer";
import { InterviewerService } from "./interviewer.service";

@graphql.Resolver(() => Interviewer)
export class InterviewerResolver extends InterviewerResolverBase {
  constructor(protected readonly service: InterviewerService) {
    super(service);
  }
}
