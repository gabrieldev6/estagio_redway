import { Request, Response } from "express"

export class EmailController {
    async getEmail(req: Request, res: Response) {

        const { email } = req.body;
        
        console.log(email)

        return res.status(200).json({erro: false, mensagem: "salvo com sucesso"})
    }
}
