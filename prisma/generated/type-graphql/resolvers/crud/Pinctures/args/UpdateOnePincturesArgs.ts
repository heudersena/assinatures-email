import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PincturesUpdateInput } from "../../../inputs/PincturesUpdateInput";
import { PincturesWhereUniqueInput } from "../../../inputs/PincturesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePincturesArgs {
  @TypeGraphQL.Field(_type => PincturesUpdateInput, {
    nullable: false
  })
  data!: PincturesUpdateInput;

  @TypeGraphQL.Field(_type => PincturesWhereUniqueInput, {
    nullable: false
  })
  where!: PincturesWhereUniqueInput;
}
