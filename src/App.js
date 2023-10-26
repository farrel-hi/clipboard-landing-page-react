import React from 'react';
import './App.css';

import BigCenteredTitleDescription from './components/BigCenteredTitleDescription';
import SmallTitleDescription from './components/SmallLeftTitleDescription';
import IconCenteredTitleDescription from './components/IconCenteredTitleDescription';

function App() {
  return (
    <div className="App">

      <BigCenteredTitleDescription/>
      <SmallTitleDescription/>
      <IconCenteredTitleDescription/>
    </div>
  );
}

export default App;
