import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { FaCaretLeft, FaCaretRight} from "react-icons/fa"
import axios, { AxiosResponse } from 'axios'

import { MainComponent } from '../styles/Main.styled'
import { setCurrentPokemon } from '../../store/currentPokemon'


interface StatInterface {
  stat: any,
  base_stat: number
}

const Main: React.FC = () => {
  const currentPokemon = useAppSelector(state => state.currentPokemon)
  const pokemon = useAppSelector(state => state.pokemon)

  const [description, setDescription] = useState<string>("")
  const [localPokemon, setLocalPokemon] = useState<any>(currentPokemon)
 
  
  const dispatch = useAppDispatch()

  const moveCurrentPokemon = async (index: number): Promise<void> => {
    const requestPokemon: AxiosResponse = await axios(pokemon[index].url)
    dispatch(setCurrentPokemon(requestPokemon.data))
  }

  const toTitleCase = (word: string): string => `${word[0].toUpperCase()}${word.slice(1)}`



  useEffect(() => {
    setLocalPokemon(currentPokemon)
    console.log(currentPokemon)
    // getDescription()
  }, [currentPokemon, description])
  if(localPokemon.name){
    return (
      <MainComponent>
        <h2>{currentPokemon.id}. {toTitleCase(localPokemon?.name)}</h2>
        <div>
          <section id='image'>
            <FaCaretLeft onClick={() => moveCurrentPokemon(localPokemon.id - 2)}/>
            <img src={localPokemon?.sprites?.other['official-artwork'].front_default} alt="" />
            <FaCaretRight onClick={() => moveCurrentPokemon(localPokemon.id)}/>
          </section>
          <section id='info'>
            <ul>
              <li><b>Weight:</b> <span>{localPokemon?.weight}</span></li>
              <li><b>Height:</b> <span>{localPokemon?.height}</span></li>
              <li><b>Type:</b> <span>{localPokemon?.types.map((type: any, index: number) => (
                  index == localPokemon.types.length - 1 ? type.type.name : `${type.type.name}, `
              ))}</span></li>
              {localPokemon?.stats.map((stat: StatInterface) => (
                <li key={stat.stat.name}><b>{stat.stat.name}:</b> <span>{stat.base_stat}</span></li>
              ))}
            </ul>
          </section>
        </div>
        <p>{description}</p>
       
      </MainComponent>
    )
  }
  else return <div></div>
  
}

export default Main