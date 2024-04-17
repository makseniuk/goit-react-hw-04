import styles from "../LoadMoreBtn/LoadMoreBtn.module.css"

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <div className={styles.container}>
      <button onClick={() => handleLoadMore()} className={styles.btn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;