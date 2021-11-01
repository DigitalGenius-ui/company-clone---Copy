import React from 'react';
import styled from 'styled-components';
import { BsFacebook } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import { IoIosCall } from 'react-icons/io';
import { HiOutlineMail } from 'react-icons/hi';
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';

function Footer() {    
    return (
        <FooterComp id="contact">
            <FootIcons>
                <Bounce>
                    <FootLogo src="https://media.istockphoto.com/vectors/luxury-law-logo-template-vector-id1131991303?k=20&m=1131991303&s=612x612&w=0&h=EGfQIVCSYcOqUmAYh91IWquRyWgveJwXZPW__A38TTw="/>
                </Bounce>
                <Icons>
                    <Zoom>
                        <a href="https://www.facebook.com/"><BsFacebook className="icons"/></a>
                    </Zoom>
                    <Zoom>
                        <a href="https://www.linkedin.com/"><IoLogoLinkedin className="icons" /></a>
                    </Zoom>
                </Icons>
            </FootIcons>
            <Bounce>
                <FootNav>
                    <ul>
                        <li>Useful Links</li>
                        <li className="pointer"><a href="#home"><MdKeyboardArrowRight /> Home</a></li>
                        <li className="pointer"><a href="#about"><MdKeyboardArrowRight /> About</a></li>
                        <li className="pointer"><a href="#contact"><MdKeyboardArrowRight /> Contact</a></li>
                    </ul>
                </FootNav>
            </Bounce>
            <Bounce>
                <FootNav>
                    <ul>
                        <li>Contact Info</li>
                        <li><HiLocationMarker className="icon"/> New York NY USA</li>
                        <li><IoIosCall className="icon"/> 631-319-0746</li>
                        <li><HiOutlineMail className="icon"/> support @lawcenter.com</li>
                    </ul>
                </FootNav>
            </Bounce>
            <Author>
                <LightSpeed left>
                    &copy; Copyrighted & Designed By Milad Amiri 2021
                </LightSpeed>
            </Author>
        </FooterComp>
    )
}

export default Footer

const FooterComp = styled.div`
    position : relative;
    background-color: rgb(12, 12, 32);  
    padding : 4rem 4rem;
    display : flex;
    justify-content : space-between;
    @media(max-width : 730px){
        flex-direction : column;
    }

    @media(max-width : 600px){
        padding : 4rem 2rem;
    }
`


const FootIcons = styled.div`
    display : flex;
    flex-direction : column;
`
const Icons = styled.div`
    margin-top: 1.6rem;
    display : flex;
    .icons{
        margin-right: 0.5rem;
        color:white;
        font-size : 2.3rem;
        background-color: rgba(228, 228, 228, 0.452);
        padding : 0.5rem;
        border-radius: 50px;
    }
`

const FootNav = styled.div`
    ul li:first-child{
        padding-bottom : 2rem;
        font-size : 1.3rem;
        color: rgb(163, 144, 69);
        @media(max-width : 730px){
            padding-bottom : 1rem;
        }
    }
    li{
        padding-bottom : 1rem;
        font-family: 'Roboto', sans-serif;
        @media(max-width : 730px){
            padding-bottom : 0.5rem;
        }
    }
    ul li{
        display :flex;
        align-items : center;
        @media(max-width : 730px){
            margin-top : 1rem;
        }
    }
    ul .icon {
        color: rgb(163, 144, 69);
        font-size : 1.4rem;
        margin-right: 0.5rem;
    }
    
`


const FootLogo = styled.img`
    width : 14rem;
    height: 10rem;
    object-fit : cover;
@media(max-width : 730px){
    width : 12rem;
    height: 12rem;
    object-fit : cover;
}

`

const Author = styled.div`
    position : absolute;
    bottom : 0;
    right : 0;
    left : 0;
    color: white;
    text-align : center;
    background-color: rgb(20, 20, 54);
    padding : 1rem 0;
    @media(max-width : 600px){
        font-size : 0.8rem;
    }
`;