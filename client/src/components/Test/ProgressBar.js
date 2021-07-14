import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 20,
    margin: '0 1vw',
    marginButton: '2vh',
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#a16ef5',
  },
}))(LinearProgress);

const ProgressContainer = styled.div``;

function ProgressBar(props) {
  return (
    <ProgressContainer>
      <BorderLinearProgress
        variant="determinate"
        value={(props.qNumber / 10) * 100}
      />
    </ProgressContainer>
  );
}

export default ProgressBar;
