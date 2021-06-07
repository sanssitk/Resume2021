import React, { useRef } from "react";
import { useLightbox } from "simple-react-lightbox";
import "./Gallery.css";

function Gallery({ imgs, classname }) {
  const labelText = classname.replace("filter-item", "");
  const imageId = useRef();
  const { openLightbox } = useLightbox();

  return imgs.map((img, index) => (
    <div
      key={classname + index}
      id={classname + index}
      className={`${classname} gallerycollections`}
      onClick={(e) =>
        openLightbox(
          e.currentTarget.firstChild.attributes.srl_elementid.nodeValue
        )
      }
    >
      <img ref={imageId} className="image" src={img} alt="" />
      <div className="labelText">{labelText}</div>
    </div>
  ));
}

export default Gallery;

// openLightbox(e)
