import styled from "styled-components"

export const MainComponent = styled.section`
background-color: ${({theme}) => theme.colors.red};
height: 85vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: space-between;

h2 {
    margin: 0;
    color: ${({theme}) => theme.colors.cream};
    padding-top: 2rem;
}

div {
    display: flex;
    justify-content: space-around;
    align-items: center;

    #image {
        display: flex;
        justify-content: space-between;
        align-items: center;
        svg {
            font-size: 5em;
            color: ${({theme}) => theme.colors.cream};
            cursor: pointer;
        }
    }

    section {
        img {
            max-width: 400px;
            max-height: 300px;
        }

        ul {
            width: 400px;
            text-align: left;
            font-size: 1.25em;
            li {
                display: flex;
                justify-content: space-evenly;
                text-align: left;
                cursor: pointer;
                &:hover {
                    color: ${({theme}) => theme.colors.cream};
                }
                b {
                    width: 50%;
                }
                span {
                    width: 50%;
                }
            }
        }
    }
}

p {
    color: ${({theme}) => theme.colors.cream};
    font-size: 1.25em;
}

`