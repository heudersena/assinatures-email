import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Assinature_emailCreateWithoutPincturesInput } from "../inputs/Assinature_emailCreateWithoutPincturesInput";
import { Assinature_emailUpdateWithoutPincturesInput } from "../inputs/Assinature_emailUpdateWithoutPincturesInput";

@TypeGraphQL.InputType("Assinature_emailUpsertWithoutPincturesInput", {
  isAbstract: true
})
export class Assinature_emailUpsertWithoutPincturesInput {
  @TypeGraphQL.Field(_type => Assinature_emailUpdateWithoutPincturesInput, {
    nullable: false
  })
  update!: Assinature_emailUpdateWithoutPincturesInput;

  @TypeGraphQL.Field(_type => Assinature_emailCreateWithoutPincturesInput, {
    nullable: false
  })
  create!: Assinature_emailCreateWithoutPincturesInput;
}
