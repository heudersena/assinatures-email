import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PincturesScalarWhereInput } from "../inputs/PincturesScalarWhereInput";
import { PincturesUpdateManyMutationInput } from "../inputs/PincturesUpdateManyMutationInput";

@TypeGraphQL.InputType("PincturesUpdateManyWithWhereWithoutAssinatureIdInput", {
  isAbstract: true
})
export class PincturesUpdateManyWithWhereWithoutAssinatureIdInput {
  @TypeGraphQL.Field(_type => PincturesScalarWhereInput, {
    nullable: false
  })
  where!: PincturesScalarWhereInput;

  @TypeGraphQL.Field(_type => PincturesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PincturesUpdateManyMutationInput;
}
