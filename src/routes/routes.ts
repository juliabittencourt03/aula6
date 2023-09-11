import { Router } from "express";
import { productRoutes } from "./ProductRoutes";
import { categoryRoutes} from "./CategoryRoutes";
import { ProductCategoryRoutes} from "./ProductCategoryRoutes";
import { productExistCategoryRoutes } from "./ProductWithExistCategoryRoutes";
import { CategoryAllProductRoutes } from "./CategoryAllProductRoutes";

export const routes = Router();

routes.use("/product", productRoutes)
routes.use("/category", categoryRoutes)
routes.use("/product-category", ProductCategoryRoutes)
routes.use("/product-with-category", productExistCategoryRoutes)
routes.use("/category-all", CategoryAllProductRoutes)
