import { render, router } from "./lib";
// import admin
import Signin from "./pages/Signin/Signin";
import listCategory from "./pages/admin/category/listCategory";
import addProduct from "./pages/admin/products/addProduct";
import editProduct from "./pages/admin/products/editProduct";
import listProduct from "./pages/admin/products/listProduct";
// import clien
import Index from "./pages/client";

const app = document.querySelector("#app");
// signin
router.on("/signin", () => render(Signin, app));
// client
router.on("/home", () => render(Index, app));
// admin
router.on("/admin/listproduct", () => render(listProduct, app));
router.on("/admin/addproduct",() => render(addProduct, app))
router.on("/admin/listcategory", () => render(listCategory, app));
router.on("/admin/product/:id/edit", ({ data }) => render(() => editProduct(data), app));

//resolve
router.resolve();
