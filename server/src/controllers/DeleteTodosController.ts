import { Request, Response } from 'express';

import db from '../database/connection';

interface Todos {
    id: number;
    title: string;
}

export default class DeleteTodosController {
    async delete(request: Request, response: Response) {
        const { id } = request.body;

        try {
            await db('todos')
                .where('id', '=', id)
                .delete(id)
            
            return response.status(201).json('Todo deletado com sucesso');
        } catch {
            return response.status(400).json({
                error: 'Todo não existe ou já foi deletado'
            })
        }
    }
}