import styled from 'styled-components';

export const TextButton = styled.button`
  background-color: transparent;
  color: ${({ theme, isActive }) => (isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100)};
  border: none;
  font-size: 16px;
`;
