import { configureStore } from "@reduxjs/toolkit";
import resumeSlice from "./resumeSlice";
import authSlice from "./authSlice";
export default configureStore({
    reducer: {
        resumeSlice: resumeSlice,
        authSlice: authSlice
    }
});