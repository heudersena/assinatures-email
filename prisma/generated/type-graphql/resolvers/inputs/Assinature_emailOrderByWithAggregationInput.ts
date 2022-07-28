import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Assinature_emailCountOrderByAggregateInput } from "../inputs/Assinature_emailCountOrderByAggregateInput";
import { Assinature_emailMaxOrderByAggregateInput } from "../inputs/Assinature_emailMaxOrderByAggregateInput";
import { Assinature_emailMinOrderByAggregateInput } from "../inputs/Assinature_emailMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Assinature_emailOrderByWithAggregationInput", {
  isAbstract: true
})
export class Assinature_emailOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  alreadyupdated?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Assinature_emailCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Assinature_emailCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Assinature_emailMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Assinature_emailMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Assinature_emailMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Assinature_emailMinOrderByAggregateInput | undefined;
}
