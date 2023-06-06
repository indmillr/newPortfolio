import React from "react";
import styled from "styled-components";
import { GiCandleFlame } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
   const [bar, setBar] = useState(false);

   return (
      <Container bar={bar}>
         <Logo>
            <span className="green">
               <GiCandleFlame />
            </span>
            <h1>Ian Miller</h1>
         </Logo>
         <Nav>
            <span>
               <a href="#">Home</a>
            </span>
            <span>
               <a href="#">Services</a>
            </span>
            <span>
               <a href="#">Projects</a>
            </span>
            <span>
               <a href="#">Testimonials</a>
            </span>
            <span>
               <a href="#">Portfolio</a>
            </span>
         </Nav>
         <div onClick={() => setBar(!bar)} className="bars">
            <div className="bar"></div>
         </div>
      </Container>
   );
};

export default Header;

const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   max-width: 1280px;
   width: 80%;
   margin: 0 auto;
   padding: 1.5rem 0;
   @media (max-width: 840px) {
      width: 90%;
   }
   .bars {
      display: none;
   }
   @media (max-width: 640px) {
      .bars {
         display: show;
         width: 40px;
         height: 40px;
         position: relative;
         display: flex;
         align-items: center;
         justify-content: center;
         padding: 0.5rem;
         z-index: 100;
         .bar {
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: ${(props) =>
               props.bar ? "transparent" : "#ddd"};
            transition: all 400ms ease-in-out;
            :before,
            :after {
               content: "";
               width: 100%;
               height: 2px;
               background-color: #ddd;
               position: absolute;
            }
            :before {
               transform: ${(props) =>
                  props.bar ? "rotate(45deg)" : "translateY(10px)"};
               transition: all 400ms ease-in-out;
            }
            :after {
               transform: ${(props) =>
                  props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
               transition: all 400ms ease-in-out;
            }
         }
      }
   }
`;

const Logo = styled.div`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   span {
      font-size: 1.8rem;
   }

   h1 {
      font-weight: 600;
      font-size: 1.2rem;
   }
`;

const Nav = styled.div`
   @media (max-width: 640px) {
      position: absolute;
      display: flex;
      flex-direction: column;
      background-color: #01be96;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      gap: 2rem;
      font-weight: 700;
      height: ${(props) => (props.bar ? "100vh" : 0)};
      transition: all 400ms ease-in-out;
      z-index: 100;
      overflow: hidden;
   }
   span {
      margin-left: 1rem;
      a {
         color: #dddddd;
         text-decoration: none;
         font-weight: 400;
         position: relative;
         :before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -5px;
            height: 2px;
            background-color: #dddddd;
            transform: scale(0);
            transform-origin: right;
            transition: transform 400ms ease-in-out;
         }
         :hover:before {
            transform: scale(1);
            transform-origin: left;
         }
         :hover {
            opacity: 0.7;
         }
      }
   }
`;