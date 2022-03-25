import { createSlice, PayloadAction } from "@reduxjs/toolkit"

let initialState: object = {}

export const currentPokemonSlice = createSlice({
    name: "currentPokemon",
    initialState,
    reducers: {

        setCurrentPokemon: (state: object , action: PayloadAction<object>) => {
            state = action.payload
            return state
        }
    }
})

export const { setCurrentPokemon } = currentPokemonSlice.actions
export default currentPokemonSlice.reducer