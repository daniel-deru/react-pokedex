import React from 'react'
import { FaBars } from "react-icons/fa"

import { NavComponent } from '../styles/Nav.styled'

const Nav: React.FC = () => {
  return (
    <NavComponent>
        <FaBars/>
    </NavComponent>
  )
}

export default Nav