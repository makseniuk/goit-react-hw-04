import { useState, useEffect } from "react";
import axios from "axios";
import ErrorMessage from "../src/components/ErrorMessage/ErrorMessage";
import ImageGallery from "../src/components/ImageCard/ImageCard";
import ImageModal from "../src/components/ImageModal/ImageModal";
import Loader from "../src/components/Loader/Loader";
import LoadMoreBtn from "../src/components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../src/components/SearchBar/SearchBar";

  const API_KEY = "RakQqQ1UhJMfZkVYL3XNYnH18bMDmFC8Byt4d2iMwvQ";

  const instance = axios.create({
    baseURL: "https://api.unsplash.com/",
  });

const App =() => {
  const [photosToShow, setPhotosToShow] = useState(null);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [total_pages, setTotal_pages] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [bigImage, setBigImage] = useState(null);

  const handleQuery = (searchTerm) => {
    setQuery(searchTerm);
    setPhotosToShow([]);
    setPage(1);
  };

  const handleSearchPage = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchData = async (query, page) => {
      if (!query) return;

      setIsLoading(true);
      try {
        const response = await instance.get(
          `search/photos/?client_id=${API_KEY}&query=${query}&page=${page}&per_page=12`
        );
        setTotal_pages(response.data.total_pages);

        setPhotosToShow((prev) => [...prev, ...response.data.results]);
      } catch (error) {
        setError("true");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(query, page);
  }, [query, page]);

  const openModal = (bigImage) => {
    setIsOpen(true);
    setBigImage(bigImage);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar handleQuery={handleQuery} />
      {Array.isArray(photosToShow) && (
        <ImageGallery gallery={photosToShow} handleModal={openModal} />
      )}

      {page < total_pages && (
        <LoadMoreBtn handleLoadMore={handleSearchPage} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          image={bigImage}
        />
      )}
    </>
  );
}

export default App;