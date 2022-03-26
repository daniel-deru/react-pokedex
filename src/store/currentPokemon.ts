import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"

let initialState: any = {}

export const currentPokemonSlice = createSlice({
    name: "currentPokemon",
    initialState,
    reducers: {

        setCurrentPokemon: (state: AxiosResponse<any> , action: PayloadAction<any>) => {
            state = action.payload
            return state
        }
    }
})

export const { setCurrentPokemon } = currentPokemonSlice.actions
export default currentPokemonSlice.reducer