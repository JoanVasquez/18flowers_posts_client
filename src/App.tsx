import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grid: {
    with: "100%",
    margin: "0px"
  }
}))

function App() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.grid}>
      test
    </Grid>
  );
}

export default App;
