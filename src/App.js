import React from 'react';
import './App.css';
import data from "./text-data/text-data.json";
import logo from "./images/logo.svg";

import BigCenteredTitleDescription from './components/BigCenteredTitleDescription';
import SmallLeftTitleDescription from './components/SmallLeftTitleDescription';
import IconCenteredTitleDescription from './components/IconCenteredTitleDescription';
import Footer from './components/Footer';
import DownloadButtons from './components/DownloadButtons';

//Image Variables
import icon_blacklist from "./images/icon-blacklist.svg";
import icon_text from "./images/icon-text.svg";
import icon_preview from "./images/icon-preview.svg";
import computer from "./images/image-computer.png";
import devices from "./images/image-devices.png";
import partner_google from "./images/logo-google.png";
import partner_ibm from "./images/logo-ibm.png";
import partner_hp from "./images/logo-hp.png";
import partner_vector from "./images/logo-vector-graphics.png";

function App() {
  return (
    <div className="App font-display">
      {/* Header Background */}
      <div className="absolute top-0 left-0 -z-10 min-w-full h-1/2 xl:bg-desktop-bg bg-mobile-bg bg-no-repeat bg-cover">
      </div>

      {/* Section One: Intro */}
      <section className='mb-20 flex-column'>
        {/* Logo */}
        <div className="flex justify-center py-5 mt-20">
          <img src={logo} className="h-30" alt="logo" />
        </div>

        <BigCenteredTitleDescription
          title={data.intro.title}
          desc={data.intro.description}
        />

        <DownloadButtons />
      </section>


      {/* Section Two: Tracking Feature */}
      <BigCenteredTitleDescription
        title={data.feature_tracking.title}
        desc={data.feature_tracking.description}
      />
      <section className='flex-row justify-center items-center w-full mb-20 xl:flex xl:items-start'>
        <img src={computer} alt='computer' className='computer px-10 xl:relative xl:-left-40 xl:px-0 xl:object-fill' />
        <aside className='xl:mt-20'>
          <SmallLeftTitleDescription
            title={data.quick_search.title}
            desc={data.quick_search.description}
          />
          <SmallLeftTitleDescription
            title={data.icloud_sync.title}
            desc={data.icloud_sync.description}
          />
          <SmallLeftTitleDescription
            title={data.complete_history.title}
            desc={data.complete_history.description}
          />
        </aside>

      </section>


      {/* Section Three: Accessibility Feature */}
      <BigCenteredTitleDescription
        title={data.feature_accessibility.title}
        desc={data.feature_accessibility.description}
      />
      <section className='flex-column justify-center items-center w-full mb-20'>
        <img src={devices} alt='computer' className='px-5 xl:mx-auto' />
        <BigCenteredTitleDescription
          title={data.feature_supercharge.title}
          desc={data.feature_supercharge.description}
        />
        <div className='xl:flex xl:px-60 [&>*]:xl:w-2/3'>
          <IconCenteredTitleDescription
            icon={icon_blacklist}
            title={data.create_blacklists.title}
            desc={data.create_blacklists.description}
          />
          <IconCenteredTitleDescription
            icon={icon_text}
            title={data.plain_text_snippets.title}
            desc={data.plain_text_snippets.description}
          />
          <IconCenteredTitleDescription
            icon={icon_preview}
            title={data.sneak_preview.title}
            desc={data.sneak_preview.description}
          />
        </div>

      </section>

      {/* Section Four: Partners */}
      <section className='
        flex-column justify-center items-center
        [&>*]:my-20
        [&>*]:mx-auto
        xl:flex
        xl:mx-40
      '>
        {/* <p>Hello</p> */}
        <img src={partner_google} alt='google-log' />
        <img src={partner_ibm} alt='ibm-log' />
        <img src={partner_hp} alt='hp-log' />
        <img src={partner_vector} alt='vector-log' />
      </section>

      <section className='mb-40 mt-20'>
        <BigCenteredTitleDescription
          title={data.feature_clipboard_devices.title}
          desc={data.feature_clipboard_devices.description}
        />
        <DownloadButtons />
      </section>

      <Footer />
    </div>
  );
}

export default App;
