import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class DeleteProductController {
  async handle(request: Request, response: Response) {
    try {
        const {id} = request.params;
        const product = await prismaClient.product.delete({
        where: {
            id
        },
        });

        return response.json(product);
        } catch (error) {
            return response.status(500).json({ error: 'An error occurred' });
        }
    }
}