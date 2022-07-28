import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Assinature_emailCreateManyInput } from "../../../inputs/Assinature_emailCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAssinature_emailArgs {
  @TypeGraphQL.Field(_type => [Assinature_emailCreateManyInput], {
    nullable: false
  })
  data!: Assinature_emailCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
