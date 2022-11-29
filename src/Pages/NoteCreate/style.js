import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;

  > main {
    display: flex;
    justify-content: center;
    padding-top: 30px;

    > form {
      max-width: 550px;
      width: 100%;

      > div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 36px;

        h1 {
          font-size: 34px;
          font-weight: 500;
        }

        button {
          background-color: transparent;
          border: none;

          a {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
          }
        }
      }
    }
  }
`;

export const Button = styled.button``;
