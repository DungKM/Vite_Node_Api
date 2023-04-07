import { router, useEffect, useState } from "../../../lib";
import { addProject } from "../../../api/project";
import { getCategories } from "../../../api/category";
const addProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCategories().then((data) => setData(data));
  }, []);
  // Tạo phần tử link
  var cssLink = document.createElement("link");
  // Đặt thuộc tính cho phần tử link
  cssLink.setAttribute("rel", "stylesheet");
  cssLink.setAttribute(
    "href",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  );
  cssLink.setAttribute(
    "integrity",
    "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  );
  cssLink.setAttribute("crossorigin", "anonymous");
  // Chèn phần tử link vào thẻ head
  document.head.appendChild(cssLink);
  /* `useEffect` is a hook in React that allows you to perform side effects in functional components.
  In this code, it is used to add an event listener to the form with the id "form-add". When the
  form is submitted, it creates an object `formData` with the values of the input fields and sends
  it to the `addProject` function using the `addProject(formData)` syntax. Once the project is added
  successfully, it navigates to the "/admin/listproduct" page using the `navigator` function. */
  useEffect(() => {
   const btn = document.querySelector(".btn-submit")
    const Name = document.getElementById("name");
    const Image = document.getElementById("image");
    const Price = document.getElementById("price");
    const Desc = document.getElementById("desc");
    const Category = document.getElementById("category");
    const check = document.querySelector(".text-muted")
    btn.addEventListener("click", () => {

      const formData = {
        name: Name.value, 
        image: Image.value,
        price: Price.value,
        describe: Desc.value,
        categoryId: Category.value,
      };

      addProject(formData).then(() => router.navigate("/admin/listproduct"));
    });
  });
  return `
<div class="container my-5">
<div class="d-flex justify-content-between"> 
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
<a href="/admin/addproduct" class="btn btn-danger">Add Product</a>
<a href="/admin/listproduct" class="btn btn-warning">List Products</a>
</div>
${
  localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).user.name
    : '<a href="/signin" class="btn btn-success">Login</a>'
}
</div>
<h1 class="text-center">Add Product</h1>

<div class="mb-3">
   <label for="" class="form-label">Name</label>
   <input type="text"
     class="form-control" id="name"  placeholder="">
   <small id="helpId" class="form-text text-muted"></small>
 </div>

 <div class="mb-3">
   <label for="" class="form-label">Image</label>
   <input type="text"
     class="form-control" id="image"  placeholder="">
   <small id="helpId" class="form-text text-muted"></small>
 </div>

 <div class="mb-3">
   <label for="" class="form-label">Price</label>
   <input type="text"
     class="form-control" id="price"  placeholder="">
   <small id="helpId" class="form-text text-muted"></small>
 </div>
 <div class="mb-3">
   <label for="" class="form-label">describe</label>
   <input type="text"
     class="form-control" id="desc"  placeholder="">
   <small id="helpId" class="form-text text-muted"></small>
 </div>
 <div class="mb-3">
   <label for="" class="form-label">Category</label>
   <select class="form-select form-select-lg" id="category">
   <option selected>Catgeories</option>
${data
  .map((cate) => {
    return `
  <option value="${cate._id}">${cate.name}</option>
  `;
  })
  .join("")}
   </select>
 </div>
 <button  class="btn btn-success btn-submit">Submit</button>

</div>
 `;
};
export default addProduct;
