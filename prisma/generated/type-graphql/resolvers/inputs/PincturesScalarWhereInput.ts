import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PincturesScalarWhereInput", {
  isAbstract: true
})
export class PincturesScalarWhereInput {
  @TypeGraphQL.Field(_type => [PincturesScalarWhereInput], {
    nullable: true
  })
  AND?: PincturesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PincturesScalarWhereInput], {
    nullable: true
  })
  OR?: PincturesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PincturesScalarWhereInput], {
    nullable: true
  })
  NOT?: PincturesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  path?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  assinature_emailId?: StringNullableFilter | undefined;
}
