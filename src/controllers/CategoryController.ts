import { Request, Response } from 'express';
import { prismaClient } from "../database/prismaClient";

export class CategoryController{
  async createCategory(request: Request, response: Response) {
    try {
        const { name } = request.body;

        const category = await prismaClient.category.create({
          data: {
            name,
          },
        });
      return response.status(201).json(category);
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }

  async deleteCategory(request: Request, response: Response) {
      try {
          const {id} = request.params;
          const category = await prismaClient.category.delete({
          where: {
              id
          },
          });
    
          return response.status(201).json(category);
          } catch (error) {
              return response.status(500).json({ error: 'An error occurred' });
          }
      }

    async updateCategory(request: Request, response: Response) {
        try {
            const {id} = request.params
            const { name } = request.body;
            const category = await prismaClient.category.update({
            data: {
                name,              
            },
            where: {id}
            });
        
            return response.status(201).json(category);
            } catch (error) {
                return response.status(500).json({ error: 'An error occurred' });
            }
        }  
        
    async findCategory(request: Request, response: Response) {
        try {
            const {id} = request.params;
            const category = await prismaClient.category.findFirst({
            where: {
                id
            },
            });
            
            return response.status(201).json(category);
            } catch (error) {
                return response.status(500).json({ error: 'An error occurred' });
            }
        }
             
    async findAllCategory(request: Request, response: Response) {
        try {
            const category = await prismaClient.category.findMany({
            });
        
            return response.status(201).json(category);
            } catch (error) {
                return response.status(500).json({ error: 'An error occurred' });
            }
        }
            
}