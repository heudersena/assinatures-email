import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Assinature_emailOrderByWithRelationInput } from "../../../inputs/Assinature_emailOrderByWithRelationInput";
import { Assinature_emailWhereInput } from "../../../inputs/Assinature_emailWhereInput";
import { Assinature_emailWhereUniqueInput } from "../../../inputs/Assinature_emailWhereUniqueInput";
import { Assinature_emailScalarFieldEnum } from "../../../../enums/Assinature_emailScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyAssinature_emailArgs {
  @TypeGraphQL.Field(_type => Assinature_emailWhereInput, {
    nullable: true
  })
  where?: Assinature_emailWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Assinature_emailOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Assinature_emailOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Assinature_emailWhereUniqueInput, {
    nullable: true
  })
  cursor?: Assinature_emailWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Assinature_emailScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "email" | "password" | "alreadyupdated" | "created_at" | "updated_at"> | undefined;
}
