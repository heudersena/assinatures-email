import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Assinature_emailWhereInput } from "../inputs/Assinature_emailWhereInput";

@TypeGraphQL.InputType("Assinature_emailRelationFilter", {
  isAbstract: true
})
export class Assinature_emailRelationFilter {
  @TypeGraphQL.Field(_type => Assinature_emailWhereInput, {
    nullable: true
  })
  is?: Assinature_emailWhereInput | undefined;

  @TypeGraphQL.Field(_type => Assinature_emailWhereInput, {
    nullable: true
  })
  isNot?: Assinature_emailWhereInput | undefined;
}
