import { configureStore } from "@reduxjs/toolkit";
import resumeSlice from "./resumeSlice";
import authSlice from "./authSlice";
import designsSlice from "./designsSlice";
export default configureStore({
    reducer: {
        resumeSlice: resumeSlice,
        authSlice: authSlice,
        designSlice: designsSlice
    }
});