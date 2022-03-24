import React from 'react'

import { HeaderComponent } from '../styles/Header.styled'
import Nav from './Nav'

const Header: React.FC = () => {
  return (
    <HeaderComponent>
      <div> 
        <h1>Pokedex</h1>
        <img src="pokeball.png" alt="" />
      </div>
     
      <Nav/>
    </HeaderComponent>
  )
}

export default Header