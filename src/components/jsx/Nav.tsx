import React, {useEffect, useState} from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import axios from 'axios'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { setCurrentPokemon } from '../../store/currentPokemon'
import { setDescription } from '../../store/descriptionSlice'
import { Pokemon } from '../../interfaces'
import { NavComponent, PokemonList } from '../styles/Nav.styled'

const Nav: React.FC = () => {
  const [show, setShow] = useState<boolean>(false)
  const pokemon = useAppSelector(state => state.pokemon)
  const dispatch = useAppDispatch()

  const listVariant = {
    visible: (height: number) => ({
      height: `${height}vh`,
      transition: {
        type: "linear"
      }
    })
  }

  const getPokemonData = async (pokemon: Pokemon): Promise<void> => {
    setShow(false)
    const requestPokemon = await axios(pokemon.url)
    dispatch(setCurrentPokemon(requestPokemon.data))

    const requestDescription = await axios(requestPokemon.data.species.url)
    const descriptions = requestDescription.data.flavor_text_entries
    const englishDescriptions = descriptions.filter((entry: any): boolean => entry.language.name === "en")
    dispatch(setDescription(englishDescriptions[0].flavor_text))
  }

  return (
    <NavComponent>
      <div onClick={() => setShow(!show)}>
        {show ?  <FaTimes/> : <FaBars/>}
      </div>
        <PokemonList
          
          variants={listVariant}
          animate="visible"
          custom={show ? 85 : 0}
        >
          {pokemon.map((item, index) => (
            <li key={item.url} onClick={() => getPokemonData(item)}>{item.name}</li>
          ))}
        </PokemonList>
    </NavComponent>
  )
}

export default Nav