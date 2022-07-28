import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Assinature_emailWhereUniqueInput } from "../../../inputs/Assinature_emailWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAssinature_emailArgs {
  @TypeGraphQL.Field(_type => Assinature_emailWhereUniqueInput, {
    nullable: false
  })
  where!: Assinature_emailWhereUniqueInput;
}
