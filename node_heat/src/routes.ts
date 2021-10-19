import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLastMessageController } from "./controllers/GetLastMessageController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle)

router.post('/messages', ensureAuthenticated, new CreateMessageController().handle)

router.get('/messages/last', new GetLastMessageController().handle)

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle)

export { router }