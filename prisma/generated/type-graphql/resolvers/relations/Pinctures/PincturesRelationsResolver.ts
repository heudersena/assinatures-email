import * as TypeGraphQL from "type-graphql";
import { Assinature_email } from "../../../models/Assinature_email";
import { Pinctures } from "../../../models/Pinctures";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pinctures)
export class PincturesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Assinature_email, {
    nullable: true
  })
  async assinatureId(@TypeGraphQL.Root() pinctures: Pinctures, @TypeGraphQL.Ctx() ctx: any): Promise<Assinature_email | null> {
    return getPrismaFromContext(ctx).pinctures.findUnique({
      where: {
        id: pinctures.id,
      },
    }).assinatureId({});
  }
}
