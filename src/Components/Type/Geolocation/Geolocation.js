import React, { useRef, useState, useCallback, useEffect } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { defaultTheme } from "./Theme";
import { getBrowserLocation } from "./CurrentLocationMarker/geo";
import Button from "@mui/material/Button";
import "./App.scss";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const defaultOption = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: true,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: defaultTheme,
};

const defaultCenter = {
  lat: 51.509865,
  lng: -0.118092,
};

const Geolocation = ({ Autocomplete, isLoaded, setQrText }) => {
  const mapRef = useRef(undefined);
  const [center, setCentr] = useState(defaultCenter);

  const onPlaceSelect = useCallback((coordinates) => {
    setCentr(coordinates);
  }, []);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  useEffect(() => {
    getBrowserLocation()
      .then((curLoc) => {
        setCentr(curLoc);
      })
      .catch((defaultCenter) => {
        setCentr(defaultCenter);
      });
  }, []);

  return (
    <div className="geolocation">
      <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} />

      <div className="geolocationMap">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={defaultOption}
        >
          <MarkerF position={center} />
        </GoogleMap>
      </div>

      <Button
        type="submit"
        variant="contained"
        onClick={(e) =>
          setQrText(
            "http://maps.google.com/maps?q=" + center.lat + "," + center.lng
          )
        }
      >
        Generate QR Code
      </Button>
    </div>
  );
};

export default Geolocation;
