import * as api from "../api/index.js";
import { setAuth } from "../reducer/authSlice.js";

export const login = (loginFormData, navigate) => async (dispatch) => {
    try {
        //login the user
        const { data } = await api.signIn(loginFormData);
        console.log(data);
        dispatch(setAuth(data));
        navigate("/");
    } catch (error) {
        console.log(error);
    }
};


export const register = (registerationFormData, navigate) => async (dispatch) => {
    try {
        //sign up the user
        const { data } = await api.signUp(registerationFormData);
        dispatch(setAuth(data));
        navigate('/');
    } catch (error) {
        console.log(error);
    }
};