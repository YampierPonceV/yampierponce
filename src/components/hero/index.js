import styled from "styled-components";

const imageUrl = "https://avatars.githubusercontent.com/u/83417061?v=4";

const HeroStyle = styled.div`
  min-height: calc(100vh);
  background: linear-gradient(300deg, #b36bd2, #248ad2);
  background-size: 120% 120%;
  animation: gradient-animation 12s ease infinite;
  position: relative;
  margin-top: -57px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    padding: 0 1rem;
  }
  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  h1 {
    margin-top: 3rem;
    font-size: 50px;

    @media screen and (max-width: 1000px) {
      margin-top: 12rem;
    }
    @media screen and (max-width: 900px) {
      font-size: 34px;
      text-align: center;
    }
    @media screen and (max-width: 600px) {
      font-size: 20px;
    }
  }

  .avatar {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0;
    box-shadow: -50px -20px 40px rgba(227, 135, 255, 0.25),
      0 50px 40px rgba(255, 219, 57, 0.3),
      50px -20px 40px rgba(118, 255, 255, 0.3),
      0 0 2pt 4pt rgba(255, 255, 255, 0.6);

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .wrapper-hero {
    color: white;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 57px;

    .skill {
      position: absolute;
      font-size: 18px;
      padding: 0.6rem 1rem;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.3);
      opacity: 0.8;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.123);
    }

    .name {
      left: -15rem;
      top: 50%;
      transform: translateY(-50%);

      animation: name 1.5s linear alternate infinite;

      @keyframes name {
        to {
          top: 45%;
        }
      }
    }
    .cargo {
      top: 0;
      right: -20rem;
      animation: cargo 1.5s linear alternate infinite;
      animation-delay: 0.9s;

      @keyframes cargo {
        to {
          top: 5%;
        }
      }
    }
    .hobby {
      bottom: 4rem;
      right: -13rem;
      animation: hobby 1.5s linear alternate infinite;
      animation-delay: 0.6s;

      @keyframes hobby {
        to {
          bottom: 10%;
        }
      }
    }

    .mensaje {
      display: block;
    }

    @media screen and (max-width: 1000px) {
      .cargo {
        display: none;
      }
      .hobby {
        display: none;
      }
      .name {
        bottom: -9rem;
        top: unset;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        animation: none;
        h3 {
          margin: 0;
        }
        text-align: center;
      }
      .mensaje {
        display: inline-block;
      }
    }
  }
`;

export default function Hero() {
  return (
    <HeroStyle id="index">
      <div className="wrapper-hero">
        <figure className="avatar">
          <img src={imageUrl} alt="avatar profile"></img>
        </figure>
        <section className="skill name">
          <h3>
            <span className="mensaje">👋 Hola soy </span>
            <h3>Yampier Ponce</h3>
          </h3>
        </section>
        <section className="skill cargo">
          <h3>Frontend Developer 💻</h3>
        </section>
        <section className="skill hobby">
          <h3>Deportista 🏃</h3>
        </section>
      </div>
      <h1>Programador Frontend - 🇵🇪</h1>
    </HeroStyle>
  );
}
