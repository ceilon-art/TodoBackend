"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
class DeleteTodosController {
    async delete(request, response) {
        const { id } = request.body;
        try {
            await connection_1.default('todos')
                .where('id', '=', id)
                .delete(id);
            return response.status(201).json('Todo deletado com sucesso');
        }
        catch (_a) {
            return response.status(400).json({
                error: 'Todo não existe ou já foi deletado'
            });
        }
    }
}
exports.default = DeleteTodosController;
