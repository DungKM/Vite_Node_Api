import instance from "./config";
const signIn = (project) => {
    return instance.post("/signin",project)
}
export default  signIn;