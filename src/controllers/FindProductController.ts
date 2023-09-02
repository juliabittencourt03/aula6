import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindProductController {
  async handle(request: Request, response: Response) {
    try {
        const product = await prismaClient.product.findMany({
        });

        return response.json(product);
        } catch (error) {
            return response.status(500).json({ error: 'An error occurred' });
        }
    }
}