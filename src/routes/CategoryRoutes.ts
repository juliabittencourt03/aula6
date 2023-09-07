import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController"

export const categoryRoutes = Router()

const Category = new CategoryController()

categoryRoutes.get('/', Category.findAllCategory);

categoryRoutes.get('/:id',Category.findCategory);

categoryRoutes.post('/', Category.createCategory);

categoryRoutes.put('/:id', Category.updateCategory);

categoryRoutes.delete('/:id', Category.deleteCategory);
