import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PincturesWhereUniqueInput } from "../../../inputs/PincturesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePincturesArgs {
  @TypeGraphQL.Field(_type => PincturesWhereUniqueInput, {
    nullable: false
  })
  where!: PincturesWhereUniqueInput;
}
