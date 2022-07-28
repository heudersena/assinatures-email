import * as TypeGraphQL from "type-graphql";
import { Assinature_email } from "../../../models/Assinature_email";
import { Pinctures } from "../../../models/Pinctures";
import { Assinature_emailPincturesArgs } from "./args/Assinature_emailPincturesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Assinature_email)
export class Assinature_emailRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Pinctures], {
    nullable: false
  })
  async pinctures(@TypeGraphQL.Root() assinature_email: Assinature_email, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: Assinature_emailPincturesArgs): Promise<Pinctures[]> {
    return getPrismaFromContext(ctx).assinature_email.findUnique({
      where: {
        id: assinature_email.id,
      },
    }).pinctures(args);
  }
}
