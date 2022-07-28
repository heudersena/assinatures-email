import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PincturesCreateInput } from "../../../inputs/PincturesCreateInput";
import { PincturesUpdateInput } from "../../../inputs/PincturesUpdateInput";
import { PincturesWhereUniqueInput } from "../../../inputs/PincturesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePincturesArgs {
  @TypeGraphQL.Field(_type => PincturesWhereUniqueInput, {
    nullable: false
  })
  where!: PincturesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PincturesCreateInput, {
    nullable: false
  })
  create!: PincturesCreateInput;

  @TypeGraphQL.Field(_type => PincturesUpdateInput, {
    nullable: false
  })
  update!: PincturesUpdateInput;
}
