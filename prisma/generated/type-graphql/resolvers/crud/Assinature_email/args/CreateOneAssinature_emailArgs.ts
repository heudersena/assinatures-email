import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Assinature_emailCreateInput } from "../../../inputs/Assinature_emailCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAssinature_emailArgs {
  @TypeGraphQL.Field(_type => Assinature_emailCreateInput, {
    nullable: false
  })
  data!: Assinature_emailCreateInput;
}
