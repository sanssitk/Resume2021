import React from "react";
import "./Gallery.css";

function Gallery({ imgs, classname }) {
  const labelText = classname.replace("filter-item", "");
  return (
    <>
      {imgs.map((img, index) => (
        <div key={index} className={`${classname} gallerycollections`}>
          <img src={img} alt="" />
          <div className="labelText">{labelText}</div>
        </div>
      ))}
    </>
  );
}

export default Gallery;
