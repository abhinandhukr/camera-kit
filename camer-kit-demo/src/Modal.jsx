import { useEffect } from "react";
import Camera from "./camera";
import Push2WebTest from "./PushToWeb";

const Modal = ({ showCamera, handleClose }) => {
  useEffect(() => {
    console.log("Camera status:", showCamera);
  }, []); // Added showCamera as a dependency

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <Camera showCamera = {showCamera} onClose={handleClose}/>
      </div>
    </div>
  );
};

export default Modal;
