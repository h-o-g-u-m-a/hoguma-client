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
  align-items: center; /* 세로에서 가운데에 요소를 배치하겠다 */
  padding-top: 20vh;
`;
// 페이지 레이아웃 컨테이너
const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  text-align: center;
  background-color: white;
  align-items: center; /* 세로에서 가운데에 요소를 배치하겠다 */
  justify-content: center; /*가로에서 가운데에 요소(자식요소)를 배치하겠다*/
  margin-left: 20vw;
  margin-right: 20vw;
`;

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function TestMain(props) {
  const userName = useSelector((state) => state.test.name);
  const history = useHistory();
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleChange = (e) => {
    dispatch(testUserName(e.target.value));
  };

  return (
    <Container>
      <ContentContainer>
        <TestTitle>나와 가장 닮은 캐릭터는 ?</TestTitle>
        <TestParagraph>
          여러분들이 사용하는 일상언어에는 모두 감정이 포함되어 있습니다.
          <br />
          본인의 감정언어와 가장 비슷한 하이킥 캐릭터가 궁금하시다면
          <br />
          아래 테스트를 진행해보세요.
        </TestParagraph>
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
            history.push('/survey/process');
            //dispatch(testPage(2));
          }}
        >
          검사진행
        </Button>
      </ContentContainer>
    </Container>
  );
}

export default TestMain;
