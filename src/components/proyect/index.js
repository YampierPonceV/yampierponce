import styled from "styled-components";
import Wrapper from "../wrapper";
import { proyect } from "../../data/proyect";
import CardProyect from "../card-proyect";
import ProyectoLogo from "../../assets/imagen.svg";

const ProyectStyled = styled.div`
  /* background: var(--colorSection); */
  padding: var(--paddingSection);
  background: #1e1535;

  h2 {
    font-size: 45px;
    @media screen and (max-width: 1000px) {
      padding: 0 1rem;
    }
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "card card image";
    grid-gap: 50px;

    @media screen and (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      padding: 0 1rem;
    }

    .image-proyecto {
      grid-area: image;
      @media screen and (max-width: 1000px) {
        order: 1;
      }
      img {
        width: 100%;
        height: 100%;
        filter: drop-shadow(0 0 7px);
        animation: batman 2s linear alternate infinite;
        transform: unset;
      }

      @keyframes batman {
        to {
          transform: translateY(-5%);
        }
      }
    }
  }

  .container-proyectos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-gap: var(--gapCajas); */
    grid-area: card;
    grid-gap: 25px;
    @media screen and (max-width: 1000px) {
      order: 2;
    }
  }

  @media screen and (max-width: 950px) {
    .container-proyectos {
      padding: 0 1rem;
    }
  }
  @media screen and (max-width: 850px) {
    .container-proyectos {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 650px) {
    .container-proyectos {
      grid-template-columns: 1fr;
    }
  }
`;

export default function Proyect() {
  return (
    <ProyectStyled id="proyect">
      <Wrapper>
        <h2>Mis Proyectos</h2>
        <div className="container">
          <div className="container-proyectos">
            {proyect.map(({ id, name, github, demo, lenguage, image }) => {
              return (
                <CardProyect
                  key={id}
                  name={name}
                  github={github}
                  demo={demo}
                  lenguage={lenguage}
                  image={image}
                />
              );
            })}
          </div>
          <div className="image-proyecto">
            <img src={ProyectoLogo} alt="referencia de los proyectos"></img>
          </div>
        </div>
      </Wrapper>
    </ProyectStyled>
  );
}
