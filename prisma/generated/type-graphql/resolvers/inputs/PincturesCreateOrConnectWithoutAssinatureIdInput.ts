import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PincturesCreateWithoutAssinatureIdInput } from "../inputs/PincturesCreateWithoutAssinatureIdInput";
import { PincturesWhereUniqueInput } from "../inputs/PincturesWhereUniqueInput";

@TypeGraphQL.InputType("PincturesCreateOrConnectWithoutAssinatureIdInput", {
  isAbstract: true
})
export class PincturesCreateOrConnectWithoutAssinatureIdInput {
  @TypeGraphQL.Field(_type => PincturesWhereUniqueInput, {
    nullable: false
  })
  where!: PincturesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PincturesCreateWithoutAssinatureIdInput, {
    nullable: false
  })
  create!: PincturesCreateWithoutAssinatureIdInput;
}
