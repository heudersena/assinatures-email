import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneAssinature_emailArgs } from "./args/UpsertOneAssinature_emailArgs";
import { Assinature_email } from "../../../models/Assinature_email";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Assinature_email)
export class UpsertOneAssinature_emailResolver {
  @TypeGraphQL.Mutation(_returns => Assinature_email, {
    nullable: false
  })
  async upsertOneAssinature_email(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneAssinature_emailArgs): Promise<Assinature_email> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assinature_email.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
