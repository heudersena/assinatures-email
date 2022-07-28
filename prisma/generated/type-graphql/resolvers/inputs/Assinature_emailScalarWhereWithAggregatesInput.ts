import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Assinature_emailScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Assinature_emailScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Assinature_emailScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Assinature_emailScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Assinature_emailScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Assinature_emailScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Assinature_emailScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Assinature_emailScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  password?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  alreadyupdated?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeWithAggregatesFilter | undefined;
}
