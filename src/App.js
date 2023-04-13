import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { NewMovies } from "./components/new-movies/NewMovies";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Fight Club",
      url: "https://imagedelivery.net/WLUarKbmUXuuhDC7PG5_Qw/articles/02d152e902901e614e813c45047a6415.jpg/public",
      rating: 3,
    },
  ]);

  const addNewMovie = (data) => {
    const favoriteMovies = [...movies];
    favoriteMovies.push(data);
    setMovies(favoriteMovies);
  };

  return (
    <div className="App">
      <Header addNewMovie={addNewMovie} />
      <NewMovies movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default App;
