import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  padding: 0 10px;
  flex: 1 1 0;
`;

export const ListItem = styled.li`
  background-color: #f9f6f4;
  border-radius: 8px;
  margin: 20px 0;

  :first-child {
    margin: 0 0 20px 0;
  }

  :last-child {
    margin: 20px 0 0 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: #000000;

  :visited {
    color: initial;
  }
`;

export const Time = styled.time`
  font-size: 12px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
`;

export const Tag = styled.data`
  background-color: #e0e0e0;
  border-radius: 10px;
  padding: 5px 10px;
  display: inline-block;
`;
