import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-top: 20px;
    }
  }
`;

