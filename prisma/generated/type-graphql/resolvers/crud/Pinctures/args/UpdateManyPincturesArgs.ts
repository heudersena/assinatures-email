import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PincturesUpdateManyMutationInput } from "../../../inputs/PincturesUpdateManyMutationInput";
import { PincturesWhereInput } from "../../../inputs/PincturesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPincturesArgs {
  @TypeGraphQL.Field(_type => PincturesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PincturesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PincturesWhereInput, {
    nullable: true
  })
  where?: PincturesWhereInput | undefined;
}
