import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;

  > form {
    order: 2;
  }

  > div {
    order: 1;
  }
`;
