import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PincturesCreateWithoutAssinatureIdInput } from "../inputs/PincturesCreateWithoutAssinatureIdInput";
import { PincturesUpdateWithoutAssinatureIdInput } from "../inputs/PincturesUpdateWithoutAssinatureIdInput";
import { PincturesWhereUniqueInput } from "../inputs/PincturesWhereUniqueInput";

@TypeGraphQL.InputType("PincturesUpsertWithWhereUniqueWithoutAssinatureIdInput", {
  isAbstract: true
})
export class PincturesUpsertWithWhereUniqueWithoutAssinatureIdInput {
  @TypeGraphQL.Field(_type => PincturesWhereUniqueInput, {
    nullable: false
  })
  where!: PincturesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PincturesUpdateWithoutAssinatureIdInput, {
    nullable: false
  })
  update!: PincturesUpdateWithoutAssinatureIdInput;

  @TypeGraphQL.Field(_type => PincturesCreateWithoutAssinatureIdInput, {
    nullable: false
  })
  create!: PincturesCreateWithoutAssinatureIdInput;
}
