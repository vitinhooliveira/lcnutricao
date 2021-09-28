import { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import GlobalsStyle from '../components/GlobalStyle';
import { SendWhats } from '../components/button/SendWhats';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  t1: {
    color: '#000',
    fontSize: 56,
    height: 80,
    width: '60rem',
    padding: '0 0 0 0',
    position: 'relative',
    textAlign: 'center',
    left: '24%',
    top: '45%',
  },
  t2: {
    color: '#000',
    fontSize: 56,
    height: 80,
    width: '60rem',
    padding: '0 0 0 0',
    position: 'relative',
    textAlign: 'center',
    left: '24%',
    top: '45%',
  },
  down: {
    backgroundImage: "url('/image/background.webp')",
    width: '100%',
    height: '100vh',
    position: 'relative',
    top: '-5px',
  },
});

function Home() {
  const classes = useStyles();
  function openWhats() {
    window.open(
      'https://api.whatsapp.com/send?phone=5511991780100&text=Ol%C3%A1aaaa'
    );
  }
  return (
    <Fragment>
      <GlobalsStyle />
      <Layout>
        <div className={classes.down}>
          <SendWhats openPage={openWhats} />
          <Typography variant='h3' className={classes.t1}>
            Seja bem vindo
          </Typography>
          <Typography variant='h3' className={classes.t2}>
            a site de nutrição da Laura Costa
          </Typography>
        </div>
      </Layout>
    </Fragment>
  );
}

export default Home;
