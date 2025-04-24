import React from "react";
import Modal from "react-modal";

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={{
        content: {
          maxWidth: "80vw",
          maxHeight: "80vh",
          margin: "auto",
          padding: 0,
          background: "transparent",
          border: "none",
          overflow: "hidden",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 1000,
        },
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt=""
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      )}
    </Modal>
  );
};

export default ImageModal;