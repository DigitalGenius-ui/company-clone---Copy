import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

function Header({setForm}) {
    const [scroll, setScroll] = useState(false);
    const [open, setOpen] = useState(false);

    const Scroller = () => {
        if(window.scrollY > 100){
            setScroll(true);
        }else{
            setScroll(false);
        }
    }
    console.log(scroll);

    useEffect(() => {
        window.addEventListener("scroll", Scroller);
    },[]);

    return (
        <Nav bg = {scroll}>
            <Logo src="https://media.istockphoto.com/vectors/luxury-law-logo-template-vector-id1131991303?k=20&m=1131991303&s=612x612&w=0&h=EGfQIVCSYcOqUmAYh91IWquRyWgveJwXZPW__A38TTw="/>
            <Background open = {open} onClick={() => setOpen(false)}>
                <Navigation >
                    <IoIosClose className="close" onClick={() => setOpen(false)}/>
                        <a href="#home"><span>Home</span></a>
                        <a href="#about"><span>About</span></a>
                        <a href="#contact"><span>Contact</span></a>
                    <NavButton>
                        <span onClick={() => setForm(true)} className="button">Book An Evaluation</span>
                    </NavButton>
                </Navigation>
            </Background>
            <GiHamburgerMenu className="burger" onClick={() => setOpen(true)}/>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:fixed;
    top: 0;
    z-index : 999;
    padding : 1rem 4rem;
    color: white;
    background-color : ${props => props.bg ? "rgb(12, 12, 32)" : "transparent"};
    transition : all 500ms ease-in;
    .burger{
        display : none;
    }
    .button{
        padding : 0.6rem 1.5rem ;
        border-radius : 50px;
        border: 1.9px solid white;
        :hover{
            background-color: rgb(163, 144, 69);
        }
    }
    @media(max-width : 600px){
        padding : 1rem 2rem;
    span {
        cursor: pointer;
    }
    }
    @media(max-width : 750px){
        background-color : rgb(12, 12, 32);
        .burger{
            display : flex;
            font-size : 1.7rem;
    }
`
const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    .close{
        display : none;
    }
    a {
        margin : 0 1.5rem;
        cursor: pointer;
        :hover{
            opacity : 0.7;
        }
    }
    @media(max-width : 750px){
        position : fixed;
        flex-direction : column ;
        justify-content: start;
        top : 50%;
        left : 50%;
        transform : translate(-50%,-50%);
        background-color : rgb(12, 12, 32);
        border-radius : 5px;
        padding : 2rem ;
        width : 80%;
        a{
            margin : 1rem;
        }
        .close{
            display : block;
            position : fixed;
            right : 1.3rem;
            top : 1rem;
            font-size : 1.8rem;
        }
        animation : popUp 600ms ease-in;
    }
`
const NavButton = styled.div`
    span{
        cursor: pointer;
    }
    @media(max-width : 750px){
        margin : 1rem;
    }

    @media(max-width : 375px){
        span{
            font-size : 0.8rem;
        }
    }

    @media(max-width : 360px){
        span{
            font-size : 0.8rem;
        }
    }
`

const Logo = styled.img`
    width: 120px;
    height: 80px;
    object-fit: cover;
    margin-top : -1rem;
`

const Background = styled.div`
   @media(max-width : 750px){
       position : fixed;
       top:0;
       right : 0;
       left : 0;
       bottom : 0;
       background-color: rgba(0, 0, 0, 0.450);
       display : ${(props) => (props.open ? "block" : "none")};
   }
`
