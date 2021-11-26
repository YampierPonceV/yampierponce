import styled from "styled-components";

import HomeLogo from "../icons/home";
import AboutLogo from "../icons/about";
import ServicesLogo from "../icons/services";
import ProyectsLogo from "../icons/proyect";

const MovileStyled = styled.div`
  display: none;
  @media screen and (max-width: 650px) {
    display: block;
    position: fixed;
    bottom: 20px;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 0;
    background: var(--colorPrimary);
    z-index: 100;
    display: flex;
    justify-content: space-evenly;
    border-radius: 9999px;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);

    a {
      color: red;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: var(--white);
      opacity: 0.5;

      svg {
        fill: var(--white);
      }
    }

    a.active {
      opacity: 1;
      filter: drop-shadow(0 0 8px rgba(255, 255, 255, 1));
    }
  }
`;

export default function Movile() {
  const handleClick = (e) => {
    const a = document.querySelectorAll(".navigation");
    a.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.parentNode.classList.add("active");
  };

  return (
    <MovileStyled>
      <a href="#index" className="navigation active">
        <HomeLogo onClick={handleClick} />
      </a>
      <a href="#about" className="navigation">
        <AboutLogo onClick={handleClick} />
      </a>
      <a href="#services" className="navigation">
        <ServicesLogo onClick={handleClick} />
      </a>
      <a href="#proyect" className="navigation">
        <ProyectsLogo onClick={handleClick} />
      </a>
    </MovileStyled>
  );
}
