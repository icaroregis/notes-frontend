import styled from 'styled-components';

// Sinal de maior > : significa filho-direto do elemento. Seleciona todos os filhos-diretos do elemento. Dois pontos :: : significa pseudo-elemento (um elemento-filho). Sinal de + : seleciona o elemento imediatamente após

export const Header = styled.header`
  height: 105px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
  }
`;
