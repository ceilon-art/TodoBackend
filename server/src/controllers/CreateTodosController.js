"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
class CreateTodosController {
    async create(request, response) {
        const { title } = request.body;
        try {
            await connection_1.default('todos').insert({
                title,
            });
            return response.status(201).json('Todo criado com sucesso');
        }
        catch (err) {
            return response.status(400).json({
                error: 'Erro inesperado na criação do Todo'
            });
        }
    }
}
exports.default = CreateTodosController;
