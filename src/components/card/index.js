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
  /* box-shadow: var(--boxShadow); */
  background: #1e1535;

  h4 {
    font-size: 30px;
    margin-bottom: 0.2rem;
  }
  p {
    font-size: 18px;
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
