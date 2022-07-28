import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PincturesWhereInput } from "../../../inputs/PincturesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPincturesArgs {
  @TypeGraphQL.Field(_type => PincturesWhereInput, {
    nullable: true
  })
  where?: PincturesWhereInput | undefined;
}
