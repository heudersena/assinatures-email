import "reflect-metadata";
import path from "path";

import { buildSchema } from "type-graphql";

import { ApolloServer } from "apollo-server";

import { PrismaClient } from "@prisma/client";

interface Context {
    prisma: PrismaClient;
}

import { resolvers } from "../prisma/generated/type-graphql";

async function main() {
    const schema = await buildSchema({
        resolvers: resolvers, // see below for more about this
        emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
        validate: false,
    });

    const prisma = new PrismaClient();

    const server = new ApolloServer({
        schema,
        context: (): Context => ({ prisma }),
        cors: { origin: ["10.67.11.2", "https://studio.apollographql.com"] },
        csrfPrevention: true,
        cache: "bounded",
    });

    server.graphqlPath = "/graphql";

    const { port } = await server.listen(4000);
    console.log(`GraphQL is listening on ${port}!`);
}

main().catch(console.error);
