import { useEffect, useState } from "react";
import "./Header.scss";

function Search({ setSearch, setType, type }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 1);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    theme === "0"
      ? (document.body.style.backgroundColor = "rgb(75, 99, 76)")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <div className="search">
      <div className="buttons">
        <button className={type === "movie" ? "buttons-selected " : "text"} onClick={() => setType("movie")}>
          Movies
        </button>
        <button className={type === "series" ? "buttons-selected " : "text"} onClick={() => setType("series")}>
          TV Series
        </button>
      </div>
      <input className="search-bar" placeholder="search movie..." onChange={(e) => setSearch(e.target.value)} />

      <div className="theme">
        <div className="theme-text">Light</div>
        <input type="range" min="0" max="1" step="1" value={theme} onChange={(e) => setTheme(e.target.value)} />
        <div className="theme-text">Dark</div>
      </div>
    </div>
  );
}

export default Search;
