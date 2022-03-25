import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { useAppDispatch, useAppSelector } from './store/hooks';
import { setPokemon } from './store/pokemonSlice';


import Header from './components/jsx/Header';
import Main from './components/jsx/Main';


const App: React.FC = () => {

  const pokemon = useAppSelector(state => state.pokemon)
  const dispatch = useAppDispatch()

  const getPokemon = async (): Promise<void> => {
    const pokemon = await axios("https://pokeapi.co/api/v2/pokemon?limit=890");
    dispatch(setPokemon(pokemon.data.results))
  }


  useEffect(() => {
    getPokemon()
    console.log(pokemon)
  }, [])

  return (
    <div className="App" onClick={() => getPokemon()}>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
