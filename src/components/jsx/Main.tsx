import React, { useEffect } from 'react'
import { useAppSelector } from '../../store/hooks'

import { MainComponent } from '../styles/Main.styled'

const Main: React.FC = () => {

  const currentPokemon = useAppSelector(state => state.currentPokemon) 
  useEffect(() => {
    console.log(currentPokemon)
  }, [currentPokemon])
  return (
    <MainComponent>
      
    </MainComponent>
  )
}

export default Main