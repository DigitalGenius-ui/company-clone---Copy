import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Banner() {
    return (
        <BannerImage>
            <BannerText id="home">
                <Fade bottom>
                <h1>Stop Chasing Clients. Let Us Bring Them For You</h1>
                <p>You went to law school to become a layer. Not a telemarketer.</p>
                <p>Our proven process has helped personal injury attorneys create a pipeline</p>
                <p>20 booked appointments for qualified mva cases every month or we pay you!</p>
                <Button>
                    <span>Claim Your Cases Here</span>
                </Button>
                </Fade>
            </BannerText>
        </BannerImage>
    )
}

export default Banner

const BannerImage = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.600),rgba(0, 0, 0, 0.700)), url("https://img.freepik.com/free-photo/legal-law-advice-justice-concept-counselor-lawyer-notary-working-documents-report-important-case-wooden-gavel-brass-scale-table-courtroom_122498-109.jpg?size=626&ext=jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height : 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom : -3rem;
`

const BannerText = styled.div`
    color : white;
    text-align : center;
    h1{
        padding-bottom : 0.8rem;
        @media(max-width : 750px){
            font-size : 1.6rem;
        }
    }
    p{
        font-size :1.1rem;
        padding: 0.2rem;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 0.5rem;
        :nth-child(4){
            text-transform : uppercase;
            font-size :1rem;
            line-height : 1.4rem;
        }
        @media(max-width : 600px){
            margin-bottom: 0.3rem;
        }
        @media(max-width : 750px){
            font-size : 0.9rem;
            :nth-child(4){
                font-size :0.8rem;
            }
        }
    }
    @media(max-width : 750px){
        width : 90%;
    }
`

const Button = styled.div`
    margin-top : 2rem;
    font-family: 'Roboto', sans-serif;
    span{
        padding : 0.8rem 1.5rem;
        border : 1px solid #fff;
        border-radius : 50px;
        cursor: pointer;
        :hover{
            background-color: rgb(163, 144, 69);
        }
    }
    @media(max-width : 750px){
       span{
        padding : 0.8rem 1rem;
        font-size : 0.8rem;
       }
    }
`