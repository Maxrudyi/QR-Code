import React, { useState, useEffect } from "react";
import Website from "./Type/Website/Website";
import TextMessage from "./Type/TextMessage/TextMessage";
import Sms from "./Type/Sms/Sms";
import Instagram from "./Type/Instagram/Instagram";
import Twitter from "./Type/Twitter/Twitter";
import YouTube from "./Type/Youtube/Youtube";
import Wifi from "./Type/Wifi/Wifi";
import Email from "./Type/Email/Email";
import Geolocation from "./Type/Geolocation/Geolocation";
import { Autocomplete } from "./Type/Geolocation/Autocomplete/Autocomplete";
import { useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places"];

const InputBlock = ({ status, setQrText, API_KEY }) => {
  const [renderBlock, setRenderBlock] = useState(<Website />);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "website":
          setRenderBlock(<Website status={status} setQrText={setQrText} />);
          break;
        case "textMessage":
          setRenderBlock(<TextMessage status={status} setQrText={setQrText} />);
          break;
        case "sms":
          setRenderBlock(<Sms status={status} setQrText={setQrText} />);
          break;
        case "instagram":
          setRenderBlock(<Instagram status={status} setQrText={setQrText} />);
          break;
        case "twitter":
          setRenderBlock(<Twitter status={status} setQrText={setQrText} />);
          break;
        case "youTube":
          setRenderBlock(<YouTube status={status} setQrText={setQrText} />);
          break;
        case "wifi":
          setRenderBlock(<Wifi status={status} setQrText={setQrText} />);
          break;
        case "email":
          setRenderBlock(<Email status={status} setQrText={setQrText} />);
          break;
        case "geolocation":
          setRenderBlock(
            <Geolocation
              status={status}
              setQrText={setQrText}
              API_KEY={API_KEY}
              Autocomplete={Autocomplete}
              isLoaded={isLoaded}
            />
          );
          break;

        default:
          setRenderBlock(<Website />);
          break;
      }
    };

    filterHandler();
  }, [status]);

  return <div className="inputBlock">{renderBlock}</div>;
};

export default InputBlock;
