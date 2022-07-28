import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Assinature_emailCountAggregate } from "../outputs/Assinature_emailCountAggregate";
import { Assinature_emailMaxAggregate } from "../outputs/Assinature_emailMaxAggregate";
import { Assinature_emailMinAggregate } from "../outputs/Assinature_emailMinAggregate";

@TypeGraphQL.ObjectType("AggregateAssinature_email", {
  isAbstract: true
})
export class AggregateAssinature_email {
  @TypeGraphQL.Field(_type => Assinature_emailCountAggregate, {
    nullable: true
  })
  _count!: Assinature_emailCountAggregate | null;

  @TypeGraphQL.Field(_type => Assinature_emailMinAggregate, {
    nullable: true
  })
  _min!: Assinature_emailMinAggregate | null;

  @TypeGraphQL.Field(_type => Assinature_emailMaxAggregate, {
    nullable: true
  })
  _max!: Assinature_emailMaxAggregate | null;
}
