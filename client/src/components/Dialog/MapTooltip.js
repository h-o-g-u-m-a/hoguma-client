import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <BsFillQuestionCircleFill />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">인물관계도 도움말</DialogTitle>
        <DialogContent>
          <DialogContentText>
            - Data Analysis 스위치로 두가지 버전의 인물관계도를 즐겨보세요.
            <br />
            <br /> - 사진을 클릭하시면 각 인물의 상세 정보를 확인할 수 있습니다.
            <br />
            <br /> - 간선을 클릭하시면 각 인물의 관계 정보나 함께 등장한 씬의
            횟수를 <br /> &nbsp; 알 수 있습니다.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
