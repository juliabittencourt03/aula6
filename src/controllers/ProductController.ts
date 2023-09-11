import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ProductController {
  async createProduct(request: Request, response: Response) {
    try {
        let { name, bar_code, price } = request.body;
        const product = await prismaClient.product.create({
        data: {
            bar_code,
            name,
            price
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

    async deleteProduct(request: Request, response: Response) {
        try {
            const {id} = request.params;
            const product = await prismaClient.product.delete({
            where: {
                id
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

    async updateProduct(request: Request, response: Response) {
        try {
            const {id} = request.params
            const { name, bar_code, price } = request.body;
            const product = await prismaClient.product.update({
            data: {
                bar_code,
                name,
                price,
            },
            where: {id}
            });
            if (!product) {
                return response.status(404).json({ err: 'Produto não encontrado!' });
            }
            return response.status(201).json(product);
            } catch (error) {
                return response.status(500).json({ error: 'An error occurred' });
            }
        }  

    async findProduct(request: Request, response: Response) {
        try {
            const {id} = request.params;
            const product = await prismaClient.product.findFirst({
            where: {
                id
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
             
    async findAllProduct(request: Request, response: Response) {
        try {
            const product = await prismaClient.product.findMany({
            });
            if (!product) {
                return response.status(404).json({ err: 'Produto não encontrado!' });
            }
            return response.status(201).json(product);
            } catch (error) {
                return response.status(500).json({ error: 'An error occurred' });
            }
        }
            
}