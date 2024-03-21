"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const email_1 = require("./controllers/email");
const routes = (0, express_1.Router)();
routes.post('/saveEmail', (req, res) => new email_1.EmailController().getEmail(req, res));
routes.get("/", (req, res) => res.status(200).json({ erro: false, mensagem: "teste" }));
exports.default = routes;
