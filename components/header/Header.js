import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Contato } from '../button/Contato';
import { Logo } from '../img/Logo';
import Nav from '../nav/Nav';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #f3f3f3;
  display: inline-flex;
  width: 100%;
  height: 74px;
  /* position: 'relative'; */
  /* top: '10px'; */
`;

export default function Header() {
  return (
    <Div>
      <Logo />
      <Nav />
      <Contato />
    </Div>
  );
}
