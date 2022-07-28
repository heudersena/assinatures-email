import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Assinature_emailUpdateManyMutationInput } from "../../../inputs/Assinature_emailUpdateManyMutationInput";
import { Assinature_emailWhereInput } from "../../../inputs/Assinature_emailWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAssinature_emailArgs {
  @TypeGraphQL.Field(_type => Assinature_emailUpdateManyMutationInput, {
    nullable: false
  })
  data!: Assinature_emailUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Assinature_emailWhereInput, {
    nullable: true
  })
  where?: Assinature_emailWhereInput | undefined;
}
