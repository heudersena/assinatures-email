import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PincturesUpdateWithoutAssinatureIdInput } from "../inputs/PincturesUpdateWithoutAssinatureIdInput";
import { PincturesWhereUniqueInput } from "../inputs/PincturesWhereUniqueInput";

@TypeGraphQL.InputType("PincturesUpdateWithWhereUniqueWithoutAssinatureIdInput", {
  isAbstract: true
})
export class PincturesUpdateWithWhereUniqueWithoutAssinatureIdInput {
  @TypeGraphQL.Field(_type => PincturesWhereUniqueInput, {
    nullable: false
  })
  where!: PincturesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PincturesUpdateWithoutAssinatureIdInput, {
    nullable: false
  })
  data!: PincturesUpdateWithoutAssinatureIdInput;
}
