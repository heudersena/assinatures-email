import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PincturesOrderByWithAggregationInput } from "../../../inputs/PincturesOrderByWithAggregationInput";
import { PincturesScalarWhereWithAggregatesInput } from "../../../inputs/PincturesScalarWhereWithAggregatesInput";
import { PincturesWhereInput } from "../../../inputs/PincturesWhereInput";
import { PincturesScalarFieldEnum } from "../../../../enums/PincturesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPincturesArgs {
  @TypeGraphQL.Field(_type => PincturesWhereInput, {
    nullable: true
  })
  where?: PincturesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PincturesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PincturesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PincturesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "path" | "assinature_emailId">;

  @TypeGraphQL.Field(_type => PincturesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PincturesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
