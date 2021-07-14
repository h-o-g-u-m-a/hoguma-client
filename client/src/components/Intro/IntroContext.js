import React from 'react';
import styled from 'styled-components';

const ContextStrong = styled.strong`
  font-family: 'yangjin';
  font-size: 1.8vw;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.4vw;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1.2vw;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1vw;
  }
`;
const IntroParagraph = styled.p`
  color: black;
  font-size: 1.1vw;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.6vw;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 0.4vw;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 0.2vw;
  }
`;
function IntroContext() {
  return (
    <div>
      <IntroParagraph>
        <ContextStrong>‘음~ 맛있다~’</ContextStrong> 라는 말을 들으면
        <ContextStrong>‘마트다녀오셨어요~?’</ContextStrong> 라고
        상황극을시작하시나요 ? <br />
        호박고구마를 먹을때
        <ContextStrong>‘호! 박! 고! 구! 마! 호박 고구마!!!’</ContextStrong> 라고
        소리친적이 있으신가요 ? <br />
        <ContextStrong>‘문의주세요’</ContextStrong> 라는 말에
        <ContextStrong>‘문희는 포도가 먹고시푼데에~’</ContextStrong> 를 대답하고
        싶었던 적이 있나요? <br />
        그럼 제대로 찾아오셨습니다.
        <br /> 방영 15주년을 맞이한 대한민국 레전드 시트콤 거침없이하이킥 <br />
        그 모든 것을 분석했습니다. <br />
        여러분들의 추억 상자를 열어보세요 !
      </IntroParagraph>
    </div>
  );
}

export default IntroContext;
