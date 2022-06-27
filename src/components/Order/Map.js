import React from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const MapView = ({ origin, destination, data = [{}, {}] }) => {
  const [googleMap, setGoogleMap] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef("");

  function mapLoader(props) {
    const loader = new Loader({
      apiKey: "AIzaSyCDG4wQYY-oVPC-mRxJn9j1-GuWPHIgijk",
      ...props,
    });

    loader.load().then(() => {
      if (window.google) {
        if (mapRef.current) {
          const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 41.377491, lng: 64.585258 },
            zoom: 5,
          });
          setGoogleMap(map);
          setMapLoaded(true);
        }
      }
    });
  }

  function createMarker(props) {
    if (window.google) {
      const newMarker = new window.google.maps.Marker({
        position: props,
        title: "Hello World!",
      });
      const myMap = newMarker?.setMap(googleMap);
      setGoogleMap(myMap);
    }
  }

  useEffect(() => mapLoader(), []);

  useEffect(() => {
    if (data.length == 2) {
      data.forEach((item) => createMarker(item));
    }
  }, [mapLoaded, data]);

  const getDirectionsOnMap = () => {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({
      polylineOptions: {
        strokeColor: "blue",
      },
    });

    var request = {
      origin: data[0],
      destination: data[1],
      travelMode: "DRIVING",
    };

    directionsService.route(request, function (result, status) {
      if (status == "OK") {
        directionsRenderer.setDirections(result);
        const updatedMap = directionsRenderer.setMap(googleMap);
        setGoogleMap(updatedMap);
      }
    });
  };

  useEffect(() => {
    if (mapLoaded && origin.lat && destination.lat) {
      getDirectionsOnMap();
    }
  }, [origin, destination, mapLoaded]);

  return (
    <div>
      <div
        ref={mapRef}
        style={{
          width: "100%",
          height: 400,
          backgroundColor: "#e7e7e7e",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
};

export default MapView;
