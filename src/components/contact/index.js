import styled from "styled-components";
import Wrapper from "../wrapper";
import ContactImage from "../../assets/contact.svg";

const ContactSyled = styled.div`
  background: #03001e;
  .container-contact {
    /* border: 1px solid red; */

    padding: 3rem 0;
    text-align: center;

    h1 {
      margin: 0;
    }

    a {
      text-decoration: none;
      color: white;
    }

    img {
      width: 100%;
    }
  }
`;

const Contact = () => {
  return (
    <ContactSyled>
      <Wrapper>
        <div className="container-contact">
          <a href="mailto:developer.yampier@gmail.com">
            <h1>¡Hablame y empecemos a trabajar juntos!</h1>
            <img src={ContactImage} alt="imagen del contacto"></img>
          </a>
        </div>
      </Wrapper>
    </ContactSyled>
  );
};
export default Contact;
