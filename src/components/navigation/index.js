import styled from "styled-components";

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: var(--gapCajas);

    a {
      text-decoration: none;
      font-weight: bold;
      color: var(--white);
      opacity: 0.5;
      transition: all 0.3s;
    }
    a.active {
      border-bottom: 2px solid;
      padding: 8px 0;
      opacity: 1;
      filter: drop-shadow(0 0 8px rgba(255, 255, 255, 1));
    }
  }
  @media screen and (max-width: 650px) {
    ul {
      display: none;
    }
  }
`;
export default function Navigation() {
  const handleClick = (e) => {
    const target = e.target;
    const links = document.querySelectorAll("nav ul a");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    target.classList.add("active");
  };
  return (
    <Nav>
      <ul>
        <li>
          <a href="#index" className="active" onClick={handleClick}>
            Inicio
          </a>
        </li>
        <li>
          <a href="#services" onClick={handleClick}>
            Servicios
          </a>
        </li>
        <li>
          <a href="#proyect" onClick={handleClick}>
            Proyectos
          </a>
        </li>
      </ul>
    </Nav>
  );
}
