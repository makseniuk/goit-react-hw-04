import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../SearchBar/SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
    const [searchText, setSearchText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchText.trim()) {
            toast.error("Please enter text to search for images");
            return;
        }
        onSubmit(searchText);
        setSearchText("");
    };

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <>
            <header className={styles.header}>
              <form onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchText}
                    onChange={handleChange}
                />
                <button className={styles.btn} type="submit">Search</button>
              </form>
            </header>
            <ToastContainer />
        </>
    );
};

export default SearchBar;