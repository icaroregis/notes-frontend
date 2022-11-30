import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;

  header {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    position: sticky;
    z-index: 1;
    top: 0;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  > main {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    position: relative;
    z-index: 0;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.ORANGE};
      border-radius: 20px;
      border: 3px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

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

      > button {
        margin-bottom: 30px;
      }
    }
  }
`;

export const Button = styled.button``;
