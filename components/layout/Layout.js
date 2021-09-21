import React, { Fragment } from 'react';
import Heads from '../head/Heads';
import Header from '../header/Header';
import styled from 'styled-components';

const Container = styled.div``;

export default function Layout({ children }) {
  return (
    <Container >
      <Heads></Heads>
      <Header></Header>
      {children}
    </Container>
  );
}
