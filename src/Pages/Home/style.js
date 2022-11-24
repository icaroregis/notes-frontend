import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  section:first-child {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    section:last-child {
      width: 100%;
      position: absolute;
      bottom: 0;
      margin-bottom: 0;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }

  > section:last-child {
    overflow-y: scroll;

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

    > div:first-child {
      height: 287px;
      position: sticky;
      top: 0;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      z-index: 10;
    }

    > div:last-child {
      z-index: 0;
    }
  }
`;

export const NewNote = styled.button`
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  font-weight: 400;
`;

export const Brand = styled.div`
  height: 105px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Menu = styled.ul`
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  li {
    list-style: none;

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;

export const Search = styled.div`
  margin-top: 64px;
  padding: 0 64px;
  width: 100%;
`;

export const Content = styled.div`
  padding: 0 64px;
`;
