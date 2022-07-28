import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByAssinature_emailArgs } from "./args/GroupByAssinature_emailArgs";
import { Assinature_email } from "../../../models/Assinature_email";
import { Assinature_emailGroupBy } from "../../outputs/Assinature_emailGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Assinature_email)
export class GroupByAssinature_emailResolver {
  @TypeGraphQL.Query(_returns => [Assinature_emailGroupBy], {
    nullable: false
  })
  async groupByAssinature_email(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAssinature_emailArgs): Promise<Assinature_emailGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assinature_email.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
