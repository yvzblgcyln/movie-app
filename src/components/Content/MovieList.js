import { useState } from "react";
import "./Content.scss";

function MovieList({ movies, loading }) {
  const [favorites, setFavorites] = useState([]);
  const [watchList, setWatchList] = useState([]);

  const deleteFav = (index) => {
    const temp = [...favorites];
    temp.splice(index, 1);
    setFavorites(temp);
  };
  const deleteWatch = (index) => {
    const temp = [...watchList];
    temp.splice(index, 1);
    setWatchList(temp);
  };

  return (
    <div>
      <div className="movies">
        {loading && <div className="loading">Loading...</div>}
        {!loading && !movies && <div className="loading">Nothing found, keep typing...</div>}
        {!loading &&
          movies &&
          movies.map((movie, i) => (
            <div key={i}>
              <img className="movie-pics" src={movie.Poster} alt="Poster"></img>
              <div className="add-list">
                <button onClick={() => setFavorites([...favorites, { name: movie.Title, poster: movie.Poster }])}>
                  Favorites
                </button>
                <button onClick={() => setWatchList([...watchList, { name: movie.Title, poster: movie.Poster }])}>
                  Watch List
                </button>
              </div>
              <div className="titles">
                <div className="title">{movie.Title}</div>
              </div>
            </div>
          ))}
      </div>
      <div className="content-bottom">
        <div className="captions">
          <div className="caption">Favorites</div>
          <div className="caption">Watch List</div>
        </div>
        <div className="sub-menus">
          <div className="favorites">
            {favorites.length === 0 ? (
              <div className="empty-list-text">This list is empty</div>
            ) : (
              favorites.map((movie, i) => (
                <div className="fav" key={i}>
                  <img className="fav-pics" src={movie.poster} alt="Poster"></img>
                  <button className="delete" onClick={() => deleteFav(i)}>
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="favorites">
            {watchList.length === 0 ? (
              <div className="empty-list-text">This list is empty</div>
            ) : (
              watchList.map((movie, i) => (
                <div className="fav" key={i}>
                  <img className="fav-pics" src={movie.poster} alt="Poster"></img>
                  <button className="delete" onClick={() => deleteWatch(i)}>
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieList;
