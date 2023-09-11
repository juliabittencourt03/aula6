import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ProductCategoryController {
  async createProductCategory(request: Request, response: Response) {
    try {
        const { id_product, id_category } = request.body;
        const productCategory = await prismaClient.productCategory.create({
        data: {
            id_category,
            id_product,
        },
        });
        if (!productCategory) {
            return response.status(404).json({ err: 'Produto e Categoria não encontrados!' });
        }
        return response.status(201).json(productCategory);
        } catch (error) {
            return response.status(500).json({ error: 'An error occurred' });
        }
    }

    async deleteProductCategory(request: Request, response: Response) {
        try {
            const {id} = request.params;
            const productCategory = await prismaClient.productCategory.delete({
            where: {
                id
            },
            });
            if (!productCategory) {
                return response.status(404).json({ err: 'Produto e Categoria não encontrados!' });
            }
            return response.status(201).json(productCategory);
            } catch (error) {
                return response.status(500).json({ error: 'An error occurred' });
            }
        }

    async updateProductCategory(request: Request, response: Response) {
        try {
            const {id} = request.params
            const { id_product, id_category } = request.body;
            const productCategory = await prismaClient.productCategory.update({
            data: {
                id_product,
                id_category,
            },
            where: {id}
            });
            if (!productCategory) {
                return response.status(404).json({ err: 'Produto e Categoria não encontrados!' });
            }
            return response.status(201).json(productCategory);
            } catch (error) {
                return response.status(500).json({ error: 'An error occurred' });
            }
        }  
    async findProductCategory(request: Request, response: Response) {
        try {
            const {id} = request.params;
            const productCategory = await prismaClient.productCategory.findFirst({
            where: {
                id
            },
            });
            if (!productCategory) {
                return response.status(404).json({ err: 'Produto e Categoria não encontrados!' });
            }
            return response.status(201).json(productCategory);
            } catch (error) {
                return response.status(500).json({ error: 'An error occurred' });
            }
        }
             
    async findAllProductCategory(request: Request, response: Response) {
        try {
            const productCategory = await prismaClient.productCategory.findMany({
            });
            if (!productCategory) {
                return response.status(404).json({ err: 'Produto e Categoria não encontrados!' });
            }
            return response.status(201).json(productCategory);
            } catch (error) {
                return response.status(500).json({ error: 'An error occurred' });
            }
        }
            
}