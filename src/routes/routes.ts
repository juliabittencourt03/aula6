import { Router } from "express";
import  {productRoutes } from "./ProductRoutes";
import { categoryRoutes} from "./CategoryRoutes";
import { ProductCategoryRoutes} from "./ProductCategoryRoutes";

export const routes = Router();

routes.use("/product", productRoutes)
routes.use("/category", categoryRoutes)
routes.use("/product-category", ProductCategoryRoutes)







//import { CreateCategoryController } from "./controllers/CategoryController";
//import { ProductController } from "./controllers/ProductController";
//import { ProductCategoryController } from "./controllers/ProductCategoryController";



//const Category = new CreateCategoryController();

//const Product = new ProductController();

//const ProductCategory = new ProductCategoryController();

//router.post("/product", Product.createProduct);
//router.get("/product", Product.findAllProduct)
//router.get("/product/:id", Product.findProduct)
//router.delete("/product/:id", Product.deletProduct); 
//router.put("/product/:id", Product.updateProduct);

//router.post("/category", Category.handle);

//router.post("/productCategory", ProductCategory.createProductCategory);

//export { router };