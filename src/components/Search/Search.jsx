import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import useAutocomplete from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";
import { truncate } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";

const Listbox = styled("ul")(() => ({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  border: "1px solid var(--color-primary)",
  top: 60,
  maxHeight: "500px",
  zIndex: 10,
  overflowY: "auto",
  left: 0,
  listStyle: "none",
  backgroundColor: "var(--color-black)",
  "& li.Mui-focused": {
    backgroundColor: "var(--color-primary)",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

function Search({ data = [], placeholder = "Search" }) {
  const navigate = useNavigate();

  const {
    getRootProps,
    value,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "qtify-search",
    options: data,
    getOptionLabel: (option) => option.title || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value && value.slug) {
      navigate(`/album/${value.slug}`);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <div {...getRootProps()}>
          <input
            name="album"
            className={styles.search}
            placeholder={placeholder}
            {...getInputProps()}
          />
        </div>
        <button className={styles.searchButton} type="submit" aria-label="search">
          <SearchIcon />
        </button>
      </form>

      {groupedOptions.length > 0 && (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            const artists =
              option.songs?.reduce((acc, curr) => {
                acc.push(...curr.artists);
                return acc;
              }, []) || [];

            return (
              <li
                key={option.id || index}
                className={styles.listElement}
                {...getOptionProps({ option, index })}
              >
                <div>
                  <p className={styles.albumTitle}>{option.title}</p>
                  <p className={styles.albumArtists}>
                    {truncate(artists.join(", "), 40)}
                  </p>
                </div>
              </li>
            );
          })}
        </Listbox>
      )}
    </div>
  );
}

export default Search;
