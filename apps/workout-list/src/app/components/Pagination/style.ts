import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledPagination = styled.div`
  text-align: center;
  padding: 5px 0;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const PaginationItem = styled(Link)`
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  text-decoration: none;

  :last-of-type {
    margin: 0 0 0 5px;
  }
  :first-of-type {
    margin: 0 5px 0 0;
  }

  :visited {
    color: initial;
  }
`;
