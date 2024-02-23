import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./../../FetchedDatas/tmdb_Trending_All_Request";
import MovieDetail from "../MovieDetails";
import PersonDetail from "../PersonDetails";
import TvDetail from "../TvDetails";

const ListItems = (props) => {
  const [movieList, setMovieList] = useState({});
  const [prevMovieList, setPrevMovieList] = useState('');
  const params = useParams();

  if (params.name !== prevMovieList) {
    setPrevMovieList(params.name);
  }

  useEffect(() => {
    const getMovieList = async (trend_name) => {
      try {
        let result = await data.getTrendRequest(trend_name, data.time_window.week, 1);
        console.log(result);
        setMovieList(result);
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    };

    getMovieList(prevMovieList);
  }, [prevMovieList]);

  return (
    <>
      {movieList.results ? (
        movieList.results.map((item, index) => {
          if (item.media_type === "movie") {
            return (
              <MovieDetail
                key={index}
                original_title={item.name || item.title}
                media_type={item.media_type}
                original_language={item.original_language}
                special_info={item.special_info}
              />
            );
          } else if (item.media_type === "person") {
            return (
              <PersonDetail
                key={index}
                original_title={item.name || item.title}
                media_type={item.media_type}
                name={item.name}
                profile_path={item.profile_path}
                special_info={item.special_info}
                popularity={item.popularity}
              />
            );
          }
          else if (item.media_type === "tv") {
            return (
              <TvDetail
                key={index}
                original_title={item.name || item.title}
                media_type={item.media_type}
                name={item.name}
                backdrop_path={item.backdrop_path}
                popularity={item.popularity}
                origin_country={item.origin_country}
                overview={item.overview}
              />
            );
          }
          return null; // Diğer durumlar için null döndür
        })
      ) : (
        <p>Yükleniyor</p>
      )}
    </>
  );
};

export default ListItems;
