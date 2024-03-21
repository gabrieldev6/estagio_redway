import {Router} from 'express'
import { EmailController } from './controllers/email'

const routes = Router()

routes.post('/saveEmail', (req, res) => new EmailController().getEmail(req, res) )
routes.get("/", (req, res) => res.status(200).json({erro: false, mensagem:"teste"}))


export default routes
