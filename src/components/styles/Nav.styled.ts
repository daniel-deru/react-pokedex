import styled from "styled-components"
import { motion } from "framer-motion"

export const NavComponent = styled.nav`
    svg {
        color: ${({theme}) => theme.colors.red};
        font-size: 2em;
        cursor: pointer;
    }
`

export const PokemonList = styled(motion.ol)`
position: absolute;
height: 0;
overflow: auto;
right: 0;
top: 5rem;
background-color: ${({theme}) => theme.colors.cream};
padding: 0;
margin: 0;
width: 300px;

li {
    cursor: pointer;
    text-align: left;
    margin-left: 3rem;
    &:hover {
        color: ${({theme}) => theme.colors.red};
    }
}
`