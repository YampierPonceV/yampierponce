import styled from "styled-components";
import Card from "../card";
import Wrapper from "../wrapper";
import { data } from "../../data/index";
import BannerImage from "../../assets/banner.png";

const ServiciosStyle = styled.div`
  padding: var(--paddingSection);
  /* background: var(--colorSection); */
  background: #03001e;
  .grid-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "title title descrip";
    place-items: center;

    @media screen and (max-width: 1100px) {
      display: flex;
      flex-direction: column;

      h2,
      h4 {
        padding: 0 1rem;
      }
    }

    .detaills-servicion {
      grid-area: title;
      h2 {
        font-size: 45px;
      }
      h4 {
        font-size: 34px;
      }
      img {
        width: 100%;
        filter: drop-shadow(0 0 3px);
      }
    }
  }

  .containerCard {
    display: flex;
    grid-area: descrip;
    flex-direction: column;
    gap: var(--gapCajas);
  }

  @media screen and (max-width: 950px) {
    .containerCard {
      padding: 0 1rem;
    }
  }

  @media screen and (max-width: 850px) {
    .containerCard {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 650px) {
    .containerCard {
      grid-template-columns: 1fr;
    }
  }
`;

export default function Servicios() {
  return (
    <ServiciosStyle id="services">
      <Wrapper>
        <div className="grid-section">
          <div className="detaills-servicion">
            <h2>Mis Servicios</h2>
            <h4>El aprendizaje constante te hace mejor profesional</h4>
            <img src={BannerImage} alt="imagen de logos tecnologicos"></img>
          </div>

          <div className="containerCard">
            {data.map(({ id, title, message, image }) => {
              return <Card title={title} message={message} image={image} />;
            })}
          </div>
        </div>
      </Wrapper>
    </ServiciosStyle>
  );
}
