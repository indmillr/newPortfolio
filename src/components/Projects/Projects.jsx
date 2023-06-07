import React from "react";
import styled from "styled-components";
import SliderComponent from "./SliderComponent";

const Projects = () => {
   return (
      <Container>
         <h1>
            Recent <span className="green">Projects</span>
         </h1>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            dolorem totam esse. Dolore voluptatum quo eligendi, reiciendis sed
            placeat repellendus.
         </p>
         <Slide>
            <SliderComponent />
         </Slide>
      </Container>
   );
};

export default Projects;

const Container = styled.div`
   width: 80%;
   max-width: 1280px;
   margin: 0 auto;
   padding: 3rem 0;
   text-align: center;
   h1 {
      font-size: 1.9rem;
   }
   p {
      width: 28rem;
      margin: 0 auto;
      padding: 1rem 0;
      font-size: 0.9rem;
   }
`;

const Slide = styled.div``;
