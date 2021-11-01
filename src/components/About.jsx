import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function About() {
    return (
        <AboutComp id="about">
            <Fade left>
                <AboutText>
                    <h1>Stop Chasing Ghosts!</h1>
                    <p>Imagine having all of that time⏰FREE and getting MORE high quality leads_AND closing MORE cases! </p>
                    <p>NO more getting recycled leads from paper lead providers and other third parties. No more giving away
                    prizes and still not getting clients who are actually ready to do business.
                    </p>
                    <h5>Guaranteed 20 Booked Appointments Or Live Transfers With Qualified MVC cases A Month Exclusive To Your
                        Firm.
                    </h5>
                    <Button>
                        <span>More About Us</span>
                    </Button>
            </AboutText>
            </Fade>
            <Fade right>
                <AboutImag src= "https://i2.wp.com/kliklegal.com/wp-content/uploads/2020/06/414719-PD6STM-77.jpg?fit=700%2C467&ssl=1"/>
            </Fade>
        </AboutComp>
    )
}

export default About

const AboutComp = styled.div`
    padding : 4rem 4rem 2rem 4rem ;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1rem;
    @media(max-width : 600px){
        padding : 4rem 2rem 2rem 2rem ;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    @media(max-width : 768px){
        text-align : center;
    }
`
const AboutText = styled.div`
    padding : 0 0.7rem 0 0 ;
    h1{
        padding-bottom : 1rem;
        font-size : 2.2rem;
        font-family: 'Roboto', sans-serif;
    }
    p{
        font-size : 1.1rem;
        margin : 1rem 0;
        line-height : 1.7rem;
        font-family: 'Roboto', sans-serif;
    }
    h5{
        font-size : 1.1rem;
        font-family: 'Roboto', sans-serif;
    }
`
const AboutImag = styled.img`
    width : 100%;
    @media(max-width : 768px){
        margin-top : 2rem;
    }
`

const Button =styled.div`
    margin-top : 2rem;
    font-family: 'Roboto', sans-serif;
    span { 
        padding : 0.5rem 1rem;
        border : 2px solid #000;
        border-radius : 50px;
        cursor : pointer;
        :hover{
            background-color: rgb(163, 144, 69);
            color:white;
        }
    }
`