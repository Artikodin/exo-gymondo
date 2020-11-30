import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Body } from './style';
import Logo from './Logo';

interface Props {
  children: JSX.Element;
}

/**
 *
 * Layout
 * Render a layout with an header bar
 *
 * @param {jsx} children - take a react component as a children and render it into the layout
 *
 * @return {jsx}
 *
 */
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header>
        <Link to="/">
          <Logo />
        </Link>
      </Header>
      <Body>{children}</Body>
    </Container>
  );
};

export default Layout;
