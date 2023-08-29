import React from "react";

const Modal = ({ isOpen, onClose, videoId }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Modal"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <div className="video-container">
        <iframe
          width="50%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </Modal>
  );
};

export default Modal;
