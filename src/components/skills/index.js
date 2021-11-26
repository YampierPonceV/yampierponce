import styled from "styled-components";
import { skills } from "../../data/skills";
import SkillsCard from "../card-skills";
import Wrapper from "../wrapper";

const SkillsStyle = styled.div`
  padding: var(--paddingSection);
  h2 {
    margin: 0;
    margin-bottom: var(--marginBottom);
    width: max-content;
    color: var(--colorSegundary);
    font-size: 35px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

    &::after {
      content: "";
      display: block;
      width: 100px;
      height: 5px;
      background: var(--colorPrimary);
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 9999px;
    }
  }

  .container-skills {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: var(--gapCajas);
  }

  @media screen and (max-width: 950px) {
    .container-skills {
      padding: 0 1rem;
    }
  }
  @media screen and (max-width: 850px) {
    .container-skills {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 650px) {
    .container-skills {
      grid-template-columns: 1fr;
    }
  }
`;

export default function Skills() {
  return (
    <SkillsStyle>
      <Wrapper>
        <h2 id="skill">HABILIDADES</h2>
        <div className="container-skills">
          {skills.map(({ id, name, description, avatar }) => {
            return (
              <SkillsCard
                name={name}
                description={description}
                avatar={avatar}
              />
            );
          })}
        </div>
      </Wrapper>
    </SkillsStyle>
  );
}
