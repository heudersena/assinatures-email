import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PincturesCreateNestedManyWithoutAssinatureIdInput } from "../inputs/PincturesCreateNestedManyWithoutAssinatureIdInput";

@TypeGraphQL.InputType("Assinature_emailCreateInput", {
  isAbstract: true
})
export class Assinature_emailCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  alreadyupdated?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => PincturesCreateNestedManyWithoutAssinatureIdInput, {
    nullable: true
  })
  pinctures?: PincturesCreateNestedManyWithoutAssinatureIdInput | undefined;
}
