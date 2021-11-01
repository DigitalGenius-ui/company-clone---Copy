import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import Flip from 'react-reveal/Flip';

function Reviews() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Reviewer>
        <h1>What Clients Say</h1>
            <Slider {...settings}>
                <Flip top>
                <Review>
                    <ReviewImg src="https://i.pinimg.com/originals/1b/46/ca/1b46ca07ff7b2c6c8c842fb56e9656e9.jpg"/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum expedita excepturi natus, perspiciatis animi inventore. Nulla delectus, 
                        aliquid consectetur praesentium, fugiat ullam, accusamus non ea corrupti molestiae quod voluptates laudantium.</p>
                    <h5>Justin C.</h5>
                    <span style={{color:'green'}}><i>New York</i></span>
                </Review>
                </Flip>
                <Flip top>
                <Review>
                    <ReviewImg src="https://i.pinimg.com/originals/1b/46/ca/1b46ca07ff7b2c6c8c842fb56e9656e9.jpg"/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum expedita excepturi natus, perspiciatis animi inventore. Nulla delectus, 
                        aliquid consectetur praesentium, fugiat ullam, accusamus non ea corrupti molestiae quod voluptates laudantium.</p>
                    <h5>Justin C.</h5>
                    <span style={{color:'green'}}><i>New York</i></span>
                </Review>
                </Flip>
            </Slider>
        </Reviewer>
      );
}

export default Reviews

const Reviewer = styled.div`
    text-align: center;
    padding : 4rem 0 2rem 0 ;
    h1{
        font-family: 'Roboto', sans-serif;
    }
`

const Review = styled.div`
    p {
        width : 700px;
        margin : auto;
        line-height: 2rem;
        font-family: 'Roboto', sans-serif;
        @media(max-width : 768px){
            width : 80%;
        }
    }
    h5{
        padding: 0.5rem 0;
        font-size : 1.2rem;
    }
`

const ReviewImg = styled.img`
    width : 50px;
    height: 50px;
    object-fit : cover;
    border-radius : 50px;
    margin : 1rem auto;
`
