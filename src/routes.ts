import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { FindProductController } from "./controllers/FindProductController";
import { DeleteProductController } from "./controllers/DeleteProductController";
import { UpdateProductController } from "./controllers/UpdateProductController";

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();

const findProduct = new FindProductController();

const deleteProduct = new DeleteProductController();

const updateProduct = new UpdateProductController();

router.post("/product", createProduct.handle);
router.post("/category", createCategory.handle);

router.get("/product", findProduct.handle);

router.delete("/product/:id", deleteProduct.handle); 

router.put("/product/:id", updateProduct.handle);

export { router };