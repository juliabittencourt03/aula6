import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class UpdateProductController {
  async handle(request: Request, response: Response) {
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

        return response.json(product);
        } catch (error) {
            return response.status(500).json({ error: 'An error occurred' });
        }
    }
}