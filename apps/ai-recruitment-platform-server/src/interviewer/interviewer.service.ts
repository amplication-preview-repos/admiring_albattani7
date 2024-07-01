import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InterviewerServiceBase } from "./base/interviewer.service.base";

@Injectable()
export class InterviewerService extends InterviewerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
