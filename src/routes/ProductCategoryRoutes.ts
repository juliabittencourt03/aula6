import { Router } from "express";
import { ProductCategoryController } from "../controllers/ProductCategoryController"

export const ProductCategoryRoutes = Router()

const ProductCategory = new ProductCategoryController()

ProductCategoryRoutes.get('/', ProductCategory.findAllProductCategory);

ProductCategoryRoutes.get('/:id',ProductCategory.findProductCategory);

ProductCategoryRoutes.post('/', ProductCategory.createProductCategory);

ProductCategoryRoutes.put('/:id', ProductCategory.updateProductCategory);

ProductCategoryRoutes.delete('/:id', ProductCategory.deleteProductCategory);
