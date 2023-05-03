import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../home/slider.css';

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <div className="image-section">
            <img src="../beach.jpg" alt="" />
          </div>
          <div className="text-section">
            <h1>Beaches</h1>
            <h3>Serenity unplugged!</h3>
            <h4>
              Watch the sea toss and turn, find a moment to yourself as the
              waves crash against time!
            </h4>
          </div>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <div className="image-section">
            <img src="../wildlife.jpg" alt="" />
          </div>
          <div className="text-section">
            <h1>Wildlife</h1>
            <h3>The call of the wild!</h3>
            <h4>
              Discover the magic of the jungle and experience the thrill of
              spotting wildlife up close and personal!
            </h4>
          </div>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <div className="image-section">
            <img src="../temple.jpg" alt="" />
          </div>
          <div className="text-section">
            <h1>Temples</h1>
            <h3>A journey to the divine!</h3>
            <h4>
              Explore the rich cultural heritage of India through its temples,
              each with its own unique history and architecture!
            </h4>
          </div>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <div className="image-section">
            <img src="../culture.jpg" alt="" />
          </div>
          <div className="text-section">
            <h1>Culture</h1>
            <h3>A kaleidoscope of traditions!</h3>
            <h4>
              Immerse yourself in the vibrant and diverse cultures of India,
              each with its own customs, art, and festivals!
            </h4>
          </div>
        </a>
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 100%;
    overflow: hidden;
    border: 16px ;
    border-radius: 5%;
    padding: 20px;
    box-shadow: rgb(0 0 0 / 50%) 0px 26px 30px -10px,
    rgb(0 0 0 / 53%) 0px 8px 5px -10px;
    &:hover {
        border: 10px solid rgba(249, 249, 249, 0.8);
    }

    /* Half-width section for the image */
    .image-section {
      position: relative;
      float: left;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: top;
      background-color: #f2f2f2;
      
      color: #000;
      width: 50%; /* Set width to half */
    }
  
    /* Half-width section for the text */
    .text-section {
      position: relative;
      z-index: 2;
      float: right;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #f2f2f2;
      padding: 100px;
      color: #000;
      width: 50%; /* Set width to half */
    }
  
    img {
      height: 100%;
      width: auto;
      object-fit: cover;
    }
  `;




// const Wrap = styled.div`
//     cursor: pointer;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 440px;
//     width: 100%;
//     overflow: hidden;
//     border: 16px ;
//     border-radius: 20px;
//     box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
//     rgb(0 0 0 / 53%) 0px 8px 5px -10px;
//     &:hover {
//         border: 10px solid rgba(249, 249, 249, 0.8);
//     }
//     img {
//         height: 100%;
//         width: 100%;
//         object-fit: cover;
//     }
// `;