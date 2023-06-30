import React, { useEffect, useState } from "react";
//this function loads a lower quality photo first until a higher one is completely loaded
const index = ({ placeholderSrc, src, ...props }) => {
  //placeholderSrc chould be lower quality src which is loaded first
  const [imgLoaded, setImgLoaded] = useState(false); //this stores bool state which changes when higher quality picture is loaded

  return (
    <>
      <img
        style={{ display: imgLoaded ? "none" : "block", filter: "blur(3px)" }}
        {...{ src: placeholderSrc, ...props }}
        alt={props.alt || ""}
        className="image"
      />
      <img
        style={{ display: imgLoaded ? "block" : "none" }}
        {...{ src: src===""?props.id:src, ...props }}//this loads src from id if src==="" ie when the image was lazy loaded first
        alt={props.alt || ""}
        onLoad={() => setImgLoaded(true)}
        className="image"
        loading="eager"
      />
    </>
  );
};

export default index;
