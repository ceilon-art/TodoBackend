import express from 'express';
import ShowTodosController from './controllers/ShowTodosController';
import CreateTodosController from './controllers/CreateTodosController';
import DeleteTodosController from './controllers/DeleteTodosController';

const routes = express.Router();

const showTodoController = new ShowTodosController();
const createTodoController = new CreateTodosController();
const deleteTodoController = new DeleteTodosController();

routes.get('/', showTodoController.index );
routes.post('/create', createTodoController.create );
routes.delete('/delete', deleteTodoController.delete );

export default routes;