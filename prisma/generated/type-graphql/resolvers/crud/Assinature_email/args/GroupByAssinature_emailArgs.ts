import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Assinature_emailOrderByWithAggregationInput } from "../../../inputs/Assinature_emailOrderByWithAggregationInput";
import { Assinature_emailScalarWhereWithAggregatesInput } from "../../../inputs/Assinature_emailScalarWhereWithAggregatesInput";
import { Assinature_emailWhereInput } from "../../../inputs/Assinature_emailWhereInput";
import { Assinature_emailScalarFieldEnum } from "../../../../enums/Assinature_emailScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAssinature_emailArgs {
  @TypeGraphQL.Field(_type => Assinature_emailWhereInput, {
    nullable: true
  })
  where?: Assinature_emailWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Assinature_emailOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Assinature_emailOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Assinature_emailScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "email" | "password" | "alreadyupdated" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Assinature_emailScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Assinature_emailScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
