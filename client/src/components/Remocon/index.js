import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { BsCardChecklist, BsFillPersonCheckFill } from 'react-icons/bs';
import { IoGameControllerOutline } from 'react-icons/io5';
import { GiOrganigram } from 'react-icons/gi';
import { AiOutlineHome } from 'react-icons/ai';

import { useDispatch } from 'react-redux';
import { home } from '../../actions';

export default function SimpleBottomNavigation() {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        key={0}
        label="홈"
        value="home"
        onClick={() => dispatch(home(0))}
        icon={<AiOutlineHome />}
      />
      <BottomNavigationAction
        key={1}
        label="게임"
        value="game"
        onClick={() => dispatch(home(1))}
        icon={<IoGameControllerOutline />}
      />
      <BottomNavigationAction
        key={2}
        label="캐릭터"
        value="character"
        onClick={() => dispatch(home(2))}
        icon={<BsFillPersonCheckFill />}
      />

      <BottomNavigationAction
        key={3}
        label="고사"
        value="test"
        onClick={() => dispatch(home(3))}
        icon={<BsCardChecklist />}
      />

      <BottomNavigationAction
        key={4}
        label="관계도"
        value="connection"
        onClick={() => dispatch(home(4))}
        icon={<GiOrganigram />}
      />
    </BottomNavigation>
  );
}
