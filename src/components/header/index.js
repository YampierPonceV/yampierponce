import styled from "styled-components";
import IconTwitter from "../icons/twitter";
import Navigation from "../navigation";
import Wrapper from "../wrapper";
const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  backdrop-filter: blur(5px);
  z-index: 100;
  /* background-color: var(--colorPrimary); */

  .wrapper {
    display: flex;
    justify-content: space-between;
  }
  .contenedor-link-twitter {
    display: flex;
    align-items: center;

    a {
      color: var(--white);
      font-weight: bold;
    }
    a:active {
      transform: scale(0.9);
    }
  }

  @media screen and (max-width: 950px) {
    padding: 0 1rem;
  }
  @media screen and (max-width: 650px) {
    .wrapper {
      justify-content: center;
      padding: 12px 0;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="wrapper">
          <div className="contenedor-link-twitter">
            <IconTwitter fill="#CEE5D0" />
            <a
              href="https://www.twitter.com/yampierponcev"
              target="_blank"
              rel="noreferrer"
            >
              @YampierPonceV
            </a>
          </div>
          <Navigation />
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}
