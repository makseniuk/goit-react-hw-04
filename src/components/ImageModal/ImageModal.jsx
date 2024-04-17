import Modal from 'react-modal';
import styles from "../ImageModal/ImageModal.module.css";

const customStyles = {
  content: {
    padding: "0",
    background: "unset",
    overflow: "unset",
    border: "none",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const LoadMore = ({ isOpen, photo, onRequestClose }) => {
    if(!photo){
        return null
    }
    return (
        <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={styles.overlay}
      style={customStyles}
    >
      <button className={styles.closeButton} onClick={onRequestClose}>
        x
      </button>
      <img
        src={photo.urls.regular}
        alt={photo.alt.description}
        className={styles.imageModal}
      />
    </Modal>
    )
};

export default LoadMore;