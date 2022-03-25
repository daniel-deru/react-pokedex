import React, {useEffect} from 'react'
import { FaBars } from "react-icons/fa"

import { useAppSelector } from '../../store/hooks'

import { NavComponent } from '../styles/Nav.styled'

const Nav: React.FC = () => {
  const pokemon = useAppSelector(state => state.pokemon)

  useEffect(() => {
    // console.log(pokemon)
  })
  return (
    <NavComponent>
        <FaBars/>
    </NavComponent>
  )
}

export default Nav