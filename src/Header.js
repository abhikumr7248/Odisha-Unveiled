import React from "react";
import Ranger from "./home/Ranger";
import "./Header.css";
import "./home/Navbar.css";
import styled from "styled-components";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn9RAQo0EnCDgSZglI79RvZ0VJG8wPZBA",
  authDomain: "odisha-a56eb.firebaseapp.com",
  projectId: "odisha-a56eb",
  storageBucket: "odisha-a56eb.appspot.com",
  messagingSenderId: "1028398274530",
  appId: "1:1028398274530:web:57b8d5f4b0c3246aa90bbb",
  measurementId: "G-Q9R90FZLF4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Header extends React.Component {
  state = {
    isclicked: false,
    user: null,
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  sel = () => {
    this.setState({
      isclicked: !this.state.isclicked,
    });
  };
  handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ user: null });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    return (
      <div className="header">
        {this.state.isclicked && (
          <div>
            <Ranger />
          </div>
        )}
        <span>
        <img
            src="logo.png" alt="LOGO"
            className="svglogo"
            width="35"
            height="35"
            style={{ display: "block" }}
            fill="currentcolor"
            />
            {/* <img src="./pulic/logo.png" alt="LOGO" width="35" height="35"></img> */}
          <h2>Odyssey</h2>
          <button onClick={this.sel}>
            <div className="header__text">Start your search</div>
            <div className="mobile__text">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1200 1200"
                enableBackground="new 0 0 1200 1200"
                width="20px"
              >
                <path
                  fill="#575756"
                  d="M1122.974,955.368L845.95,710.193c-6.335-5.686-13.323-9.829-20.635-13.244
c35.908-61.397,56.464-132.764,56.464-209.047c0-229.64-186.199-415.815-415.818-415.815C236.237,72.088,50,258.262,50,487.902
c0,229.723,186.237,415.923,415.961,415.923c82.821,0,160.078-24.374,224.989-66.23c4.384,8.652,10.074,16.754,17.79,23.638
l277.024,245.159c33.795,30.746,86.112,28.271,116.821-5.649l25.996-28.513C1159.207,1038.394,1156.686,986.156,1122.974,955.368z
 M465.961,742.727c-140.746,0-254.863-114.1-254.863-254.825c0-140.704,114.117-254.742,254.863-254.742
c140.583,0,254.721,114.038,254.721,254.742C720.682,628.627,606.543,742.727,465.961,742.727z"
                  style={{ fill: "rgb(255, 56, 92)" }}
                ></path>
              </svg>
              <i>Start your search</i>
            </div>
          </button>
          <NavMenu>
            <h3>Discover Secrets At Every Corner</h3>
            {!this.state.user && (
              <Login onClick={this.handleLogin}>Login</Login>
            )}
            {this.state.user && (
              <Login onDoubleClick={this.handleLogout}>Logout</Login>
            )}
          </NavMenu>
        </span>
      </div>
    );
  }
}
export default Header;
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img{
            height: 20px;
        }
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const Login = styled.a`
  background-color: rgba(0,0,0,0.6);
  padding: 8px 16px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  right: 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  &:hover{
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`