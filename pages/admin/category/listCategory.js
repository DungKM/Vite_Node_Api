import { deleteCategorie, getCategories } from "../../../api/category";

import { useEffect, useState } from "../../../lib";


const listCategory = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        getCategories().then((data) => setData(data));
      }, []);
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

  // chạy sau khi render
  useEffect(function () {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      // btn là 1 phần tử trong mảng?
      const id = btn.dataset.id;
      btn.addEventListener("click", function () {
        deleteCategorie(id).then(() => {
          const newData = data.filter((project) => project._id != id);
          setData(newData);
        });
      });
    }

  });

  return `<div class="container">
        <h1>List Product</h1>
        <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
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
                        <td>
                            <button data-id="${
                              project._id
                            }" class="btn btn-danger btn-remove">
                            Delete
                            </button>
                            <a class="btn btn-info" href="/admin/projects/${
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

export default listCategory;
