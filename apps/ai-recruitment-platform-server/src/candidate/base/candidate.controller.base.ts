/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CandidateService } from "../candidate.service";
import { CandidateCreateInput } from "./CandidateCreateInput";
import { Candidate } from "./Candidate";
import { CandidateFindManyArgs } from "./CandidateFindManyArgs";
import { CandidateWhereUniqueInput } from "./CandidateWhereUniqueInput";
import { CandidateUpdateInput } from "./CandidateUpdateInput";
import { ApplicationFindManyArgs } from "../../application/base/ApplicationFindManyArgs";
import { Application } from "../../application/base/Application";
import { ApplicationWhereUniqueInput } from "../../application/base/ApplicationWhereUniqueInput";
import { AnalyzeCandidateCvInput } from "../AnalyzeCandidateCvInput";

export class CandidateControllerBase {
  constructor(protected readonly service: CandidateService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Candidate })
  async createCandidate(
    @common.Body() data: CandidateCreateInput
  ): Promise<Candidate> {
    return await this.service.createCandidate({
      data: data,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        resume: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Candidate] })
  @ApiNestedQuery(CandidateFindManyArgs)
  async candidates(@common.Req() request: Request): Promise<Candidate[]> {
    const args = plainToClass(CandidateFindManyArgs, request.query);
    return this.service.candidates({
      ...args,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        resume: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Candidate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async candidate(
    @common.Param() params: CandidateWhereUniqueInput
  ): Promise<Candidate | null> {
    const result = await this.service.candidate({
      where: params,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        resume: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Candidate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCandidate(
    @common.Param() params: CandidateWhereUniqueInput,
    @common.Body() data: CandidateUpdateInput
  ): Promise<Candidate | null> {
    try {
      return await this.service.updateCandidate({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
          resume: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Candidate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCandidate(
    @common.Param() params: CandidateWhereUniqueInput
  ): Promise<Candidate | null> {
    try {
      return await this.service.deleteCandidate({
        where: params,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
          resume: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/applications")
  @ApiNestedQuery(ApplicationFindManyArgs)
  async findApplications(
    @common.Req() request: Request,
    @common.Param() params: CandidateWhereUniqueInput
  ): Promise<Application[]> {
    const query = plainToClass(ApplicationFindManyArgs, request.query);
    const results = await this.service.findApplications(params.id, {
      ...query,
      select: {
        candidate: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        job: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/applications")
  async connectApplications(
    @common.Param() params: CandidateWhereUniqueInput,
    @common.Body() body: ApplicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      applications: {
        connect: body,
      },
    };
    await this.service.updateCandidate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/applications")
  async updateApplications(
    @common.Param() params: CandidateWhereUniqueInput,
    @common.Body() body: ApplicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      applications: {
        set: body,
      },
    };
    await this.service.updateCandidate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/applications")
  async disconnectApplications(
    @common.Param() params: CandidateWhereUniqueInput,
    @common.Body() body: ApplicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      applications: {
        disconnect: body,
      },
    };
    await this.service.updateCandidate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Post("/analyze-cv")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async AnalyzeCandidateCv(
    @common.Body()
    body: AnalyzeCandidateCvInput
  ): Promise<string> {
    return this.service.AnalyzeCandidateCv(body);
  }
}