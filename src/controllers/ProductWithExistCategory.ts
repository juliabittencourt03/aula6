import { Request, Response } from 'express';
import { prismaClient } from "../database/prismaClient";


export class CreateProductWithExistCategory{
  async createProductWithExistCategory(request: Request, response: Response) {
    try {
        const { name, price, bar_code, id_category } = request.body;

        const product = await prismaClient.productCategory.create({
          data: {
            product: {
              create: {
                bar_code,
                name,
                price,
              },
            },
            category: {
              connect: {
                id: id_category,
              },
            },
          },
        });
        if (!product) {
            return response.status(404).json({ err: 'Produto não encontrado!' });
        }
        return response.status(201).json(product);
        } catch (error) {
        return response.status(500).json({ error: 'An error occurred' });
        }
    } 

    async findProductWithCategory(request: Request, response: Response) {
      try {
          const { id } = request.params;
  
          const product = await prismaClient.product.findFirst({
            where: {
              id,
            },
            include: {
              ProductCategory: {
                include: {
                  category: true,
                },
              },
            },
          });
          if (!product) {
            return response.status(404).json({ err: 'Produto não encontrado!' });
        }
          
        return response.json(product);
      } catch (error) {
        return response.status(500).json({ error: 'An error occurred' });
      }
    }
  }

