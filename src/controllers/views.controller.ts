import { Request, Response } from "express";
import { ListServiceAssinaturesEmail } from "../services/list-service-assinatures-email";

class ViewsController {
    create(request: Request, response: Response) {
        response.render("pages/home.ejs");
    }

    async list(request: Request, response: Response) {

        const data = await new ListServiceAssinaturesEmail().handle();

        return response.render("pages/list.ejs", { assinatures: data });
    }
}

export { ViewsController };
