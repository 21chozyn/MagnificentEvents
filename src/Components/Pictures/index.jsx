//this component is responsible for handling the pictures in the portfolio page
import React, { useEffect, useState } from "react";
import "./index.scss";
import { CgCloseO } from "react-icons/cg";
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

const index = ({ searchData }) => {
  const client = createClient(
    "NCZbqi6QUEkbIPyg9uIcwOBhfeu58q33acmxCDalBnC8lfMeQ3NCpex6"
  );
  const [photos, setPhotos] = useState(defaultPhoto);
  const [showModal, setShowModal] = useState(false);
  const [modalPicInfo, setModalPicInfo] = useState({
    src: "https://images.pexels.com/photos/17325195/pexels-photo-17325195.jpeg?auto=compress&cs=tinysrgb&h=350",
    alt: "dog",
  });
  const photoLayout = (photos, columns, colNum) => {
    //this function is responsible for filtering photos which go to the first column etc

    return photos
      .filter((photo, index) => {
        return index % columns === colNum - 1;
      })
      .map((photo, index) => {
        return (
          <img
            onClick={handleShowPic}
            // style={{backgroundColor:photo.avg_color}}
            src={photo.src.small}
            key={index}
            alt={photo.alt}
            srcSet={photo.src.original} // this is the pic url used when img is clicked
          ></img>
        );
      });
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowPic = (e) => {
    setModalPicInfo({ src: e.target.srcset, alt: e.target.alt }); //to update the modal src and alt
    setShowModal(true);
  };

  useEffect(() => {
    //this useeffect loads the default images once the page loads.
    client.photos
      .curated({ per_page: 5 })
      .then((photos) => setPhotos(photos.photos));
  }, []);

  useEffect(() => {
    //this useeffect loads the searched images as the searchParams change
    client.photos
      .search({ query:searchData.text, per_page: 10 })
      .then((photos) => setPhotos(photos.photos));
  }, [searchData]);
  return (
    <>
      <h1>Magnificent Events Pictures</h1>
      <div className="pictures-container">
        <div className="col1">{photoLayout(photos, 3, 1)}</div>
        <div className="col2">{photoLayout(photos, 3, 2)}</div>
        <div className="col3">{photoLayout(photos, 3, 3)}</div>
      </div>
      {showModal && (
        <div id="image-modal-container">
          <CgCloseO onClick={handleCloseModal} />
          <figure className="img-container">
            <img src={modalPicInfo.src} alt={modalPicInfo.alt} />
          </figure>
        </div>
      )}
    </>
  );
};

export default index;
