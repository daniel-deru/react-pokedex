import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {Pokemon} from "../interfaces"


let initialState: Pokemon[] = []

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setPokemon: (state: Pokemon[] , action: PayloadAction<Pokemon[]>) => state = action.payload
    }
})

export const { setPokemon } = pokemonSlice.actions
export default pokemonSlice.reducer