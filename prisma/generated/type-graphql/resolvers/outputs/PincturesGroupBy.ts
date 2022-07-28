import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PincturesCountAggregate } from "../outputs/PincturesCountAggregate";
import { PincturesMaxAggregate } from "../outputs/PincturesMaxAggregate";
import { PincturesMinAggregate } from "../outputs/PincturesMinAggregate";

@TypeGraphQL.ObjectType("PincturesGroupBy", {
  isAbstract: true
})
export class PincturesGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  path!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assinature_emailId!: string | null;

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
