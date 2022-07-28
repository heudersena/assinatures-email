import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Assinature_emailCreateOrConnectWithoutPincturesInput } from "../inputs/Assinature_emailCreateOrConnectWithoutPincturesInput";
import { Assinature_emailCreateWithoutPincturesInput } from "../inputs/Assinature_emailCreateWithoutPincturesInput";
import { Assinature_emailUpdateWithoutPincturesInput } from "../inputs/Assinature_emailUpdateWithoutPincturesInput";
import { Assinature_emailUpsertWithoutPincturesInput } from "../inputs/Assinature_emailUpsertWithoutPincturesInput";
import { Assinature_emailWhereUniqueInput } from "../inputs/Assinature_emailWhereUniqueInput";

@TypeGraphQL.InputType("Assinature_emailUpdateOneWithoutPincturesNestedInput", {
  isAbstract: true
})
export class Assinature_emailUpdateOneWithoutPincturesNestedInput {
  @TypeGraphQL.Field(_type => Assinature_emailCreateWithoutPincturesInput, {
    nullable: true
  })
  create?: Assinature_emailCreateWithoutPincturesInput | undefined;

  @TypeGraphQL.Field(_type => Assinature_emailCreateOrConnectWithoutPincturesInput, {
    nullable: true
  })
  connectOrCreate?: Assinature_emailCreateOrConnectWithoutPincturesInput | undefined;

  @TypeGraphQL.Field(_type => Assinature_emailUpsertWithoutPincturesInput, {
    nullable: true
  })
  upsert?: Assinature_emailUpsertWithoutPincturesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => Assinature_emailWhereUniqueInput, {
    nullable: true
  })
  connect?: Assinature_emailWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Assinature_emailUpdateWithoutPincturesInput, {
    nullable: true
  })
  update?: Assinature_emailUpdateWithoutPincturesInput | undefined;
}
