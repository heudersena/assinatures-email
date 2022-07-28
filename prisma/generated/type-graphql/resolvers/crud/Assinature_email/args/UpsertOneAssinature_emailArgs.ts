import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Assinature_emailCreateInput } from "../../../inputs/Assinature_emailCreateInput";
import { Assinature_emailUpdateInput } from "../../../inputs/Assinature_emailUpdateInput";
import { Assinature_emailWhereUniqueInput } from "../../../inputs/Assinature_emailWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAssinature_emailArgs {
  @TypeGraphQL.Field(_type => Assinature_emailWhereUniqueInput, {
    nullable: false
  })
  where!: Assinature_emailWhereUniqueInput;

  @TypeGraphQL.Field(_type => Assinature_emailCreateInput, {
    nullable: false
  })
  create!: Assinature_emailCreateInput;

  @TypeGraphQL.Field(_type => Assinature_emailUpdateInput, {
    nullable: false
  })
  update!: Assinature_emailUpdateInput;
}
