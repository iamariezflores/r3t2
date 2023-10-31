import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const initialState = {
    data: []
}

export const DefaultSlice = createSlice({
    name: "default",
    initialState,
    reducers: {
        setDefault : (state, action: PayloadAction<{data: []}>) => {
            state.data.push({
                data: action.payload.data
            })
        }
    }
})

export default DefaultSlice.reducer;
export const { setDefault } = DefaultSlice.actions;