import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PincturesCreateManyAssinatureIdInputEnvelope } from "../inputs/PincturesCreateManyAssinatureIdInputEnvelope";
import { PincturesCreateOrConnectWithoutAssinatureIdInput } from "../inputs/PincturesCreateOrConnectWithoutAssinatureIdInput";
import { PincturesCreateWithoutAssinatureIdInput } from "../inputs/PincturesCreateWithoutAssinatureIdInput";
import { PincturesScalarWhereInput } from "../inputs/PincturesScalarWhereInput";
import { PincturesUpdateManyWithWhereWithoutAssinatureIdInput } from "../inputs/PincturesUpdateManyWithWhereWithoutAssinatureIdInput";
import { PincturesUpdateWithWhereUniqueWithoutAssinatureIdInput } from "../inputs/PincturesUpdateWithWhereUniqueWithoutAssinatureIdInput";
import { PincturesUpsertWithWhereUniqueWithoutAssinatureIdInput } from "../inputs/PincturesUpsertWithWhereUniqueWithoutAssinatureIdInput";
import { PincturesWhereUniqueInput } from "../inputs/PincturesWhereUniqueInput";

@TypeGraphQL.InputType("PincturesUpdateManyWithoutAssinatureIdNestedInput", {
  isAbstract: true
})
export class PincturesUpdateManyWithoutAssinatureIdNestedInput {
  @TypeGraphQL.Field(_type => [PincturesCreateWithoutAssinatureIdInput], {
    nullable: true
  })
  create?: PincturesCreateWithoutAssinatureIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [PincturesCreateOrConnectWithoutAssinatureIdInput], {
    nullable: true
  })
  connectOrCreate?: PincturesCreateOrConnectWithoutAssinatureIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [PincturesUpsertWithWhereUniqueWithoutAssinatureIdInput], {
    nullable: true
  })
  upsert?: PincturesUpsertWithWhereUniqueWithoutAssinatureIdInput[] | undefined;

  @TypeGraphQL.Field(_type => PincturesCreateManyAssinatureIdInputEnvelope, {
    nullable: true
  })
  createMany?: PincturesCreateManyAssinatureIdInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PincturesWhereUniqueInput], {
    nullable: true
  })
  set?: PincturesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PincturesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PincturesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PincturesWhereUniqueInput], {
    nullable: true
  })
  delete?: PincturesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PincturesWhereUniqueInput], {
    nullable: true
  })
  connect?: PincturesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PincturesUpdateWithWhereUniqueWithoutAssinatureIdInput], {
    nullable: true
  })
  update?: PincturesUpdateWithWhereUniqueWithoutAssinatureIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [PincturesUpdateManyWithWhereWithoutAssinatureIdInput], {
    nullable: true
  })
  updateMany?: PincturesUpdateManyWithWhereWithoutAssinatureIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [PincturesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PincturesScalarWhereInput[] | undefined;
}
