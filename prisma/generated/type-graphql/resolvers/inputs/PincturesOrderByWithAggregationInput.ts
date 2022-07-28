import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PincturesCountOrderByAggregateInput } from "../inputs/PincturesCountOrderByAggregateInput";
import { PincturesMaxOrderByAggregateInput } from "../inputs/PincturesMaxOrderByAggregateInput";
import { PincturesMinOrderByAggregateInput } from "../inputs/PincturesMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PincturesOrderByWithAggregationInput", {
  isAbstract: true
})
export class PincturesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  path?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assinature_emailId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PincturesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PincturesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PincturesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PincturesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PincturesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PincturesMinOrderByAggregateInput | undefined;
}
