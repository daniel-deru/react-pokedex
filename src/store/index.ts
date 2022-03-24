import {configureStore} from "@reduxjs/toolkit"
import { pokemonSlice } from "./pokemonSlice"

// Store setup and config
const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

