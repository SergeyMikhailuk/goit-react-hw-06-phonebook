import styled from '@emotion/styled';

export const List = styled.ul`
  padding-left: 10px;
  span {
    margin-right: 8px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  button {
    margin-left: auto;
  }

  :not(:last-of-type) {
    margin-bottom: 8px;
  }
`;
