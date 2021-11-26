import styled from "styled-components";

import Social from "../social";
import Wrapper from "../wrapper";

const FooterStyle = styled.footer`
  background: var(--tercerColot);
  text-align: center;

  padding: 20px 0;

  h4,
  p {
    margin: 0;
  }

  h4,
  p {
    margin-bottom: 12px;
    color: #ccc;
  }

  p {
  }

  hr {
    color: #ccc;
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: 1rem 0;
  }

  @media screen and (max-width: 650px) {
    padding-bottom: 100px;
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <Wrapper>
        <h4>Puedes comunicarme conmigo por mis redes sociales</h4>
        <Social />
        <hr />
        <p>YampierPonce 2021 © Todos los izquierdos reservados</p>
      </Wrapper>
    </FooterStyle>
  );
}
