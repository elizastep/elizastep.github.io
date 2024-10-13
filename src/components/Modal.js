import React from 'react';
import './Modal.css';


const Modal = ({ selectedPhoto, setSelectedPhoto }) => {
    // Function to close the modal when clicking outside the modal content
    const handleClickOutside = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedPhoto(null);
        }
    };

    return (
        <div className="backdrop" onClick={handleClickOutside}>
            <div className="modal-content">
                <img src={selectedPhoto.full} alt={selectedPhoto.alt} className="modal-photo" />
                <p className="modal-text">{selectedPhoto.text}</p>
            </div>
        </div>
    );
};

export default Modal;
