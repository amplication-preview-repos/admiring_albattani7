/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InterviewerWhereInput } from "./InterviewerWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { InterviewerOrderByInput } from "./InterviewerOrderByInput";

@ArgsType()
class InterviewerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InterviewerWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => InterviewerWhereInput, { nullable: true })
  @Type(() => InterviewerWhereInput)
  where?: InterviewerWhereInput;

  @ApiProperty({
    required: false,
    type: [InterviewerOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [InterviewerOrderByInput], { nullable: true })
  @Type(() => InterviewerOrderByInput)
  orderBy?: Array<InterviewerOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { InterviewerFindManyArgs as InterviewerFindManyArgs };
