import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("PincturesMaxAggregate", {
  isAbstract: true
})
export class PincturesMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  path!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assinature_emailId!: string | null;
}
