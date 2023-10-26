import React from "react";
import logo from "../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../images/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../images/icon-twitter.svg";
import { ReactComponent as InstagramIcon } from "../images/icon-instagram.svg";

function Footer() {
  return (
    <footer className="flex-column bg-gray py-10 px-20">
      <div className="flex justify-center py-5">
        <img src={logo} className="h-12" alt="logo" />
      </div>
      <nav>
        <ul className="text-gray-dark text-lg [&>*]:my-5">
          <li className="active:text-cyan"><button type="button">FAQs</button></li>
          <li className="active:text-cyan"><button type="button">Contact Us</button></li>
          <li className="active:text-cyan"><button type="button">Privacy Policy</button></li>
          <li className="active:text-cyan"><button type="button">Press Kit</button></li>
          <li className="active:text-cyan"><button type="button">Install Guide</button></li>
        </ul>
      </nav>
      <div className="flex justify-evenly py-5">
        <FacebookIcon className="active-fill-cyan" />
        <TwitterIcon className="active-fill-cyan" />
        <InstagramIcon className="active-fill-cyan" />
      </div>
    </footer>
  );
}

export default Footer;