import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Assinature_emailCreateOrConnectWithoutPincturesInput } from "../inputs/Assinature_emailCreateOrConnectWithoutPincturesInput";
import { Assinature_emailCreateWithoutPincturesInput } from "../inputs/Assinature_emailCreateWithoutPincturesInput";
import { Assinature_emailWhereUniqueInput } from "../inputs/Assinature_emailWhereUniqueInput";

@TypeGraphQL.InputType("Assinature_emailCreateNestedOneWithoutPincturesInput", {
  isAbstract: true
})
export class Assinature_emailCreateNestedOneWithoutPincturesInput {
  @TypeGraphQL.Field(_type => Assinature_emailCreateWithoutPincturesInput, {
    nullable: true
  })
  create?: Assinature_emailCreateWithoutPincturesInput | undefined;

  @TypeGraphQL.Field(_type => Assinature_emailCreateOrConnectWithoutPincturesInput, {
    nullable: true
  })
  connectOrCreate?: Assinature_emailCreateOrConnectWithoutPincturesInput | undefined;

  @TypeGraphQL.Field(_type => Assinature_emailWhereUniqueInput, {
    nullable: true
  })
  connect?: Assinature_emailWhereUniqueInput | undefined;
}
