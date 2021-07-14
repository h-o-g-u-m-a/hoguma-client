import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

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
const ContentContainer = styled.div`
  padding-top: 40vh;
`;
const LoadingMention = styled.h3``;

function TestRoading() {
  return (
    <Container>
      <ContentContainer>
        <CircularProgress />
        <LoadingMention>분석중 입니다...</LoadingMention>
      </ContentContainer>
    </Container>
  );
}

export default TestRoading;
