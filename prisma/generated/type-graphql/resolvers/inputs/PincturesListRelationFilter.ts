import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PincturesWhereInput } from "../inputs/PincturesWhereInput";

@TypeGraphQL.InputType("PincturesListRelationFilter", {
  isAbstract: true
})
export class PincturesListRelationFilter {
  @TypeGraphQL.Field(_type => PincturesWhereInput, {
    nullable: true
  })
  every?: PincturesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PincturesWhereInput, {
    nullable: true
  })
  some?: PincturesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PincturesWhereInput, {
    nullable: true
  })
  none?: PincturesWhereInput | undefined;
}
