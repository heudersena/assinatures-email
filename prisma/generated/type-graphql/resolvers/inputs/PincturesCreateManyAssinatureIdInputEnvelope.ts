import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PincturesCreateManyAssinatureIdInput } from "../inputs/PincturesCreateManyAssinatureIdInput";

@TypeGraphQL.InputType("PincturesCreateManyAssinatureIdInputEnvelope", {
  isAbstract: true
})
export class PincturesCreateManyAssinatureIdInputEnvelope {
  @TypeGraphQL.Field(_type => [PincturesCreateManyAssinatureIdInput], {
    nullable: false
  })
  data!: PincturesCreateManyAssinatureIdInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
