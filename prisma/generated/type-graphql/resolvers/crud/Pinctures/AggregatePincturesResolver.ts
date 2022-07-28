import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePincturesArgs } from "./args/AggregatePincturesArgs";
import { Pinctures } from "../../../models/Pinctures";
import { AggregatePinctures } from "../../outputs/AggregatePinctures";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pinctures)
export class AggregatePincturesResolver {
  @TypeGraphQL.Query(_returns => AggregatePinctures, {
    nullable: false
  })
  async aggregatePinctures(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePincturesArgs): Promise<AggregatePinctures> {
    return getPrismaFromContext(ctx).pinctures.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
