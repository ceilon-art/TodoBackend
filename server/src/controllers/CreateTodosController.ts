import { Request, Response } from 'express';

import db from '../database/connection';

interface Todos {
    id: number;
    title: string;
}

export default class CreateTodosController {
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
}