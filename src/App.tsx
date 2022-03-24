import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setPokemon } from './store/pokemonSlice';
import './App.css';

import Header from './components/jsx/Header';
import axios from 'axios';

const App: React.FC = () => {

  const pokemon = useAppSelector(state => state.pokemon)
  const dispatch = useAppDispatch()

  const getPokemon = async (): Promise<void> => {
    const pokemon = await axios("https://pokeapi.co/api/v2/pokemon?limit=890");
    dispatch(setPokemon(pokemon.data.results))
  }


  useEffect(() => {
    getPokemon()
  })
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
