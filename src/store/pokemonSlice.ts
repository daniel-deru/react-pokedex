import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {RootState} from "./index"

interface Pokemon {
    name: string,
    url: string
}

interface InitialPokemonState {
    pokemon: Pokemon[]
}

// let initialState: InitialPokemonState = {
//     pokemon: []
// }
interface CounterState {
    value: number
}
let initialState: CounterState = {
    value: 0
}

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        // setPokemon: (state: InitialPokemonState , action: PayloadAction<Pokemon[]>): void => {
        //     console.log("This is the action.payload", action.payload)
        //     state.pokemon = [...action.payload]
        //     console.log("This is the state in createSlice", state.pokemon)
        // }
        setPokemon: (state: CounterState , action: PayloadAction<number>) => {
            console.log("This is the action.payload", action.payload)
            state.value += action.payload
            // console.log("This is the state in createSlice", state)
            return state
           
        }
    }
})

export const { setPokemon } = pokemonSlice.actions
export const selectCount = (state: RootState) => state.pokemon.value
export default pokemonSlice.reducer