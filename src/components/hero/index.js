import styled from "styled-components";

let urlimage =
  "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg";

const HeroStyle = styled.div`
  min-height: calc(100vh - 50px);
  background-image: url(${urlimage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  .wrapper-hero {
    color: white;
    position: relative;
    z-index: 2;
    text-align: center;
  }

  h1 {
    font-size: 65px;
    font-weight: 700;

    span {
      color: var(--title);
    }
  }
  p {
    font-size: 20px;
    font-weight: 700;
  }
  p.especialidad {
    font-weight: 100;
  }
  h1,
  p {
    margin: 0;
  }

  a {
    display: inline-block;
    padding: 10px 33px;
    background: var(--colorPrimary);
    color: white;
    text-decoration: none;
    border-radius: 9999px;
    font-weight: 700;
    margin-top: 25px;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 0px 0px 10px var(--colorPrimary);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

export default function Hero() {
  return (
    <HeroStyle id="index">
      <div className="wrapper-hero">
        <p>Hola mi nombre es</p>
        <h1>
          YAMPIER <span>PONCE</span>
        </h1>
        <p className="especialidad">Frontend Developer</p>
        <a href="mailto:yampiponce60@gmail.com">Contactame</a>
      </div>
    </HeroStyle>
  );
}
