import styled from "styled-components";

const CardSkillsStyle = styled.div`
  box-shadow: var(--boxShadow);
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 12px;
  border-radius: 10px;
  h4,
  p {
    margin: 0;
  }
  figure {
    margin: 0;
  }
`;

export default function SkillsCard({ name, description, avatar }) {
  return (
    <CardSkillsStyle>
      <figure>
        <img src={avatar} alt={name}></img>
      </figure>
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </CardSkillsStyle>
  );
}
