import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PincturesCountAggregate } from "../outputs/PincturesCountAggregate";
import { PincturesMaxAggregate } from "../outputs/PincturesMaxAggregate";
import { PincturesMinAggregate } from "../outputs/PincturesMinAggregate";

@TypeGraphQL.ObjectType("AggregatePinctures", {
  isAbstract: true
})
export class AggregatePinctures {
  @TypeGraphQL.Field(_type => PincturesCountAggregate, {
    nullable: true
  })
  _count!: PincturesCountAggregate | null;

  @TypeGraphQL.Field(_type => PincturesMinAggregate, {
    nullable: true
  })
  _min!: PincturesMinAggregate | null;

  @TypeGraphQL.Field(_type => PincturesMaxAggregate, {
    nullable: true
  })
  _max!: PincturesMaxAggregate | null;
}
