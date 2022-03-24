import {configureStore, combineReducers, ReducersMapObject} from "@reduxjs/toolkit"

// Put slices in here
const reducer = combineReducers<ReducersMapObject>({

})

// Store setup and config
const store = configureStore({
    reducer
})

export default store