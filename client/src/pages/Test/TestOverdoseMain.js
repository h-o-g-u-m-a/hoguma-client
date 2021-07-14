import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { testUserName } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

// 제목 컴포넌트
const TestTitle = styled.h1`
  font-size: 3vw;
  margin-top: 0;
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;
// 제목 설명 컴포넌트
const TestParagraph = styled.p`
  font-size: 1.5vw;
`;
// 사용자 정보 & 버튼 컨테이너
const FormContainer = styled.div`
  padding-top: 5vh;
  padding-bottom: 5vh;
`;
// 콘텐츠 컨테이너
const ContentContainer = styled.div`
  align-items: center;
  padding-top: 20vh;
`;
// 페이지 레이아웃 컨테이너
const Container = styled.div`
  display: flex;
  text-align: center;
  background-color: white;
  align-items: center;
  justify-content: center;

  margin-left: 20vw;
  margin-right: 20vw;
`;

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function TestOverdoseMain(props) {
  const userName = useSelector((state) => state.test.name);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const handleChange = (e) => {
    dispatch(testUserName(e.target.value));
  };

  return (
    <Container>
      <ContentContainer>
        <TestTitle>2021년도 제 1회 하이킥 고사</TestTitle>

        <TestParagraph>하이킥 중독성 영역</TestParagraph>

        <FormContainer>
          <form
            onSubmit={() => console.log('테스트 시작.')}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="이름을 입력해주세요."
              name="name"
              value={userName}
              onChange={handleChange}
            />
          </form>
        </FormContainer>
        <Button
          className={classes.button}
          disabled={!userName}
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => {
            history.push('/overdose/process');
          }}
        >
          응시하기
        </Button>
      </ContentContainer>
    </Container>
  );
}

export default TestOverdoseMain;
