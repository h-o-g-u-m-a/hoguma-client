import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import IntroTtile from '../../components/Intro/IntroTtile';
import IntroImage from '../../components/Intro/IntroImage';
import IntroContext from '../../components/Intro/IntroContext';
import IntroChat from '../../components/Intro/IntroChat';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '0 20vw',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '3px solid black',
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <IntroTtile />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <IntroImage />
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <IntroContext />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <IntroChat />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
