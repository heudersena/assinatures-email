import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstAssinature_emailArgs } from "./args/FindFirstAssinature_emailArgs";
import { Assinature_email } from "../../../models/Assinature_email";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Assinature_email)
export class FindFirstAssinature_emailResolver {
  @TypeGraphQL.Query(_returns => Assinature_email, {
    nullable: true
  })
  async findFirstAssinature_email(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAssinature_emailArgs): Promise<Assinature_email | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assinature_email.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
