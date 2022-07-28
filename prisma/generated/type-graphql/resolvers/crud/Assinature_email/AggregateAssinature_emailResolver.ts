import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAssinature_emailArgs } from "./args/AggregateAssinature_emailArgs";
import { Assinature_email } from "../../../models/Assinature_email";
import { AggregateAssinature_email } from "../../outputs/AggregateAssinature_email";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Assinature_email)
export class AggregateAssinature_emailResolver {
  @TypeGraphQL.Query(_returns => AggregateAssinature_email, {
    nullable: false
  })
  async aggregateAssinature_email(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAssinature_emailArgs): Promise<AggregateAssinature_email> {
    return getPrismaFromContext(ctx).assinature_email.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
