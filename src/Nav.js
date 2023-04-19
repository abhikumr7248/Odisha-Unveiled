import React from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
function Nav() {
  let history = useHistory();
  const onprev = () => {
    history.goBack();
  };
  return (
    <span>
      <div className="nav__mobile">
        <h3 style={{ color: "black", margin: "-7px 0 0 -15px" }}>
          <svg
            onClick={onprev}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Back"
            role="img"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "16px",
              width: "16px",
              stroke: "currentcolor",
              strokeWidth: "4",
              overflow: "visible",
              cursor: "pointer",
            }}
          >
            <g fill="none">
              <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
            </g>
          </svg>
        </h3>
      </div>
      <div className="nav">
        <div className="nav__cont"></div>
        <span className="nav__logo" onClick={onprev}>
        <img
            src="logo.png" alt="LOGO"
            className="svglogo"
            width="35"
            height="35"
            style={{ display: "block" }}
            fill="currentcolor"
            />
          <h2 style={{ cursor: "pointer" }}>Odyssey</h2>
        </span>
        <div className="nav__header">
          <h3 style={{ cursor: "pointer" }}>Discover Secrets At Every Corner</h3>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: "24px",
              width: "24px",
              fill: "currentcolor",
              cursor: "pointer",
            }}
          >
            <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
          </svg>
        </div>
        <div className="mobile__icon">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: "24px",
              width: "24px",
              fill: "currentcolor",
            }}
          >
            <path d="m16 1c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 8c-2.7614237 0-5 2.2385763-5 5 0 2.0143973 1.2022141 3.7998876 2.9996346 4.5835001l.0003231 2.0984999-.1499943.0278452c-2.8326474.5613112-5.31897338 2.2230336-6.93575953 4.5872979 2.34343054 2.291067 5.54974273 3.7028569 9.08579613 3.7028569 3.5355506 0 6.7414538-1.4113884 9.0850203-3.701476-1.6141801-2.3628535-4.0978119-4.0247647-6.929184-4.5867938l-.1558786-.0287302.001228-2.0991413c1.7288399-.7547474 2.9066959-2.4357565 2.9936498-4.355479l.0051645-.2283797c0-2.7614237-2.2385763-5-5-5zm0-6c-7.17970175 0-13 5.82029825-13 13 0 2.9045768.95257276 5.5866683 2.56235849 7.7509147 1.42074739-1.9134907 3.33951478-3.4002416 5.53860831-4.2955956l.3480332-.1363191-.0229565-.0189706c-1.43704227-1.2411241-2.34462949-3.045583-2.42083359-5.0285539l-.00520991-.2714755c0-3.8659932 3.1340068-7 7-7s7 3.1340068 7 7c0 1.9941317-.8415062 3.8279876-2.224566 5.1193683l-.225434.2006317.0447787.0163138c2.3268368.8792152 4.3570558 2.4138611 5.8430586 4.4127726 1.6098837-2.1632453 2.5621627-4.8449575 2.5621627-7.7490864 0-7.17970175-5.8202983-13-13-13z"></path>
          </svg>
        </div>
      </div>
    </span>
  );
}
export default Nav;
