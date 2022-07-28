import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Assinature_emailUpdateOneWithoutPincturesNestedInput } from "../inputs/Assinature_emailUpdateOneWithoutPincturesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PincturesUpdateInput", {
  isAbstract: true
})
export class PincturesUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  path?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Assinature_emailUpdateOneWithoutPincturesNestedInput, {
    nullable: true
  })
  assinatureId?: Assinature_emailUpdateOneWithoutPincturesNestedInput | undefined;
}
