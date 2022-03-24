import styled from "styled-components"

export const HeaderComponent = styled.header`
    background-color: ${({theme}) => theme.colors.cream};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    div{
        display: flex;
        h1 {
            padding: 0px;
            margin: 0px;
        }

        img {
            width: 50px;
            margin-left: 20px;
        }
    }



`