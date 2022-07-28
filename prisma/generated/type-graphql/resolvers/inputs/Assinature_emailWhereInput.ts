import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Assinature_emailWhereInput", {
  isAbstract: true
})
export class Assinature_emailWhereInput {
  @TypeGraphQL.Field(_type => [Assinature_emailWhereInput], {
    nullable: true
  })
  AND?: Assinature_emailWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Assinature_emailWhereInput], {
    nullable: true
  })
  OR?: Assinature_emailWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Assinature_emailWhereInput], {
    nullable: true
  })
  NOT?: Assinature_emailWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  alreadyupdated?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;
}
