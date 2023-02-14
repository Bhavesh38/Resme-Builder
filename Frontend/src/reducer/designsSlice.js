import { createSlice } from "@reduxjs/toolkit";

export const designsSlice = createSlice({
    name: "designs",
    initialState: {
        allDesigns: []
    },
    reducers: {
        setNewDesign: (state, action) => {
            state.allDesigns = [...state.allDesigns, action.payload]
        }
    }
});

export const { setNewDesign } = designsSlice.actions;
export default designsSlice.reducer;