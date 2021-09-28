import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  footer: {
    color: '#000',
    background: '#f3f3f3',
    fontSize: 20,
    position: 'relative',
    textAlign: 'center',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    top: '-5px',
  },
});
export function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <p>©2021 Laura Costa Nutricionista - Desenvolvido por Victor Augusto.</p>
    </div>
  );
}
