"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
class ShowTodosController {
    async index(request, response) {
        const allTodos = await connection_1.default.select('*').from('todos');
        return response.json(allTodos);
    }
}
exports.default = ShowTodosController;
