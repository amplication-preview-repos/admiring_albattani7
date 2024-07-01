import { Module } from "@nestjs/common";
import { InterviewerModuleBase } from "./base/interviewer.module.base";
import { InterviewerService } from "./interviewer.service";
import { InterviewerController } from "./interviewer.controller";
import { InterviewerResolver } from "./interviewer.resolver";

@Module({
  imports: [InterviewerModuleBase],
  controllers: [InterviewerController],
  providers: [InterviewerService, InterviewerResolver],
  exports: [InterviewerService],
})
export class InterviewerModule {}
