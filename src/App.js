import React from 'react';
import './App.css';
import data from "./text-data/text-data.json";

import BigCenteredTitleDescription from './components/BigCenteredTitleDescription';
import SmallTitleDescription from './components/SmallLeftTitleDescription';
import IconCenteredTitleDescription from './components/IconCenteredTitleDescription';
import Footer from './components/Footer';
import DownloadButtons from './components/DownloadButtons';

//Image Variables
import icon_blacklist from "./images/icon-blacklist.svg";

function App() {
  return (
    <div className="App font_display">
      <DownloadButtons />
      <BigCenteredTitleDescription
        title={data.intro.title}
        desc={data.intro.description}
      />
      <SmallTitleDescription
        title={data.quick_search.title}
        desc={data.quick_search.description}
      />
      <IconCenteredTitleDescription
        icon={icon_blacklist}
        title={data.create_blacklists.title}
        desc={data.create_blacklists.description}
      />
      <Footer/>
    </div>
  );
}

export default App;
