import {configureStore} from "@reduxjs/toolkit"
import { currentPokemonSlice } from "./currentPokemon"
import { pokemonSlice } from "./pokemonSlice"
import { descriptionSlice } from "./descriptionSlice"

// Store setup and config
const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer,
        currentPokemon: currentPokemonSlice.reducer,
        description: descriptionSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

