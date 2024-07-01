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
import { InterviewerWhereUniqueInput } from "./InterviewerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { InterviewerUpdateInput } from "./InterviewerUpdateInput";

@ArgsType()
class UpdateInterviewerArgs {
  @ApiProperty({
    required: true,
    type: () => InterviewerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InterviewerWhereUniqueInput)
  @Field(() => InterviewerWhereUniqueInput, { nullable: false })
  where!: InterviewerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => InterviewerUpdateInput,
  })
  @ValidateNested()
  @Type(() => InterviewerUpdateInput)
  @Field(() => InterviewerUpdateInput, { nullable: false })
  data!: InterviewerUpdateInput;
}

export { UpdateInterviewerArgs as UpdateInterviewerArgs };
