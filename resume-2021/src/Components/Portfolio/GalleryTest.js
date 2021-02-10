import React, { useRef } from "react";
import "./Gallery.css";
import Modal from "./Modal";

function Gallery({ imgs, classname }) {
  const modalRef = useRef(null);

  const labelText = classname.replace("filter-item", "");

  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <>
      {imgs.map((img, index) => (
        <div
          id={classname + index}
          key={classname + index}
          className={`${classname} gallerycollections`}
          onClick={openModal}
        >
          <img src={img} alt="" />
          <div className="labelText">{labelText}</div>
          <Modal ref={modalRef}>
            <img src={img} alt="" />            
            <button onClick={() => modalRef.current.close()}>Close</button>
          </Modal>
        </div>
      ))}
    </>
  );
}

export default Gallery;

{
  /* <>
  {imgs.map((img, index) => (
        <div
          id={classname + index}
          key={classname + index}
          className={`${classname} gallerycollections`}
          onClick={openModel}
        >
          <img src={img} alt="" />
          <div className="labelText">{labelText}</div>
        </div>
      ))}
</>; */
}

{
  /* <>
      {imgs.map((img, index) => (
        <div key={classname + index}>
          <div
            id={classname + index}
            className={`${classname} gallerycollections`}
            onClick={openModel}
          />
          <Modal ref={modalRef}>
            <img src={img} alt="" />            
            <button onClick={() => modalRef.current.closeModal()}>Close</button>
          </Modal>
        </div>
      ))}
    </> */
}
