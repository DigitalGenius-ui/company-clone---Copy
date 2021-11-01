import React from 'react';
import styled from 'styled-components';

function PopUp(props) {
    return (props.popOpen) ? (
        <PupUpComp>
            <PopDetile>
                <h1>Welcome To <span>UTAH INJURY</span> Client Services</h1>
                <button onClick={() => props.setPopOpen(false)}>Get Started</button>
            </PopDetile>
        </PupUpComp>
    ) : ""
}

export default PopUp

const PupUpComp = styled.div`
    position : fixed;
    top: 0;
    right: 0;
    left : 0;
    bottom : 0;
    display : flex;
    justify-content : center;
    align-items:center;
    background-color: rgba(0, 0, 0, 0.450);
    z-index: 1000;
`

const PopDetile = styled.div`
    background-color : white;
    width : 600px;
    text-align : center;
    padding : 2rem;
    font-family: 'Roboto', sans-serif;
    font-size : 1rem;
    border-radius : 5px;
    animation : form 1s ease-in;
    button{
        margin-top : 2rem;
        padding : 0.6rem 1.3rem;
        cursor: pointer;
        background-color : darkblue;
        color :white;
        border: none;
        :hover{
            opacity: 0.7;
        }
    }
    h1{
        span{
            color: rgb(163, 144, 69);
        }
    }
`