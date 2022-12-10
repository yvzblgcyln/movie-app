import { useEffect, useState } from "react";
import MovieList from "./components/Content/MovieList";
import axios from "axios";
import Search from "./components/Header/Search";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("god");
  const [type, setType] = useState("movie");

  useEffect(() => {
    setLoading(true);
    axios(`https://www.omdbapi.com/?s=${search}&apikey=7a9ef53&type=${type}`)
      .then((res) => setMovies(res.data.Search)) // json start with {"Search":[{"Title": ...
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => setLoading(false));
  }, [search, type]);

  return (
    <div className="App">
      <Search setSearch={setSearch} setType={setType} type={type} />
      <MovieList movies={movies} loading={loading} />
    </div>
  );
}

export default App;
