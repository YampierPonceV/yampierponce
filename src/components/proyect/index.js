import styled from "styled-components";
import Wrapper from "../wrapper";
import { proyect } from "../../data/proyect";
import CardProyect from "../card-proyect";

const ProyectStyled = styled.div`
  background: var(--colorSection);
  padding: var(--paddingSection);

  h2 {
    margin: 0;
    font-size: 35px;
    margin-bottom: var(--marginBottom);
    margin-left: auto;
    color: var(--colorSegundary);
    margin-right: auto;
    width: max-content;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 100px;
      height: 5px;
      background: var(--tercerColot);
      border-radius: 9999px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .container-proyectos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: var(--gapCajas);
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
        <h2>MIS PROYECTOS</h2>
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
      </Wrapper>
    </ProyectStyled>
  );
}
