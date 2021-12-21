import styled from "styled-components";
import LinkLogo from "../icons/link";

const CardProyectStyled = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s;
  .front {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--tercerColot);
    visibility: hidden;
    opacity: 0;
    transform: scale(0.5);
    transition: all 0.5s;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .container-links {
      display: flex;
      gap: 20px;
      justify-content: center;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
      }
    }
  }

  &:hover {
    box-shadow: 0 0 16px #52b1c8, 0 0 18px #bfe9ff;
    transform: scale(1.1);
  }

  &:hover .back {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
    transform: scale(1);
  }

  @media screen and (max-width: 650px) {
    &:hover {
      box-shadow: 0 0 16px #7267cb, 0 0 18px #bfe9ff;
      transform: translateY(0) scale(1);
    }
  }
`;

export default function CardProyect({ name, github, demo, lenguage, image }) {
  return (
    <CardProyectStyled>
      <div className="front">
        <img src={image} alt={name}></img>
      </div>
      <div className="back">
        <h3>{name}</h3>
        <div className="container-links">
          <a href={github} target="_blank" rel="noreferrer">
            Gituhb <LinkLogo />
          </a>
          <a href={demo} target="_blank" rel="noreferrer">
            Demo <LinkLogo />
          </a>
        </div>
        <p>{lenguage}</p>
      </div>
    </CardProyectStyled>
  );
}
