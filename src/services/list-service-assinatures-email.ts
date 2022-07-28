import { prisma } from "../prisma";

class ListServiceAssinaturesEmail {
    async handle() {
        const response = await prisma.assinature_email.findMany({
            orderBy: { created_at: "asc" },
        });

        return response;
    }
}

export { ListServiceAssinaturesEmail };
