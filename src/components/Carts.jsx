import React from 'react';
import styled from 'styled-components';
import { FaChess } from 'react-icons/fa';
import { BsFillCalendar2DateFill } from 'react-icons/bs';
import { GiStabbedNote }from "react-icons/gi";
import Fade from 'react-reveal/Fade';

function Carts() {
    return (
        <Cart>
            <Fade left big>
            <SingleCart>
            <Fade left big>
                <FaChess style={{fontSize :"3rem", color : "white"}}/>
                <h1>Proven Multi-<br/> Platform Strategy</h1>
            </Fade>
            </SingleCart>
            </Fade>
            <Fade bottom>
                <SingleCart>
                <Fade bottom>
                    <BsFillCalendar2DateFill  style={{fontSize :"2.9rem", color : "white"}}/>
                    <h1>Guaranteed<br/> Appointments </h1>
                </Fade>
                </SingleCart>
            </Fade>
            <Fade right>
                <SingleCart>
                    <Fade right>
                        <GiStabbedNote  style={{fontSize :"3rem", color : "white"}}/>
                        <h1>Retaining <br/>Clients</h1>
                    </Fade>
                </SingleCart>
            </Fade>
        </Cart>
    )
}

export default Carts

const Cart = styled.div`
    width : 100%;
    padding : 0 4rem ;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
    margin-bottom : 1rem ;
    @media(max-width : 600px){
        padding : 0 2rem;
    }

`

const SingleCart = styled.div`
    background-color: rgb(12, 12, 32);   
    width : 100%;
    height: 250px;
    text-align: center;
    padding : 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
    h1{
        color : white;
        font-size : 1.6rem;
        margin-top: 1rem;
        line-height: 2.3rem;
    }
`