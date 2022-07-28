import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PincturesCreateManyInput } from "../../../inputs/PincturesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPincturesArgs {
  @TypeGraphQL.Field(_type => [PincturesCreateManyInput], {
    nullable: false
  })
  data!: PincturesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
