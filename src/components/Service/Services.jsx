import React from "react";
import styled from "styled-components";
import { MdDesignServices as DesignIcon } from "react-icons/md";
import { FiCodesandbox as DevIcon } from "react-icons/fi";
import { CgWebsite as WebIcon } from "react-icons/cg";
import Card from "./Card";

const Services = () => {
   return (
      <Container>
         <h4>
            My <span className="green">services</span>
         </h4>
         <h1>What I Do</h1>
         <Cards>
            <Card
               Icon={DesignIcon}
               title={"UI/UX Design"}
               desc={`
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis inventore voluptate eligendi repellat ratione consequuntur iure tempore autem architecto aperiam.`}
            />
            <Card
               Icon={DevIcon}
               title={"Applications"}
               desc={`
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis inventore voluptate eligendi repellat ratione consequuntur iure tempore autem architecto aperiam.`}
            />
            <Card
               Icon={WebIcon}
               title={"Web Development"}
               desc={`
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis inventore voluptate eligendi repellat ratione consequuntur iure tempore autem architecto aperiam.`}
            />
         </Cards>
      </Container>
   );
};

export default Services;

const Container = styled.div`
   width: 80%;
   max-width: 1280px;
   margin: 0 auto;
   padding: 3rem 0;
   @media (max-width: 840px) {
      width: 90%;
   }
   h1 {
      padding-top: 1rem;
   }
`;

const Cards = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   margin-top: 4rem;
   gap: 1rem;
`;
