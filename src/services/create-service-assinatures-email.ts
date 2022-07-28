import { prisma } from "../prisma";

export interface IPropsAssinaturesEmail {
    name: string;
    email: string;
    password: string;
    alreadyupdated?: boolean;
}

class CreateServiceAssinaturesEmail {
    async handle(data: IPropsAssinaturesEmail) {
        try {
            const response = await prisma.assinature_email.create({
                data: {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    alreadyupdated: data.alreadyupdated,
                },
            });

            return response;
        } catch (error) {
            return error;
        }
    }
}

export { CreateServiceAssinaturesEmail };
