import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  titleRec: {
    width:'500px',
    height:'100px',
    border:'1px solid white',
    backgroundColor:'white',
  },

});

export default function DisplayBloc() {
  const classes = useStyles();

  return (
    <>
      <img src='/public/TheNoteyGuyIcon.png' height='100' width='100' alt='qaq'></img>
      <p className={classes.titleRec}>hello</p>
    </>
  );
}