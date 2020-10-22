"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ShowTodosController_1 = __importDefault(require("./controllers/ShowTodosController"));
const CreateTodosController_1 = __importDefault(require("./controllers/CreateTodosController"));
const DeleteTodosController_1 = __importDefault(require("./controllers/DeleteTodosController"));
const routes = express_1.default.Router();
const showTodoController = new ShowTodosController_1.default();
const createTodoController = new CreateTodosController_1.default();
const deleteTodoController = new DeleteTodosController_1.default();
routes.get('/', showTodoController.index);
routes.post('/create', createTodoController.create);
routes.delete('/delete', deleteTodoController.delete);
exports.default = routes;
