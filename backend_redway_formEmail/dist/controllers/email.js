"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailController = void 0;
class EmailController {
    async getEmail(req, res) {
        const { email } = req.body;
        console.log(email);
        return res.status(200).json({ erro: false, mensagem: "salvo com sucesso" });
    }
}
exports.EmailController = EmailController;
