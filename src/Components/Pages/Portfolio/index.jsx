import React from "react";
import Pictures from "../../Pictures";

import "./index.scss";
import flower1 from "../../../Images/flower1.jpg";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const index = () => {
  const [searchText, setSearchText] = React.useState(""); //this stores search details-text
  const [isSearchPicture, setIsSearchPicture] = React.useState(true); //this stores search details-text
  const [searchData, setSearchData] = React.useState({ text: "", isPicture: true });
  const handleSearch = () => {
    setSearchData({ text: searchText, isPicture: isSearchPicture });
    document.querySelector("#pictures-container").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${flower1})` }}
      ></div>
      <div className="background-container">
        <h2>View our large collection of event pictures</h2>
        <div className="search-container">
          <select
            name="mode"
            value={isSearchPicture ? "picture" : "video"}
            onChange={(e) => {
              setIsSearchPicture(e.target.value === "picture" ? true : false);
            }}
          >
            <option value="picture">Picture</option>
            <option value="video">Video</option>
          </select>
          <input
            type="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div className="searchBtn" onClick={handleSearch}>
            <FaSearch />
          </div>
        </div>
        <Link to="https://www.pexels.com">Photos provided by Pexels</Link>
      </div>
      <Pictures searchData={searchData} />
    </>
  );
};

export default index;
