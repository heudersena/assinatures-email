import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Assinature_emailUpdateInput } from "../../../inputs/Assinature_emailUpdateInput";
import { Assinature_emailWhereUniqueInput } from "../../../inputs/Assinature_emailWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAssinature_emailArgs {
  @TypeGraphQL.Field(_type => Assinature_emailUpdateInput, {
    nullable: false
  })
  data!: Assinature_emailUpdateInput;

  @TypeGraphQL.Field(_type => Assinature_emailWhereUniqueInput, {
    nullable: false
  })
  where!: Assinature_emailWhereUniqueInput;
}
