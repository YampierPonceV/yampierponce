import styled from "styled-components";

import GithubLogo from "../icons/github";
import LinkedinLogo from "../icons/linkedin";
import IconTwitter from "../icons/twitter";

const SocialStyled = styled.div`
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    background: var(--colorPrimary);
    margin-right: 10px;
    border-radius: 50%;
  }
`;

export default function Social() {
  return (
    <SocialStyled>
      <a
        href="https://www.gitgub.com/yampierponcev"
        target="_blank"
        rel="noreferrer"
      >
        <GithubLogo fill="#cccccc"></GithubLogo>
      </a>
      <a
        href="https://www.linkedin.com/in/yampierponcev"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinLogo fill="#cccccc"></LinkedinLogo>
      </a>
      <a
        href="https://www.twitter.com/yampierponcev"
        target="_blank"
        rel="noreferrer"
      >
        <IconTwitter fill="#cccccc"></IconTwitter>
      </a>
    </SocialStyled>
  );
}
