import signIn from "../../api/signin";
import { useEffect } from "../../lib";

const Signin = () => {
  // Link css
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
    const form = document.getElementById("form-add");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // tạo ra 1 object mới lấy dữ liệu từ form
      let formData = {
        email: email.value,
        password: password.value,
      };
      // call api va tham phan tu
      signIn(formData)
        .then((data) => {
          alert(data.message);

          localStorage.setItem("user", JSON.stringify(data));
          let form = {
            email: (email.value = ""),
            password: (password.value = ""),
          };
          form = formData;
        })
        .then(() => {
          window.location.href = "/admin/listproduct"
        });
    });
  });

  return `<div class="container my-5">
          <div class="d-flex justify-content-between"> 
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <a href="/admin/addproduct" class="btn btn-danger">Add Product</a>
        <a href="/admin/listproduct" class="btn btn-warning">List Products</a>
        </div>
        <a href="/signin" class="btn btn-success">Login</a>
        </div>
        <h1 class="text-center">Signin</h1>
        <form action="" id="form-add">
            <div class="form-group mb-3">
                <label for="" class="form-label">Email</label>
                <input type="text" class="form-control" id="email" />
            </div>
            <div class="form-group mb-3">
                <label for="" class="form-label">Password</label>
                <input type="text" class="form-control" id="password" />
            </div>
           
            <div class="form-group">
                <button class="btn btn-primary">Thêm dự án</button>
            </div>
        </form>
    </div>`;
};

export default Signin;
