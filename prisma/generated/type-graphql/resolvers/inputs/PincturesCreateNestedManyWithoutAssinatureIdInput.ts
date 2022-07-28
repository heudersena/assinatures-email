import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PincturesCreateManyAssinatureIdInputEnvelope } from "../inputs/PincturesCreateManyAssinatureIdInputEnvelope";
import { PincturesCreateOrConnectWithoutAssinatureIdInput } from "../inputs/PincturesCreateOrConnectWithoutAssinatureIdInput";
import { PincturesCreateWithoutAssinatureIdInput } from "../inputs/PincturesCreateWithoutAssinatureIdInput";
import { PincturesWhereUniqueInput } from "../inputs/PincturesWhereUniqueInput";

@TypeGraphQL.InputType("PincturesCreateNestedManyWithoutAssinatureIdInput", {
  isAbstract: true
})
export class PincturesCreateNestedManyWithoutAssinatureIdInput {
  @TypeGraphQL.Field(_type => [PincturesCreateWithoutAssinatureIdInput], {
    nullable: true
  })
  create?: PincturesCreateWithoutAssinatureIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [PincturesCreateOrConnectWithoutAssinatureIdInput], {
    nullable: true
  })
  connectOrCreate?: PincturesCreateOrConnectWithoutAssinatureIdInput[] | undefined;

  @TypeGraphQL.Field(_type => PincturesCreateManyAssinatureIdInputEnvelope, {
    nullable: true
  })
  createMany?: PincturesCreateManyAssinatureIdInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PincturesWhereUniqueInput], {
    nullable: true
  })
  connect?: PincturesWhereUniqueInput[] | undefined;
}
