import styles from "../ImageCard/ImageCard.module.css";

const ImageCard = ({ src, alt, onClick }) => {
    return( 
        <div className={styles.divCard}>
            <img className={styles.imgCard} src={src} alt={alt} onClick={onClick} />
        </div>
    )
};

export default ImageCard;
