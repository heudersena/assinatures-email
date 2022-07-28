import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Assinature_emailCreateWithoutPincturesInput } from "../inputs/Assinature_emailCreateWithoutPincturesInput";
import { Assinature_emailWhereUniqueInput } from "../inputs/Assinature_emailWhereUniqueInput";

@TypeGraphQL.InputType("Assinature_emailCreateOrConnectWithoutPincturesInput", {
  isAbstract: true
})
export class Assinature_emailCreateOrConnectWithoutPincturesInput {
  @TypeGraphQL.Field(_type => Assinature_emailWhereUniqueInput, {
    nullable: false
  })
  where!: Assinature_emailWhereUniqueInput;

  @TypeGraphQL.Field(_type => Assinature_emailCreateWithoutPincturesInput, {
    nullable: false
  })
  create!: Assinature_emailCreateWithoutPincturesInput;
}
