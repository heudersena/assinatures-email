import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PincturesCreateInput } from "../../../inputs/PincturesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePincturesArgs {
  @TypeGraphQL.Field(_type => PincturesCreateInput, {
    nullable: false
  })
  data!: PincturesCreateInput;
}
