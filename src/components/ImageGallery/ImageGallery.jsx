import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ gallery, handleModal }) => {

const handleClick = (bigImage) => {
    handleModal(bigImage);
  };

  return (
    <>
      <ul className={styles.gallery}>
        {gallery.map(({ id, urls: { small, regular }, description }) => {
          return (
            <li className={styles.galleryItems} key={id}>
              <ImageCard
                src={small}
                alt={description}
                onClick={() =>
                  handleClick({ id, urs: {small, regular}, description})}
              />
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default ImageGallery;