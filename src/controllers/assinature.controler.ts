import { Request, Response } from "express";
import {
    CreateServiceAssinaturesEmail,
    IPropsAssinaturesEmail,
} from "../services/create-service-assinatures-email";
class AssinatureController {
    async create(request: Request, response: Response) {
        const data: IPropsAssinaturesEmail = {
            name: request.body.data.name,
            email: request.body.data.email,
            password: request.body.data.password,
            alreadyupdated: request.body.data.alreadyupdated
                ? request.body.data.alreadyupdated
                : false,
        };

        if (!data.name || !data.email || !data.password) {
            return response
                .status(401)
                .json({ message: "Preencha todos os campos" });
        }

        const response_db = await new CreateServiceAssinaturesEmail().handle(
            data
        );
        return response.json({ data, response_db });
    }
}

export { AssinatureController };
