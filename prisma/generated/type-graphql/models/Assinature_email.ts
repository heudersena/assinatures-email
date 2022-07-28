import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Pinctures } from "../models/Pinctures";
import { Assinature_emailCount } from "../resolvers/outputs/Assinature_emailCount";

@TypeGraphQL.ObjectType("Assinature_email", {
  isAbstract: true
})
export class Assinature_email {
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

  pinctures?: Pinctures[];

  @TypeGraphQL.Field(_type => Assinature_emailCount, {
    nullable: true
  })
  _count?: Assinature_emailCount | null;
}
