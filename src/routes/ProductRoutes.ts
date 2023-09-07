import { Router } from "express";
import {ProductController} from "../controllers/ProductController"

export const productRoutes = Router()

const Product = new ProductController()

productRoutes.get('/', Product.findAllProduct);

productRoutes.get('/:id',Product.findProduct );

productRoutes.post('/', Product.createProduct);

productRoutes.put('/:id', Product.updateProduct);

productRoutes.delete('/:id', Product.deleteProduct);
