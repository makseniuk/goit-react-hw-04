import style from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = () => {
  return (
    <>
        <div>
          <ul className={style.gallery}>
              <li>
                <ImageCard />
              </li>
          </ul>
        </div>
    </>
  );
};

export default ImageGallery;