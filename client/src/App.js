import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/Intro';
import TestMain from './pages/Test/TestMain';
import TestSurvey from './pages/Test/TestSurvey';
import TestRoading from './pages/Test/TestRoading';
import TestResult from './pages/Test/TestResult';
import TestOverdoseMain from './pages/Test/TestOverdoseMain';
import TestWord from './pages/Test/TestWord';
import TestOverdose from './pages/Test/TestOverdose';
import TestOverdoseResult from './pages/Test/TestOverdoseResult';
import GameMain from './pages/Game/GameMain';
import GameResult from './pages/Game/GameResult';
import GameAll from './pages/Game/GameAll';
import Characters from './pages/Characters';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/survey" component={TestMain} />
        <Route exact path="/survey/process" component={TestSurvey} />
        <Route exact path="/survey/word" component={TestWord} />
        <Route exact path="/survey/result" component={TestResult} />
        <Route exact path="/overdose" component={TestOverdoseMain} />
        <Route exact path="/overdose/process" component={TestOverdose} />
        <Route exact path="/overdose/result" component={TestOverdoseResult} />
        <Route exact path="/roading" component={TestRoading} />
        <Route exact path="/game" component={GameMain} />
        <Route exact path="/game/result" component={GameResult} />
        <Route exact path="/game/all" component={GameAll} />
        <Route path="/characters" component={Characters} />
      </Switch>
    </Router>
  );
}

export default App;
