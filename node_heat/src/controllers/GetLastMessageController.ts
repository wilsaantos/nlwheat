import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";
import { GetLastMessageService } from "../services/GetLastMessageService";


class GetLastMessageController {
    async handle(request: Request, response: Response) {

        const service = new GetLastMessageService();

        const result = await service.execute()

        return response.json(result)

    }
}

export { GetLastMessageController };