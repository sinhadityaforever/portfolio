import React from "react";
import styled from "styled-components";

const Image = styled.img`
  /* maxHeight: 50%,
marginLeft: 73rem,
display: none,
marginTop: 10rem, */
  max-width: 50%;
  margin-left: 17rem;
  margin-top: 4rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const BackgroundAnimation = () => (
  <div>
    <Image src="images/dp.png"></Image>
  </div>
);

export default BackgroundAnimation;
