import React, { Fragment } from 'react';
import Heads from '../head/Heads';
import Header from '../header/Header';
import { Footer } from '../footer/Footer';

export default function Layout({ children }) {
  return (
    <Fragment>
      <Heads></Heads>
      <Header></Header>
      <div>{children}</div>
      <Footer />
    </Fragment>
  );
}
