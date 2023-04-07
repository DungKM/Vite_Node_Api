import instance from "./config";
const getCategories = () => {
    return instance.get("/category");
};
const getCategorie = (id) => {
    return instance.get(`/category/${id}`);
};
const addCategorie = (catefory) => {
    return instance.post("/category", catefory);
};

const deleteCategorie = (id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.accessToken) {
      const accessToken = user.accessToken;
      // Tiếp tục xử lý với accessToken ở đây
      return instance.delete(`/category/${id}`,{
        headers: {
            Authorization: `Bearer ${accessToken} `
        }
    });
    } else {
      // Xử lý trường hợp không có accessToken ở đây
    }
};
const updateCategorie = (project) => {
    return instance.put(`/category/${project.id}`, project);
};

export { getCategories, getCategorie, addCategorie, deleteCategorie, updateCategorie };
