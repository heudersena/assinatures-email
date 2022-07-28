import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Assinature_emailRelationFilter } from "../inputs/Assinature_emailRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PincturesWhereInput", {
  isAbstract: true
})
export class PincturesWhereInput {
  @TypeGraphQL.Field(_type => [PincturesWhereInput], {
    nullable: true
  })
  AND?: PincturesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PincturesWhereInput], {
    nullable: true
  })
  OR?: PincturesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PincturesWhereInput], {
    nullable: true
  })
  NOT?: PincturesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  path?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => Assinature_emailRelationFilter, {
    nullable: true
  })
  assinatureId?: Assinature_emailRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  assinature_emailId?: StringNullableFilter | undefined;
}
