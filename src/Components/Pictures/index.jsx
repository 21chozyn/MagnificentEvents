//this component is responsible for handling the pictures in the portfolio page
import React, { useEffect, useState } from "react";
import "./index.scss";
import { CgCloseO } from "react-icons/cg";
import { createClient } from "pexels";
import anime from "animejs";
import useLoadImgOnIntersection from "../../Hooks/useLoadImgOnIntersection";
import ProgressiveImg from "../ProgressiveImg";
import pexelsKey from "../pexelsKey";

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
    pexelsKey//key for pexels api
  );
  const [photos, setPhotos] = useState(defaultPhoto);
  const [showModal, setShowModal] = useState(false);
  const [modalPicInfo, setModalPicInfo] = useState({
    src: "https://images.pexels.com/photos/17325195/pexels-photo-17325195.jpeg?auto=compress&cs=tinysrgb&h=350",
    alt: "dog",
  });

  const [pictureColCount, setPictureColCount] = useState(
    //this usestate stores number of columns to show pictures depending on device width
    window.innerWidth < 600 ? 2 : window.innerWidth < 1000 ? 3 : 4
  );

  const photoLayout = (photos, colNum) => {
    //this function is responsible for filtering photos which go to the first column etc

    return photos
      .filter((photo, index) => {
        return index % pictureColCount === colNum - 1;
      })
      .map((photo, index) => {
        return (
          <div key={index}>
            
            <ProgressiveImg onClick={() => {
                handleShowPic(photo.src.large2x, photo.alt,photo.src.small,photo.height,photo.width,);
              }}
              src={index <= 3 ? photo.src.medium : ""} // this makes the first 9 pictures load on start
              id={photo.src.medium}
              alt={photo.alt}
              className={index > 3 ? "lazy" : ""}
              placeholderSrc={photo.src.small}
              />
            {photo.alt !== "" && ( //to only show when alt text is available
              <div
                className="overlay"
                style={{ backgroundColor: photo.avg_color }}
              >
                <div className="text">{photo.alt}</div>
              </div>
            )}
          </div>
        );
      });
  };
  useLoadImgOnIntersection(photoLayout); //this hook loads images as the users scrolls

  const handleCloseModal = () => {
    document.documentElement.style.overflow = "scroll"; //to make page scrollable
    anime({
      targets: "#img-modal-figure",
      opacity: 0,
      easing: "easeInQuad",
      duration: 500,
      complete: function () {
        setShowModal(false);
      },
    });
  };
  const handleShowPic = (src, alt,tinySrc,height,width) => {
    document.documentElement.style.overflow = "hidden"; //to make page unscrollable

    setModalPicInfo({ src: src, alt: alt ,tinySrc:tinySrc,height:height,width:width}); //to update the modal src and alt
    setShowModal(true);
  };
  const handleLoad=(e)=>{
    e.target.addEventListener("load",()=>{console.log("fully loaded")})
  }

  useEffect(() => {
    //this useeffect loads the default images once the page loads.
    client.photos
      .curated({ per_page: 80 })
      .then((photos) => setPhotos(photos.photos));
  }, []);

  useEffect(() => {
    //this useeffect loads the searched images as the searchParams change
    client.photos
      .search({ query: searchData.text, per_page: 80 })
      .then((photos) => setPhotos(photos.photos));
  }, [searchData]);
  useEffect(() => {
    //this useeffect is responsible for changing num of picture columns
    function handleResize() {
      setPictureColCount(
        window.innerWidth < 600 ? 2 : window.innerWidth < 1000 ? 3 : 4
      );
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <h1 id="pictures-container">Magnificent Events Pictures</h1>
      <div className="pictures-container" >
        <div className="col1">{photoLayout(photos, 1)}</div>
        <div className="col2">{photoLayout(photos, 2)}</div>
        {pictureColCount >= 3 && (
          <div className="col3">{photoLayout(photos, 3)}</div>
        )}
        {pictureColCount === 4 && (
          <div className="col4">{photoLayout(photos, 4)}</div>
        )}
      </div>
      {showModal && (
        <div id="image-modal-container">
          <CgCloseO onClick={handleCloseModal} />
          <figure id="img-modal-figure">
           {/* <img src={modalPicInfo.src} alt={modalPicInfo.alt} onLoad={console.log("loaded") }/> */}
        <ProgressiveImg  placeholderSrc={modalPicInfo.tinySrc} src={modalPicInfo.src} alt={modalPicInfo.alt} height={modalPicInfo.height} width={modalPicInfo.width}/>
          </figure>
        </div>
      )}
    </>
  );
};

export default index;

