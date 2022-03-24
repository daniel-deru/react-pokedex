import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Pokemon {
    name: string,
    url: string
}

let initialState: undefined | Pokemon[] = []

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        getPokemon: (state: undefined | Pokemon[] , action: PayloadAction<Pokemon[]>) => {
            state = action.payload
        }
    }
})