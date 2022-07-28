import "reflect-metadata";
import path from "path";

import {
    Resolver,
    Query,
    buildSchema,
    FieldResolver,
    Ctx,
    Root,
} from "type-graphql";

import { ApolloServer } from "apollo-server";

import { PrismaClient } from "@prisma/client";

interface Context {
    prisma: PrismaClient;
}

import { Assinature_email } from "../prisma/generated/type-graphql";

@Resolver((of) => Assinature_email)
class AssinaturesEmail {
    @Query((returns) => Assinature_email, { nullable: true })
    async bestAssinature(
        @Ctx() { prisma }: Context
    ): Promise<Assinature_email[] | []> {
        return await prisma.assinature_email.findMany({});
    }
}

async function main() {
    const schema = await buildSchema({
        resolvers: [AssinaturesEmail],
        emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
        validate: false,
    });

    const prisma = new PrismaClient();

    const server = new ApolloServer({
        schema,
        context: (): Context => ({ prisma }),
    });
    const { port } = await server.listen(4000);
    console.log(`GraphQL is listening on ${port}!`);
}

main().catch(console.error);
