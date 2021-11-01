import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { SiHandshake } from 'react-icons/si';
import { MdOutlineEqualizer } from 'react-icons/md';
import { RiCalendarFill } from 'react-icons/ri';
import { BsFillFileSpreadsheetFill } from 'react-icons/bs';
import Slide from 'react-reveal/Slide';

function Skills() {
    return (
        <SkillComp>
            <Slide left>
            <div className="player-wrapper">
                <ReactPlayer className="react-player" controls width="100%" height="100%" url="https://www.youtube.com/watch?v=xcFjRts7NkA"/>
            </div>
            </Slide>
            <Slide right>
            <SkillCart>
                <h1>How We Do It</h1>
                <span>
                    <SiHandshake style={{fontSize: '1.9rem', marginRight : "1rem", color: "rgb(163, 144, 69)"}}/>
                    Your Firm Signing Claim
                </span>
                <span>
                    <MdOutlineEqualizer style={{fontSize: '1.9rem', marginRight : "1rem", color: "rgb(163, 144, 69)"}}/>
                    Dedicated in-House Lead Qualification Program
                </span>
                <span>
                    <RiCalendarFill style={{fontSize: '1.9rem', marginRight : "1rem", color: "rgb(163, 144, 69)"}}/>
                    Automated Lead Nurturing
                </span>
                <span>
                    <BsFillFileSpreadsheetFill style={{fontSize: '1.9rem', marginRight : "1rem", color: "rgb(163, 144, 69)"}}/>
                    Working Custom Ads Run For You
                </span>
            </SkillCart>
            </Slide>
        </SkillComp>
    )
}

export default Skills

const SkillComp = styled.div`
    padding : 2rem 4rem ;  
    background-color: rgb(228, 225, 225);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1rem;
    @media(max-width : 600px){
        padding : 2rem 2rem;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
`
const SkillCart = styled.div`
    display : flex;
    flex-direction : column;
    justify-content :center;
    background-color :#fff;
    font-family: 'Roboto', sans-serif;
    h1{
        font-size: 1.7rem;
    }
    padding :2rem;
    span{
        margin : 1rem 0;
        display : flex;
        font-family: 'Roboto', sans-serif;
        align-items: center;
    }
`