import React from "react";

function Gallery({ imgs, classname }) {
  return (
    <>
      {imgs.map((img, index) => (
        <div key={index} className={classname}>
          <img src={img} alt="" />
        </div>
      ))}
    </>
  );
}

export default Gallery;
