import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    try {
        let { name, bar_code, price } = request.body;
        const product = await prismaClient.product.create({
        data: {
            bar_code,
            name,
            price,
        },
        });

        return response.json(product);
        } catch (error) {
            return response.status(500).json({ error: 'An error occurred' });
        }
    }
}