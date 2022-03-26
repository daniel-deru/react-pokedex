import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: string = ""

export const descriptionSlice = createSlice({
    name: "description",
    initialState,
    reducers: {
        setDescription: (state: string, action: PayloadAction<string>) => state = action.payload
    }
})

export const { setDescription } = descriptionSlice.actions
export default descriptionSlice.reducer