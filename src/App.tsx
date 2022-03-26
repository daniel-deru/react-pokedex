import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { useAppDispatch, useAppSelector } from './store/hooks';
import { setPokemon } from './store/pokemonSlice';
import { setDescription } from './store/descriptionSlice';
import { setCurrentPokemon } from './store/currentPokemon';


import Header from './components/jsx/Header';
import Main from './components/jsx/Main';


const App: React.FC = () => {

  const pokemon = useAppSelector(state => state.pokemon)
  const currentPokemon = useAppSelector(state => state.currentPokemon)
  const dispatch = useAppDispatch()

  const getPokemon = async (): Promise<void> => {
    const pokemon = await axios("https://pokeapi.co/api/v2/pokemon?limit=1000");
    dispatch(setPokemon(pokemon.data.results))

    if(!currentPokemon.name) getCurrentPokemon(pokemon.data.results[0]?.url)
    
  }

  const getCurrentPokemon = async (pokemonURL: string): Promise<void> => {
    const requestCurrentPokemon = await axios(pokemonURL)
    dispatch(setCurrentPokemon(requestCurrentPokemon.data))
    
    const requestDescription = await axios(requestCurrentPokemon.data.species.url)
    dispatch(setDescription(requestDescription.data.flavor_text_entries[0].flavor_text))


  }

  const getDescription = async () => {
    const requestDescription = await axios(currentPokemon.species.url)
    // setDescription(requestDescription.data.flavor_text_entries[0].flavor_text)

  }


  useEffect(() => {
    getPokemon()
    
  }, [])

  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
