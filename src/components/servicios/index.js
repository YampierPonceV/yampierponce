import styled from "styled-components";
import Card from "../card";
import Wrapper from "../wrapper";
import { data } from "../../data/index";

const ServiciosStyle = styled.div`
  padding: var(--paddingSection);
  background: var(--colorSection);
  h2 {
    margin-top: 0;
    margin-bottom: var(--marginBottom);
    margin-right: auto;
    margin-left: auto;
    color: var(--colorSegundary);
    width: max-content;
    font-size: 35px;
    position: relative;

    &:after {
      content: "";
      display: block;
      width: 100px;
      height: 5px;
      background: var(--tercerColot);
      position: absolute;
      border-radius: 9999px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .containerCard {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: var(--gapCajas);
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
        <h2>SERVICIOS</h2>
        <div className="containerCard">
          {data.map(({ id, title, message, image }) => {
            return <Card title={title} message={message} image={image} />;
          })}
        </div>
      </Wrapper>
    </ServiciosStyle>
  );
}
