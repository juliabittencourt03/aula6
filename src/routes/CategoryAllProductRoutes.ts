import { Router } from "express";
import { CategoryAll } from "../controllers/CategoryAllProduct";


export const CategoryAllProductRoutes = Router()

const categoryAllProduct = new CategoryAll();

CategoryAllProductRoutes.get('/:id', categoryAllProduct.findCategoryAllProduct );