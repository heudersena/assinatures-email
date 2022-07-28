import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Assinature_emailWhereInput } from "../../../inputs/Assinature_emailWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAssinature_emailArgs {
  @TypeGraphQL.Field(_type => Assinature_emailWhereInput, {
    nullable: true
  })
  where?: Assinature_emailWhereInput | undefined;
}
