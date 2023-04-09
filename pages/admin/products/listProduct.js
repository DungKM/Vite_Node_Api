import { deleteProject, getProjects } from "../../../api/project";
import { listUser } from "../../../components/listUser";
import { useEffect, useState } from "../../../lib";

const listProduct = () => {
  const [data, setData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  useEffect(() => {
    getProjects().then((data) => setData(data));
  }, []);


  useEffect(() => {
      // Tạo phần tử script
    var script = document.createElement("script");
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js';
    script.integrity = 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
    setLoggedInUser(JSON.parse(localStorage.getItem("user")));
  }, [localStorage.getItem("user")]);
  var cssLink = document.createElement("link");
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
  document.head.appendChild(cssLink);

  // chạy sau khi render
  useEffect(function () {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      // btn là 1 phần tử trong mảng?
      const id = btn.dataset.id;
      btn.addEventListener("click", function () {
        deleteProject(id).then(() => {
          const newData = data.filter((project) => project._id != id);
          setData(newData);
        });
      });
    }
    const btnlogout = document.querySelector(".logout");
    if(btnlogout){
      btnlogout.addEventListener("click", function() {
        localStorage.removeItem("user");
        setLoggedInUser(null);
      })
    }
 
  });

  return `<div class="container my-5" >
        <div class="d-flex justify-content-between"> 
          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <a href="/admin/addproduct" class="btn btn-danger">Add Product</a>
          <a href="/admin/listproduct" class="btn btn-warning">List Products</a>
        </div>
        ${
          loggedInUser
            ?  listUser(loggedInUser.user.name)
            : '<a href="/signin" class="btn btn-success">Login</a>'
        }
        </div>
        <h1>List Product</h1>
        <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Describe</th>
                <th scope="col">Operation</th>
                </tr>
            </thead>
            <tbody>
            ${data
              .map((project, index) => {
                return `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${project.name}</td>
                        <td><img src="${
                          project.image
                        }" width="100" alt=""></td>
                        <td>${project.price} $</td>
                        <td>${project.describe}</td>
                        <td>
                            <button data-id="${
                              project._id
                            }" class="btn btn-danger btn-remove">
                            Delete
                            </button>
                            <a class="btn btn-info" href="/admin/product/${
                              project._id
                            }/edit">Update</a>
                        </td>
                    </tr>
                `;
              })
              .join("")}
            </tbody>
        </table>
        </div>
    </div>
    `;
};

export default listProduct;
