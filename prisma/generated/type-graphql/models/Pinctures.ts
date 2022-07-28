import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Assinature_email } from "../models/Assinature_email";

@TypeGraphQL.ObjectType("Pinctures", {
  isAbstract: true
})
export class Pinctures {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  path!: string;

  assinatureId?: Assinature_email | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assinature_emailId?: string | null;
}
