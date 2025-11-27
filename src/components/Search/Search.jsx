import React from "react";
import styles from "./Search.module.css";
import { useAutocomplete } from "@mui/base";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Listbox = styled("ul")(() => ({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0 0 10px 10px",
  border: "1px solid var(--color-primary)",
  top: 48,
  maxHeight: 300,
  zIndex: 10,
  overflowY: "auto",
  left: 0,
  listStyle: "none",
  backgroundColor: "#fff",
  "& li.Mui-focused": {
    backgroundColor: "var(--color-primary)",
    color: "white",
    cursor: "pointer",
  },
}));

function Search({ data = [], placeholder = "Search" }) {
  const navigate = useNavigate();

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
  } = useAutocomplete({
    id: "qtify-search",
    options: data,
    getOptionLabel: (option) => option.title || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;

    if (value.slug) {
      navigate(`/album/${value.slug}`);
    } else if (value.id) {
      navigate(`/album/${value.id}`);
    }
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <div {...getRootProps()}>
          <input
            className={styles.search}
            placeholder={placeholder}
            {...getInputProps()}
          />
        </div>

        <button className={styles.searchButton} type="submit">
  <img src="/assets/Search icon.svg" alt="search" />
</button>

      </form>

      {groupedOptions.length > 0 && (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li
              key={option.id || index}
              className={styles.listElement}
              {...getOptionProps({ option, index })}
            >
              <p className={styles.albumTitle}>{option.title}</p>
            </li>
          ))}
        </Listbox>
      )}
    </div>
  );
}

export default Search;
