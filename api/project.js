import instance from "./config";
const getProjects = () => {
    return instance.get("/product");
};
const getProject = (id) => {
    return instance.get(`product/${id}`);
};
const addProject = (project) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.accessToken) {
      const accessToken = user.accessToken;
      // Tiếp tục xử lý với accessToken ở đây
      return instance.post("/product", project, {
        headers: {
            Authorization: `Bearer ${accessToken} `
        }
      });
    } else {
      // Xử lý trường hợp không có accessToken ở đây
    }
   
};

const deleteProject = (id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.accessToken) {
      const accessToken = user.accessToken;
      // Tiếp tục xử lý với accessToken ở đây
      return instance.delete(`/product/${id}`,{
        headers: {
            Authorization: `Bearer ${accessToken} `
        }
    });
    } else {
      // Xử lý trường hợp không có accessToken ở đây
    }
};
const updateProject = (project) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.accessToken){
        const accessToken = user.accessToken;
        return instance.put(`/product/${project.id}`, project,{
            headers: {
                Authorization: `Bearer ${accessToken} `
            }
        });
    }
};

export { getProjects, getProject, addProject, deleteProject, updateProject };
