import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  button: {
    background:
      'linear-gradient(45deg, var(--background-start) 100%, var(--background-end) 100%)',
    borderRadius: 6,
    border: 0,
    color: '#fff',
    height: 52,
    width: 218,
    padding: '0 0 0 0',
    position: 'relative',
    left: '21%',
    top: '72%',
  },
});

const blue = {
  '--background-start': '#18A0FB',
  '--background-end': '#18A0FB',
};

export function SendWhats({ openPage }) {
  const classes = useStyles();

  return (
    <Button className={classes.button} style={blue} onClick={openPage}>
      Me mande um whats
    </Button>
  );
}
