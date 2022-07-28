import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PincturesOrderByWithRelationInput } from "../../../inputs/PincturesOrderByWithRelationInput";
import { PincturesWhereInput } from "../../../inputs/PincturesWhereInput";
import { PincturesWhereUniqueInput } from "../../../inputs/PincturesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePincturesArgs {
  @TypeGraphQL.Field(_type => PincturesWhereInput, {
    nullable: true
  })
  where?: PincturesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PincturesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PincturesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PincturesWhereUniqueInput, {
    nullable: true
  })
  cursor?: PincturesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
