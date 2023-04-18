import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

  return (
    <Carousel {...settings}>
        <Wrap>
            <a>
                <img src="card__1.jpg" alt="" />
            </a>
        </Wrap>
        <Wrap>
            <a>
                <img src="card__1.jpg" alt="" />
            </a>
        </Wrap>
        <Wrap>
            <a>
                <img src="card__1.jpg" alt="" />
            </a>
        </Wrap>
        <Wrap>
            <a>
                <img src="card__1.jpg" alt="" />
            </a>
        </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 20px;
    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button:before{
        color: white;
    }
    .slick-list{
        overflow: visible;
    }
    button{
        z-index: 1;
    }
`
// const Wrap = styled.div`
//     cursor: pointer;
//     img{
//         border: 4px solid transparent;
//         border-radius: 4px;
//         width: 80%;
//         height: 340px;
//         object-fit: cover;
//         box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
//         rgb(0 0 0 / 53%) 0px 8px 5px -10px;
//         &:hover{
//             border: 4px solid rgba(249, 249, 249, 0.8);
//         }
//     }
// `
const Wrap = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 440px;
    width: 100%;
    overflow: hidden;
    border: 8px solid transparent;
    border-radius: 12px;
    box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
    rgb(0 0 0 / 53%) 0px 8px 5px -10px;
    &:hover {
        border: 4px solid rgba(249, 249, 249, 0.8);
    }
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

