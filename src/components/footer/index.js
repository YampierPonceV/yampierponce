import styled from "styled-components";

import Social from "../social";
import Wrapper from "../wrapper";

const FooterStyle = styled.footer`
  /* background: var(--tercerColot); */
  background: #03001e;
  text-align: center;

  padding: 20px 0;

  .footer-section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 850px) {
      flex-direction: column;
      padding: 2rem 1rem;
    }
  }

  h4,
  p {
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
        <div className="footer-section">
          <h4>Puedes comunicarme conmigo por mis redes sociales</h4>
          <Social />
        </div>
        <hr />
        <p>YampierPonce 2021 © Todos los izquierdos reservados</p>
      </Wrapper>
    </FooterStyle>
  );
}
