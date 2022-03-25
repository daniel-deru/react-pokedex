import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setPokemon } from './store/pokemonSlice';
import './App.css';

import Header from './components/jsx/Header';
import axios from 'axios';

const App: React.FC = () => {

  const pokemon = useAppSelector(state => state.pokemon)
  const dispatch = useAppDispatch()

  const getPokemon = (): void => {
    // const pokemon = await axios("https://pokeapi.co/api/v2/pokemon?limit=890");
    // console.log("This is the fetch data", pokemon.data.results)
    // dispatch(setPokemon(pokemon.data.result))
    // dispatch(setPokemon([{name: "Test", url: "test"}]))
    dispatch(setPokemon(5))
  }


  useEffect(() => {
    // console.log("This is the state before function", pokemon)
    // console.log("this is the useeffect before fetch")
    // getPokemon()

    console.log("This is the pokemon state inside app", pokemon)
  }, [pokemon])
  return (
    <div className="App" onClick={() => getPokemon()}>
      <Header></Header>
    </div>
  );
}

export default App;
