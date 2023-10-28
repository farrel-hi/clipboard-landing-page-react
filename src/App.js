import React from 'react';
import './App.css';
import data from "./text-data/text-data.json";
import logo from "./images/logo.svg";
// import mobileBg from "./images/bg-header-mobile.png";


import BigCenteredTitleDescription from './components/BigCenteredTitleDescription';
import SmallTitleDescription from './components/SmallLeftTitleDescription';
import IconCenteredTitleDescription from './components/IconCenteredTitleDescription';
import Footer from './components/Footer';
import DownloadButtons from './components/DownloadButtons';

//Image Variables
import icon_blacklist from "./images/icon-blacklist.svg";

function App() {
  return (
    <div className="App font-display">
      <div className="absolute top-0 left-0 -z-10 min-w-full h-1/2 bg-mobile-bg bg-no-repeat bg-cover">
      </div>


      <div className="flex justify-center py-5 mt-20">
        <img src={logo} className="h-30" alt="logo" />
      </div>


      <BigCenteredTitleDescription
        title={data.intro.title}
        desc={data.intro.description}
      />
      <DownloadButtons />

      <SmallTitleDescription
        title={data.quick_search.title}
        desc={data.quick_search.description}
      />
      <IconCenteredTitleDescription
        icon={icon_blacklist}
        title={data.create_blacklists.title}
        desc={data.create_blacklists.description}
      />
      <Footer />
    </div>
  );
}

export default App;
