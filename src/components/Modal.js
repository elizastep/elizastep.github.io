import React, { useState } from 'react';
import './Modal.css';


const Modal = ({ selectedPhoto, setSelectedPhoto }) => {
    const [loading, setLoading] = useState(true);

    // Function to close the modal when clicking outside the modal content
    const handleClickOutside = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedPhoto(null);
        }
    };

    return (
        <div className="backdrop" onClick={handleClickOutside}>
            <div className="modal-content">
                {loading && <img src={"camera_spinner.svg"} width={64} height={64} style={{ position: "absolute", top: "40%" }} />}
                <img src={selectedPhoto.full} alt={selectedPhoto.alt} className="modal-photo" onLoad={() => {
                    setTimeout(() => setLoading(false), 0);
                }} style={
                    loading ? { visibility: 'hidden' } : {}
                } />
                <p style={
                    loading ? { visibility: 'hidden' } : {}
                } className="modal-text">{selectedPhoto.text}</p>
            </div>
        </div>
    );
};

export default Modal;
