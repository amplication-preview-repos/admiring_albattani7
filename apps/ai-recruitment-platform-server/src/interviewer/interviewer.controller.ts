import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InterviewerService } from "./interviewer.service";
import { InterviewerControllerBase } from "./base/interviewer.controller.base";

@swagger.ApiTags("interviewers")
@common.Controller("interviewers")
export class InterviewerController extends InterviewerControllerBase {
  constructor(protected readonly service: InterviewerService) {
    super(service);
  }
}
