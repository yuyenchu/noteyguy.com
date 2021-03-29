import React from 'react';
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import SearchAppBar from '../components/SearchAppBar'
import DisplayBloc from '../components/DisplayBloc'


const useStyles = makeStyles((theme) =>({
  mainBloc:{
    width: "700px",
    height: "840px",
    margin: "5px",
  },

  sideBloc:{
    width: "800px",
    height: "280px",
  },

  tempPromoBlock:{
    width: "1425px",
    height: "600px",
    background: "red",
    margin:'0px',
  },

  infoBloc:{
    width: "1425px",
    height: "200px",
    background: "red",
    margin: "0px",
    bottom:'0px,'
  },

}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>The Notey Guy</title>
      </Head>
      
      <div id="body">

        <SearchAppBar/>
        <div className={classes.tempPromoBlock}><h1><center>Promotions & Introduction of the website</center></h1></div>

        <DisplayBloc/>

        <div className={classes.infoBloc}><h1>info&contact</h1></div>
      </div>
    </>
  );
}