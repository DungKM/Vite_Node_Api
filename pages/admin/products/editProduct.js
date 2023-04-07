import { getCategories } from "../../../api/category";
import { getProject, updateProject } from "../../../api/project";
import { router, useEffect, useState } from "../../../lib";

const editProduct = ({ id }) => {
  const [data, setData] = useState({});
  const [cate, setCate] = useState([]);
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
  useEffect(() => {
    getProject(id).then((data) => setData(data));
    getCategories().then((cate) => setCate(cate))
  }, []);

  useEffect(() => {
 
    const btn = document.querySelector(".btn-submit")
    const Name = document.getElementById("name");
    const Image = document.getElementById("image");
    const Price = document.getElementById("price");
    const Desc = document.getElementById("desc");
    const Category = document.getElementById("category");

    btn.addEventListener("click", () => {
      // tạo ra 1 object mới lấy dữ liệu từ form
  
      const formData = {
        id,
        name: Name.value, 
        image: Image.value,
        price: Price.value,
        describe: Desc.value,
        categoryId: Category.value,
      };
      updateProject(formData).then(() =>   window.location.href="/admin/listproduct");
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
       class="form-control" id="name"  placeholder="" value="${data.name}">
     <small id="helpId" class="form-text text-muted">Help text</small>
   </div>
  
   <div class="mb-3">
     <label for="" class="form-label">Image</label>
     <input type="text"
       class="form-control" id="image"  placeholder="" value="${data.image}">
     <small id="helpId" class="form-text text-muted">Help text</small>
   </div>
  
   <div class="mb-3">
     <label for="" class="form-label">Price</label>
     <input type="text"
       class="form-control" id="price"  placeholder="" value="${data.price}">
     <small id="helpId" class="form-text text-muted">Help text</small>
   </div>
   <div class="mb-3">
     <label for="" class="form-label">describe</label>
     <input type="text"
       class="form-control" id="desc"  placeholder="" value="${data.describe}">
     <small id="helpId" class="form-text text-muted">Help text</small>
   </div>
   <div class="mb-3">
     <label for="" class="form-label">Category</label>
     <select class="form-select form-select-lg" id="category">
     <option value="">Select one</option>
     ${cate.map((cate) => {
        return `
          <option ${cate._id === data.categoryId._id ? "selected" : "" } value="${cate._id}"  >${cate.name}</option>
        `;
      }).join("")}
     </select>
   </div>
   <button  class="btn btn-success btn-submit">Submit</button>
  </div>
    `;
};

export default editProduct;
