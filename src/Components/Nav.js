import React from "react";
import {
  AddLinkIcon,
  MessageIcon,
  SmsIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
  NetworkWifiIcon,
  EmailIcon,
  MyLocationIcon,
  MenuIcon,
  MenuOpenIcon,
} from "./Imports";

const Nav = ({
  status,
  setStatus,
  windowSize,
  showResults,
  setShowResults,
}) => {
  const checkTabletsSize = showResults && windowSize.innerWidth <= 768;
  const checkDesktopSize = !showResults || windowSize.innerWidth > 1024;
  const checkMobileSize = !showResults && windowSize.innerWidth <= 480;

  return (
    <nav
      className="nav"
      style={
        checkTabletsSize
          ? { border: "none", boxShadow: "none" }
          : checkMobileSize
          ? { position: "absolute", zIndex: "1" }
          : checkDesktopSize
          ? { minWidth: "210px" }
          : {}
      }
    >
      <div className="navHead">
        <button
          onClick={() => setShowResults((wasOpened) => !wasOpened)}
          className={`navMenu ${!showResults ? "active" : ""}`}
          style={
            windowSize.innerWidth <= 768
              ? { position: "static" }
              : { display: "absolute" }
          }
        >
          {showResults ? <MenuIcon /> : <MenuOpenIcon />}
        </button>
        <p className="navTitle">QR GENERATOR</p>
      </div>

      <ul className="nav__list" style={checkTabletsSize ? { display: "none" } : {}}>
        <li
          className={status === "website" ? "active" : ""}
          onClick={() => setStatus("website")}
        >
          <AddLinkIcon />
          <span
            style={
              checkDesktopSize ? { display: "block" } : { display: "none" }
            }
          >
            Website
          </span>
        </li>
        <li
          className={status === "textMessage" ? "active" : ""}
          onClick={() => setStatus("textMessage")}
        >
          <MessageIcon />
          <span
            style={
              checkDesktopSize ? { display: "block" } : { display: "none" }
            }
          >
            Text message
          </span>
        </li>
        <li
          className={status === "sms" ? "active" : ""}
          onClick={() => setStatus("sms")}
        >
          <SmsIcon />
          <span
            style={
              checkDesktopSize ? { display: "block" } : { display: "none" }
            }
          >
            Sms
          </span>
        </li>
        <li
          className={status === "instagram" ? "active" : ""}
          onClick={() => setStatus("instagram")}
        >
          <InstagramIcon />
          <span
            style={
              checkDesktopSize ? { display: "block" } : { display: "none" }
            }
          >
            Instagram
          </span>
        </li>
        <li
          className={status === "twitter" ? "active" : ""}
          onClick={() => setStatus("twitter")}
        >
          <TwitterIcon />
          <span
            style={
              checkDesktopSize ? { display: "block" } : { display: "none" }
            }
          >
            Twitter
          </span>
        </li>
        <li
          className={status === "youTube" ? "active" : ""}
          onClick={() => setStatus("youTube")}
        >
          <YouTubeIcon />
          <span
            style={
              checkDesktopSize ? { display: "block" } : { display: "none" }
            }
          >
            YouTube
          </span>
        </li>
        <li
          className={status === "wifi" ? "active" : ""}
          onClick={() => setStatus("wifi")}
        >
          <NetworkWifiIcon />
          <span
            style={
              checkDesktopSize ? { display: "block" } : { display: "none" }
            }
          >
            Wifi
          </span>
        </li>
        <li
          className={status === "email" ? "active" : ""}
          onClick={() => setStatus("email")}
        >
          <EmailIcon />
          <span
            style={
              checkDesktopSize ? { display: "block" } : { display: "none" }
            }
          >
            Email
          </span>
        </li>
        <li
          className={status === "geolocation" ? "active" : ""}
          onClick={() => setStatus("geolocation")}
        >
          <MyLocationIcon />
          <span
            style={
              checkDesktopSize ? { display: "block" } : { display: "none" }
            }
          >
            Geolocation
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
