import { Request, Response } from 'express';
import { prismaClient } from "../database/prismaClient";

export class CategoryAll{
  async findCategoryAllProduct(request: Request, response: Response) {
    try {
        const { id } = request.params;

        const category = await prismaClient.category.findFirst({
          where: {
            id,
          },
          include: {
            ProductCategory: true,
          },
        });
        if (!category) {
            return response.status(404).json({ err: 'Categoria não encontrada!' });
        }
        return response.status(201).json(category);
        } catch (error) {
        return response.status(500).json({ error: 'An error occurred' });
        }
    }
}