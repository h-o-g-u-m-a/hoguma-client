import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  testEmotionCount,
  testCheckedWord,
  testWordCount,
} from '../../actions';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const WordDiv = styled.div`
  align-items: center;
  border: 5px solid black;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;
const WordButton = styled.button`
  width: 100%;
  font-size: 1vw;
  background-color: #858585;
  background-size: auto;
  &:active {
    background-color: yellow;
  }
`;
const WordButtonText = styled.p`
  font-size: 1.2vw;
  font-weight: bold;
  color: white;
  margin: 0;
`;
function WordItems(props) {
  const emotionCount = useSelector((state) => state.test.emotionCount);
  const wordCount = useSelector((state) => state.test.wordCount);
  const checkedWords = useSelector((state) => state.test.checkedWord);
  const dispatch = useDispatch();

  function FormRow(props) {
    // const checkedWord = useSelector((state) => state.test.checkedWord);

    // const handleCheckedWord = (name) => {
    //   if (checkedWord) {
    //     for (var i = 0; i < checkedWord.length(); i++) {
    //       if (checkedWord[i].label === name) {
    //         return false;
    //       }
    //     }
    //   }
    //   return true;
    // };

    const isCheckedWord = (checkedWords, wordID) => {
      var flag = true;
      for (var i = 0; i < checkedWords.length; i++) {
        if (checkedWords[i][0] === wordID) {
          flag = false;
          break;
        }
      }
      return flag;
    };

    const wordList = props.words.map((word, index) => (
      <Grid key={index} item xs={3}>
        <WordDiv
          key={index}
          style={{
            display: isCheckedWord(checkedWords, word[0]) ? true : 'none',
          }}
        >
          <WordButton
            disabled={wordCount === 8 ? true : false}
            key={index}
            id={word[0]}
            value={word[1]}
            name={word[2]}
            onClick={(event) => {
              // checkedWords.push([word[0], word[1], word[2]]);
              var newCheckedWords = [];
              for (var i = 0; i < checkedWords.length; i++) {
                newCheckedWords.push(checkedWords[i]);
              }
              newCheckedWords.push([word[0], word[1], word[2]]);

              dispatch(testCheckedWord(newCheckedWords));

              // console.log(word[0], word[1], word[2]);
              emotionCount[event.target.value] += 1;
              dispatch(testEmotionCount(emotionCount));
              dispatch(testWordCount(wordCount + 1));
              // console.log(emotionCount);
            }}
          >
            <WordButtonText>{word[2]}</WordButtonText>
          </WordButton>
        </WordDiv>
      </Grid>
    ));
    return <React.Fragment>{wordList}</React.Fragment>;
  }

  return (
    <div>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow words={props.words} qNumber={props.qNumber} />
        </Grid>
      </Grid>
    </div>
  );
}

export default WordItems;
