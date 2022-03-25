import React, {useEffect, useState} from 'react'
import { FaBars } from "react-icons/fa"
import axios from 'axios'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { setCurrentPokemon } from '../../store/currentPokemon'
import { Pokemon } from '../../interfaces'
import { NavComponent, PokemonList } from '../styles/Nav.styled'

const Nav: React.FC = () => {
  const [show, setShow] = useState<boolean>(false)
  const pokemon = useAppSelector(state => state.pokemon)
  const dispatch = useAppDispatch()

  const listVariant = {
    visible: (slide: number) => ({
      x: slide
    })
  }

  const getPokemonData = async (pokemon: Pokemon): Promise<void> => {
    // console.log(pokemon.url)
    const requestPokemon = await axios(pokemon.url)
    // console.log(requestPokemon.data)
    dispatch(setCurrentPokemon(requestPokemon.data))
  }

  useEffect(() => {
  })

  return (
    <NavComponent>
        <FaBars onClick={() => setShow(!show)}/>
        <PokemonList
          
          variants={listVariant}
          animate="visible"
          custom={show ? 0 : 300}
        >
          {pokemon.map((item, index) => (
            <li key={item.url} onClick={() => getPokemonData(item)}>{item.name}</li>
          ))}
        </PokemonList>
    </NavComponent>
  )
}

export default Nav