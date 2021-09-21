import { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import GlobalsStyle from '../components/GlobalStyle';
import { BackgroundImage } from '../components/img/BackgorundImage';

function Home() {
  return (
    <Fragment>
      <GlobalsStyle />
      <Layout>
        <BackgroundImage />
      </Layout>
    </Fragment>
  );
}

export default Home;
