import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Assinature_emailCountAggregate } from "../outputs/Assinature_emailCountAggregate";
import { Assinature_emailMaxAggregate } from "../outputs/Assinature_emailMaxAggregate";
import { Assinature_emailMinAggregate } from "../outputs/Assinature_emailMinAggregate";

@TypeGraphQL.ObjectType("Assinature_emailGroupBy", {
  isAbstract: true
})
export class Assinature_emailGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  alreadyupdated!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

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
