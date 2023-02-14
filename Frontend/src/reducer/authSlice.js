import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        authData: null
    },
    reducers: {
        setAuth: (state, action) => {
            localStorage.setItem("profile", JSON.stringify(action.payload));

            state.authData = action.payload
        },
        setLogout: (state, action) => {
            localStorage.clear();
            state.authData = null
        }
    }
});

export const { setAuth, setLogout } = authSlice.actions;
export default authSlice.reducer;