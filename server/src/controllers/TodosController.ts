import { Request, Response } from 'express';

import db from '../database/connection';

interface Todos {
    id: number;
    title: string;
}

export default class TodosController {
    async index(request: Request, response: Response) {
        const allTodos = await db.select('*').from('todos');

        return response.json(allTodos);
    }

    async create (request: Request, response: Response) {
        const { title } = request.body;
    
        try{
            await db('todos').insert({
                title,
            });

            return response.status(201).json('Todo criado com sucesso');
        } catch (err) {    
            return response.status(400).json({
                error: 'Erro inesperado na criação do Todo'
            })
        }
    }
    
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