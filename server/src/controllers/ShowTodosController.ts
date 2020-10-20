import { Request, Response } from 'express';

import db from '../database/connection';

interface Todos {
    id: number;
    title: string;
}

export default class ShowTodosController {
    async index(request: Request, response: Response) {
        const allTodos = await db.select('*').from('todos');

        return response.json(allTodos);
    }
}