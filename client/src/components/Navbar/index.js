import React from 'react';
import { useDispatch } from 'react-redux';
import {
  testUserName,
  testSurveyNumber,
  testEmotionCount,
  testWordCount,
  testCheckedWord,
} from '../../actions';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <Nav>
      <Logo to="/">하이킥 완전정복</Logo>
      <Menu>
        <MenuLink to="/about">소개</MenuLink>
        <MenuLink to="/game">추억의 뽑기게임</MenuLink>
        <MenuLink
          to="/survey"
          activeStyle
          onClick={() => {
            dispatch(testUserName(''));
            dispatch(testWordCount(0));
            dispatch(testSurveyNumber(0));
            dispatch(testEmotionCount({ 기쁨: 0, 슬픔: 0, 분노: 0 }));
            dispatch(testCheckedWord([]));
          }}
        >
          나와 닮은 캐릭터
        </MenuLink>
        <MenuLink
          to="/overdose"
          activeStyle
          onClick={() => {
            dispatch(testUserName(''));
            dispatch(testWordCount(0));
            dispatch(testSurveyNumber(0));
            dispatch(testEmotionCount({ 기쁨: 0, 슬픔: 0, 분노: 0 }));
            dispatch(testCheckedWord([]));
          }}
        >
          하이킥 고사
        </MenuLink>
        <MenuLink to="/characters" activeStyle>
          인물관계도
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  border-bottom: solid lightgray 1px;
`;

const Logo = styled(Link)`
  padding: 1rem 0;
  color: #000;
  text-decoration: none;

  font-weight: 900;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    font-weight: 800;
    width: 100vw;
    font-size: 1rem;
    margin-left: 3vw;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #3f51b5;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1.5vh;
    justify-content: flex-end;
  }
`;
