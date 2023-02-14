import axios from "axios";
// const temp = localStorage.getItem("profile");
// console.log(temp, "hii");
const API = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        'Content-Type': 'application/json'
    }
});
// API.interceptors.request.use((req) => {
//     if (localStorage.getItem("profile")) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
//     }
//     return req;
// });


export const signIn = (loginFormData) => API.post("/user/login", loginFormData);
export const signUp = (registerationFormData) => API.post("/user/register", registerationFormData);