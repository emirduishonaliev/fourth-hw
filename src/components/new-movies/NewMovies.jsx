import React from "react";
import { MainContent } from "../main-content/MainContent";

export const NewMovies = ({ movies, setMovies }) => {
  return (
    <>
      {movies.map((item) => {
        return (
          <MainContent
            movies={movies}
            setMovies={setMovies}
            title={item.title}
            url={item.url}
            rating={item.rating}
            id={item.id}
          />
        );
      })}
    </>
  );
};
