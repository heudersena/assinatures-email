import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAssinature_emailArgs } from "./args/AggregateAssinature_emailArgs";
import { CreateManyAssinature_emailArgs } from "./args/CreateManyAssinature_emailArgs";
import { CreateOneAssinature_emailArgs } from "./args/CreateOneAssinature_emailArgs";
import { DeleteManyAssinature_emailArgs } from "./args/DeleteManyAssinature_emailArgs";
import { DeleteOneAssinature_emailArgs } from "./args/DeleteOneAssinature_emailArgs";
import { FindFirstAssinature_emailArgs } from "./args/FindFirstAssinature_emailArgs";
import { FindManyAssinature_emailArgs } from "./args/FindManyAssinature_emailArgs";
import { FindUniqueAssinature_emailArgs } from "./args/FindUniqueAssinature_emailArgs";
import { GroupByAssinature_emailArgs } from "./args/GroupByAssinature_emailArgs";
import { UpdateManyAssinature_emailArgs } from "./args/UpdateManyAssinature_emailArgs";
import { UpdateOneAssinature_emailArgs } from "./args/UpdateOneAssinature_emailArgs";
import { UpsertOneAssinature_emailArgs } from "./args/UpsertOneAssinature_emailArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Assinature_email } from "../../../models/Assinature_email";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAssinature_email } from "../../outputs/AggregateAssinature_email";
import { Assinature_emailGroupBy } from "../../outputs/Assinature_emailGroupBy";

@TypeGraphQL.Resolver(_of => Assinature_email)
export class Assinature_emailCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateAssinature_email, {
    nullable: false
  })
  async aggregateAssinature_email(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAssinature_emailArgs): Promise<AggregateAssinature_email> {
    return getPrismaFromContext(ctx).assinature_email.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyAssinature_email(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAssinature_emailArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assinature_email.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Assinature_email, {
    nullable: false
  })
  async createOneAssinature_email(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneAssinature_emailArgs): Promise<Assinature_email> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assinature_email.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAssinature_email(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyAssinature_emailArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assinature_email.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Assinature_email, {
    nullable: true
  })
  async deleteOneAssinature_email(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneAssinature_emailArgs): Promise<Assinature_email | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assinature_email.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [Assinature_email], {
    nullable: false
  })
  async assinature_emails(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyAssinature_emailArgs): Promise<Assinature_email[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assinature_email.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Assinature_email, {
    nullable: true
  })
  async assinature_email(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAssinature_emailArgs): Promise<Assinature_email | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assinature_email.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAssinature_email(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyAssinature_emailArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assinature_email.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Assinature_email, {
    nullable: true
  })
  async updateOneAssinature_email(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneAssinature_emailArgs): Promise<Assinature_email | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).assinature_email.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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
