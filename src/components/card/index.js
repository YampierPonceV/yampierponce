import styled from "styled-components";

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  box-shadow: var(--boxShadow);

  &:hover {
    background-color: var(--tercerColot);
  }
`;

export default function Card({ title, message, image }) {
  return (
    <CardStyle>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{message}</p>
    </CardStyle>
  );
}
