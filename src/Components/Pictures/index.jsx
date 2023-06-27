//this component is responsible for handling the pictures in the portfolio page
import React, { useEffect, useState } from "react";
import "./index.scss";

import { createClient } from "pexels";
const defaultPhoto = [
  {
    id: 2880507,
    width: 4000,
    height: 6000,
    url: "https://www.pexels.com/photo/woman-in-white-long-sleeved-top-and-skirt-standing-on-field-2880507/",
    photographer: "Deden Dicky Ramdhani",
    photographer_url: "https://www.pexels.com/@drdeden88",
    photographer_id: 1378810,
    avg_color: "#7E7F7B",
    src: {
      original:
        "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg",
      large2x:
        "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Brown Rocks During Golden Hour",
  },
];
const index = () => {
  const client = createClient(
    "NCZbqi6QUEkbIPyg9uIcwOBhfeu58q33acmxCDalBnC8lfMeQ3NCpex6"
  );
  const [photos, setPhotos] = useState(defaultPhoto);
  useEffect(() => {
    //this useeffect loads the default images once the page loads.
    client.photos
      .curated({ per_page: 20 })
      .then((photos) => setPhotos(photos.photos));
  }, []);
  useEffect(() => {
    console.log(photos.map((photo) => {return photo.url.medium}));
  }, [photos]);
  return (
    <div className="pictures-container">
      <div className="col1">
        {photos
          .filter((photo, index) => {
            return index % 3 === 0;
          })
          .map((photo, index) => {
            return (
              <img src={photo.src.medium} key={index} alt={photo.alt}></img>
            );
          })}
      </div>
      <div className="col2">
      {photos
          .filter((photo, index) => {
            return index % 3 === 1;
          })
          .map((photo, index) => {
            return (
              <img src={photo.src.medium} key={index} alt={photo.alt}></img>
            );
          })}
      </div>
      <div className="col3">
      {photos
          .filter((photo, index) => {
            return index % 3 === 2;
          })
          .map((photo, index) => {
            return (
              <img src={photo.src.medium} key={index} alt={photo.alt}></img>
            );
          })}
      </div>
    </div>
  );
};

export default index;
