import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PincturesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PincturesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PincturesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PincturesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PincturesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PincturesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PincturesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PincturesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  path?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  assinature_emailId?: StringNullableWithAggregatesFilter | undefined;
}
