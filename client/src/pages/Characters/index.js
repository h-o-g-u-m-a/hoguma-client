import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { characterClose } from '../../actions';
import styled from 'styled-components';

import MapOrigin from '../../components/Map/MapOrigin';
import MapDA from '../../components/Map/MapDA';
import MapToolTip from '../../components/Dialog/MapTooltip';
import Character from '../../components/Character';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { MdClose } from 'react-icons/md';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70vw;
  margin: auto;

  @media screen and (max-width: 768px) {
    flex-direction: 'column';
  }
`;

export default function Characters() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.character.open);
  const [isDA, setIsDA] = useState(false);

  function handleChange() {
    setIsDA(!isDA);
  }

  const handleClose = () => {
    dispatch(characterClose());
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '70vw',
        height: '90vh',
        margin: 'auto',
      }}
    >
      <Container>
        {!isDA && <p>우리가 익히 알고 있는 하이킥의 인물 관계입니다.</p>}
        {isDA && (
          <p>
            대본 데이터 분석 결과 함께 있는 씬의 횟수로 집계된 하이킥의 인물
            관계입니다.
          </p>
        )}
        <div style={{ display: 'flex', justifySelf: 'right' }}>
          <FormControlLabel
            control={
              <Switch
                checked={isDA}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Data Analysis"
          />
          <MapToolTip />
        </div>
      </Container>
      <>
        {!isDA && <MapOrigin />}
        {isDA && <MapDA />}

        {open && (
          <div>
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
              <AppBar color="default">
                <Toolbar>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <MdClose />
                  </IconButton>
                  <Typography variant="h6">캐릭터 상세 정보</Typography>
                </Toolbar>
              </AppBar>
              <Character />
            </Dialog>
          </div>
        )}
      </>
    </div>
  );
}
