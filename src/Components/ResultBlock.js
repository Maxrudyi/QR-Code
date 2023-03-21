import React, { useState, useEffect, useRef } from "react";
import { CompactPicker } from "react-color";
import { QRCodeCanvas } from "qrcode.react";

import {
  ExpandMoreIcon,
  AcUnitIcon,
  DashboardIcon,
  AppsIcon,
  HeatPumpIcon,
  TwitterIcon,
  InstagramIcon,
  YouTubeIcon,
  NetworkWifiIcon,
} from "./Imports";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import twitterIcon from "./Icons/twitter.png";
import instagramIcon from "./Icons/instagram.png";
import youtubeIcon from "./Icons/youtube.png";
import wifi from "./Icons/wifi.png";

const ResultBlock = ({ patternStatus, setPatternStatus, qrText }) => {
  const [color, setColor] = useState("#000000");
  const [logo, setLogo] = useState("");
  const [savingFormat, setSavingFormat] = useState("png");
  const [qrCodeLogo, setQrCodeLogo] = useState("");
  const qrRef = useRef();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    const filterHandler = () => {
      switch (logo) {
        case "twitter":
          setQrCodeLogo(twitterIcon);
          break;
        case "instagram":
          setQrCodeLogo(instagramIcon);
          break;
        case "youtube":
          setQrCodeLogo(youtubeIcon);
          break;
        case "wifi":
          setQrCodeLogo(wifi);
          break;
        default:
          setQrCodeLogo();
          break;
      }
    };

    filterHandler();
  }, [logo]);

  //   Save image qr code
  const downloadQRCode = (e) => {
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL(`image/${savingFormat}`);
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.${savingFormat}`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={qrText}
      size={114}
      bgColor={"#ffff"}
      fgColor={color}
      level={patternStatus}
      imageSettings={{
        src: qrCodeLogo,
        x: undefined,
        y: undefined,
        height: 40,
        width: 40,
        excavate: true,
      }}
    />
  );

  return (
    <div className="resultBlock">
      <div className="containerResult">
        <div className="resultBlock__container">
          <div className="resultBlock__qrCode" ref={qrRef}>
            {qrcode}
          </div>
        </div>

        <div>
          {/*PATTERN  */}
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{
              backgroundColor: "#0D0453",
              color: "#ffff",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ fill: "#ffff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: "#0D0453",
                color: "#ffff",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Kanit",
                  color: "#d7d7d7",
                }}
              >
                PATTERN
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#0D0453",
                color: "#ffff",
              }}
            >
              <Typography component={"span"} className="patternButton">
                <div
                  className={
                    patternStatus === "L"
                      ? "qrCode__backgroundSvg active"
                      : "qrCode__backgroundSvg"
                  }
                  onClick={() => setPatternStatus("L")}
                >
                  <AcUnitIcon />
                </div>
                <div
                  className={
                    patternStatus === "Q"
                      ? "qrCode__backgroundSvg active"
                      : "qrCode__backgroundSvg"
                  }
                  onClick={() => setPatternStatus("Q")}
                >
                  <HeatPumpIcon />
                </div>
                <div
                  className={
                    patternStatus === "H"
                      ? "qrCode__backgroundSvg active"
                      : "qrCode__backgroundSvg"
                  }
                  onClick={() => setPatternStatus("H")}
                >
                  <AppsIcon />
                </div>
                <div
                  className={
                    patternStatus === "M"
                      ? "qrCode__backgroundSvg active"
                      : "qrCode__backgroundSvg"
                  }
                  onClick={() => setPatternStatus("M")}
                >
                  <DashboardIcon />
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* COLOR */}

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{
              backgroundColor: "#0D0453",
              color: "#ffff",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ fill: "#ffff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: "#0D0453",
                color: "#ffff",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Kanit",
                  color: "#d7d7d7",
                }}
              >
                COLOR
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#0D0453",
                color: "#ffff",
              }}
            >
              <Typography component="span">
                <CompactPicker
                  color={color}
                  onChangeComplete={(color) => {
                    setColor(color.hex);
                  }}
                />
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* LOGO */}
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{
              backgroundColor: "#0D0453",
              color: "#ffff",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ fill: "#ffff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: "#0D0453",
                color: "#ffff",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Kanit",
                  color: "#d7d7d7",
                }}
              >
                LOGO
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#0D0453",
                color: "#ffff",
              }}
            >
              <Typography component="span" className="logoButton">
                <div
                  className={
                    logo === "twitter"
                      ? "qrCode__backgroundSvg active"
                      : "qrCode__backgroundSvg"
                  }
                  onClick={() =>
                    logo === "twitter" ? setLogo("") : setLogo("twitter")
                  }
                >
                  <TwitterIcon />
                </div>
                <div
                  className={
                    logo === "instagram"
                      ? "qrCode__backgroundSvg active"
                      : "qrCode__backgroundSvg"
                  }
                  onClick={() =>
                    logo === "instagram" ? setLogo("") : setLogo("instagram")
                  }
                >
                  <InstagramIcon />
                </div>
                <div
                  className={
                    logo === "youtube"
                      ? "qrCode__backgroundSvg active"
                      : "qrCode__backgroundSvg"
                  }
                  onClick={() =>
                    logo === "youtube" ? setLogo("") : setLogo("youtube")
                  }
                >
                  <YouTubeIcon />
                </div>
                <div
                  className={
                    logo === "wifi"
                      ? "qrCode__backgroundSvg active"
                      : "qrCode__backgroundSvg"
                  }
                  onClick={() =>
                    logo === "wifi" ? setLogo("") : setLogo("wifi")
                  }
                >
                  <NetworkWifiIcon />
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <div className="resultBlock__format">
            <Button
              variant="contained"
              className={savingFormat === "png" ? "active" : ""}
              onClick={() => setSavingFormat("png")}
            >
              PNG
            </Button>
            <Button
              variant="contained"
              className={savingFormat === "jpg" ? "active" : ""}
              onClick={() => setSavingFormat("jpg")}
            >
              JPG
            </Button>
            <Button
              variant="contained"
              className={savingFormat === "gif" ? "active" : ""}
              onClick={() => setSavingFormat("gif")}
            >
              GIF
            </Button>
          </div>

          <div className="resultBlock__download">
            <Button variant="contained" onClick={downloadQRCode}>
              Download Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultBlock;
