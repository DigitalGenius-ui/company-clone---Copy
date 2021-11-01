import React from 'react'
import styled from 'styled-components'
import { IoIosClose } from 'react-icons/io'

function Form(props) {
    return (props.form) ? (
        <FormBg form={props.form} >
            <FormComp>
                <form >
                    <IoIosClose className="close" onClick={() => props.setForm(false)}/>
                    <h1>Get Your Appointment</h1>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Phone Number"/>
                    <input type="date" />
                    <button type="submit">Submit</button>
                </form>
            </FormComp>
        </FormBg>
    ) : "";
}

export default Form

const FormComp = styled.div`
    background-color: white;
    padding: 1rem;
    width: 500px;
    position : relative;
    animation : form 500ms ease-in;
    @media(max-width: 550px){
        width : 90%;
    }
    form{
        display: flex;
        flex-direction : column;
    }
    h1{
        padding-bottom:1rem;
        font-family: 'Roboto', sans-serif;
        text-transform : uppercase;
        font-size : 1.8rem; 
        @media(max-width: 470px){
            font-size : 1.5rem; 
        }

        @media(max-width: 415px){
            font-size : 1.2rem; 
        }
    }
    input{
        padding: 1rem;
        margin : 0.5rem 0;
        border: none;
        background-color: rgba(128, 128, 128, 0.377);
        outline : none;
    }
    button {
        padding: 0.7rem;
        width : 6rem;
        margin-top : 0.5rem;
        cursor: pointer;
    }
    .close{
        position : absolute;
        right: 1.5rem;
        top: 0.7rem;
        font-size : 2.2rem;
        cursor: pointer;
    }
`

const FormBg= styled.div`
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    display : flex;
    align-items: center;
    justify-content:center;
    background-color: rgba(0, 0, 0, 0.450);
    z-index : 1000;
`;