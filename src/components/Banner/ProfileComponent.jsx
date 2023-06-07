import React from "react";
import styled from "styled-components";
import { AiOutlineGithub as Github } from "react-icons/ai";
import { AiOutlineLinkedin as LinkedIn } from "react-icons/ai";
import { AiOutlineFacebook as Facebook } from "react-icons/ai";
import HeroImg from "../../assets/images/hero.png";

const ProfileComponent = () => {
   return (
      <Container>
         <Texts>
            <h4>
               Hello <span className="green">I am</span>
            </h4>
            <h1 className="green">Ian Miller</h1>
            <h3>Developer and Designer</h3>
            <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Blanditiis, laudantium. Commodi laborum voluptatum magnam ipsam
               quos aperiam odio explicabo incidunt?
            </p>
            <button>Let's Talk</button>
            <Social>
               <p>Check out my</p>
               <div className="social-icons">
                  <span>
                     <a href="#">
                        <Github />
                     </a>
                  </span>
                  <span>
                     <a href="#">
                        <LinkedIn />
                     </a>
                  </span>
                  <span>
                     <a href="#">
                        <Facebook />
                     </a>
                  </span>
               </div>
            </Social>
         </Texts>
         <Profile>
            <img src={HeroImg} alt="profile" />
         </Profile>
      </Container>
   );
};

export default ProfileComponent;

const Container = styled.div`
   display: flex;
   gap: 2rem;
   padding-top: 3rem;
   width: 80%;
   max-width: 1280px;
   margin: 0 auto;
   @media (max-width: 840px) {
      width: 90%;
   }
   @media (max-width: 640px) {
      flex-direction: column;
   }
`;

const Texts = styled.div`
   flex: 1;
   h4 {
      padding: 1rem 0;
      font-weight: 500;
   }
   h1 {
      font-size: 2rem;
      font-family: "Secular ONe", sans-serif;
      letter-spacing: 2px;
   }
   h3 {
      font-weight: 500;
      font-size: 1.2rem;
      padding-bottom: 1.2rem;
      text-transform: capitalize;
   }
   p {
      font-weight: 300;
   }
   button {
      padding: 0.7rem 2rem;
      margin-top: 3rem;
      cursor: pointer;
      background-color: #01be96;
      border: none;
      color: #ddd;
      font-weight: 500;
      filter: drop-shadow(0px 10px 10px #01be95);
      :hover {
         filter: drop-shadow(0px 10px 10px #01be97);
      }
   }
`;

const Social = styled.div`
   margin-top: 3rem;
   display: flex;
   align-items: center;
   gap: 1rem;
   p {
      font-size: 0.9rem;
      @media (max-width: 690px) {
         font-size: 0.7rem;
      }
   }

   .social-icons {
      display: flex;
      align-items: center;
      gap: 1rem;
      span {
         width: 2.3rem;
         height: 2rem;
         clip-path: polygon(
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%,
            0% 50%
         );
         background-color: #01be96;
         position: relative;
         transition: transform 400ms ease-in-out;
         :hover {
            transform: rotate(360deg);
         }
      }
      a {
         color: #ddd;
         position: absolute;
         top: 30%;
         left: 30%;
         transform: translate (-50%, -50%);
      }
   }
`;

const Profile = styled.div`
   img {
      width: 25rem;
      filter: drop-shadow(0px 10px 10px #01be97);
      transition: transform 400ms ease-in-out;
      @media (max-width: 790px) {
         width: 20rem;
      }
      @media (max-width: 660px) {
         width: 18rem;
      }
      @media (max-width: 640px) {
         width: 100%;
      }
   }
   :hover img {
      transform: translateY(-10px);
   }
`;
