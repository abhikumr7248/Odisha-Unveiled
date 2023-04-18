import React from "react";
import Banner from "./home/Banner";
import Contents from "./home/Contents";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Content, Maincontents, Bigcontents } from "./Maincontents";
import "./home/contents.css";
import ImgSlider from "./components/ImgSlider";
class Home extends React.Component {
  state = {
    maincontent: Maincontents,
    bigcontent: Bigcontents,
    contents: Content,
  };
  render() {
    return (
      <div>
        <Banner />
        <div className="home__cont">
          {this.state.maincontent.map((item) => {
            return (
              <div key={item.id}>
                <Contents
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                />
              </div>
            );
          })}
        </div>
        <Container>
          <ImgSlider/>
        </Container>
        <div className="home__cont">
          {this.state.contents.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/result/${item.id}`} className="link">
                  <Contents
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    amount={item.price}
                    description={item.description}
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <div className="home__cont">
          {this.state.contents.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/result/${item.id}`} className="link">
                  <Contents
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    amount={item.price}
                    description={item.description}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Home;

const Container = styled.main`
    height: 500px; /* set height to match the height of the images in the slider */
    width: 100%; /* set width to 100% to match the width of the image slider */
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background-size: cover; /* add this to make sure the background image fills the entire container */
    }
`
