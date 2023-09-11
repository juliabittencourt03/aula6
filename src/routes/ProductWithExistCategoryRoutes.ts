import { Router } from "express";
import { CreateProductWithExistCategory } from "../controllers/ProductWithExistCategory";

export const productExistCategoryRoutes = Router()

const productWithCategory = new CreateProductWithExistCategory()

productExistCategoryRoutes.post('/', productWithCategory.createProductWithExistCategory);

productExistCategoryRoutes.get('/:id', productWithCategory.findProductWithCategory );

