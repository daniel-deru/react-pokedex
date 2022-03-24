import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Pokemon {
    name: string,
    url: string
}

let initialState: Pokemon[] = []

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setPokemon: (state: Pokemon[] , action: PayloadAction<Pokemon[]>): void => {
            state = action.payload
        }
    }
})

export const { setPokemon } = pokemonSlice.actions