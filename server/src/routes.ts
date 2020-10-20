import express from 'express';
import TodosController from './controllers/TodosController';

const routes = express.Router();

const TodoController = new TodosController();

routes.get('/todos', TodoController.index );
routes.post('/todos', TodoController.create );
routes.delete('/todos', TodoController.delete );

export default routes;