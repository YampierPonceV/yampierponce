import styled from "styled-components";
import Wrapper from "../wrapper";
import Social from "../social";

const imageUrl = "https://avatars.githubusercontent.com/u/83417061?v=4";

const AboutStyle = styled.div`
  padding: var(--paddingSection);

  h2 {
    font-size: 35px;
    margin: 0;
    margin-bottom: var(--marginBottom);
    color: var(--colorSegundary);
    &::after {
      content: "";
      display: block;
      height: 4px;
      width: 100px;
      background: var(--colorPrimary);
    }
  }

  .js {
    color: yellow;
    text-shadow: 0 0 3px;
  }
  h4 {
    font-size: 24px;
  }
  figure {
    margin: 0;
    width: 450px;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: var(--boxShadow);
    }
  }

  .detaills {
    display: flex;
    gap: var(--gapCajas);

    .informacion {
      display: flex;
      flex-direction: column;
      gap: var(--gapCajas);

      p,
      h4 {
        margin: 0;
      }
    }

    .cargo {
      display: flex;
      justify-content: space-between;
      div {
        padding-bottom: 8px;
        border-bottom: 1px solid #cccccc;
      }
    }
  }

  @media screen and (max-width: 650px) {
    text-align: center;

    h2 {
      width: max-content;
      position: relative;
      margin: auto;

      &::after {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .detaills {
      flex-direction: column;
      align-items: center;
      padding: 0 1rem;
    }

    figure {
      height: 200px;
      width: 200px;
      img {
        border-radius: 50%;
      }
    }
  }
`;

export default function About() {
  return (
    <AboutStyle id="about">
      <Wrapper>
        <div className="title">
          <h2>SOBRE MI</h2>
          <p>INFORMACION SOBRE MI</p>
        </div>
        <div className="detaills">
          <figure>
            <img src={imageUrl} alt="foto" />
          </figure>
          <div className="informacion">
            <h4>Soy Programador Web</h4>
            <p>
              Especializado en el <strong>Frontend</strong> -{" "}
              <strong className="js">JavaScript 💛</strong>
            </p>
            <p>
              Soy un apasionado por la tecnología y la programación 💻, me gusta
              colaborar en proyectos open source 💙.Especialista en el
              desarrollo Frontend desde el 2018.
            </p>
            <div className="cargo">
              <div>
                <strong>Freelance:</strong> <span>Dispinible</span>
              </div>
              <div>
                <strong>Nacionalidad:</strong> <span>🇵🇪 Peruano</span>
              </div>
            </div>
            <div>
              <Social></Social>
            </div>
          </div>
        </div>
      </Wrapper>
    </AboutStyle>
  );
}
