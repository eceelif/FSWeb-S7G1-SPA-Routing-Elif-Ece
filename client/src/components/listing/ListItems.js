import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./../../FetchedDatas/tmdb_Trending_All_Request";
import TrendDetail from "../TrendDetail";
const ListItems = (props) => {
  const [trendList, setTrendList] = useState({});
  const [prevTrendList, setPrevTrendList ] = useState('');

  const params = useParams();
   if(params.name != prevTrendList ){
     setPrevTrendList(params.name)
   }
  //setPrevTrendList(params.name);
  //console.log(params);

  useEffect(() => {

    const getTrendList = async (trend_name) => {
      let result = await data.getTrendRequest(trend_name, data.time_window.week, 1);
      console.log(result)
      setTrendList(result);
    };

    getTrendList(prevTrendList);
    
  },[prevTrendList]);

  return (
    <>
      {
      trendList.results ? 
      (
        trendList.results.map((item, index) => {
          return (
            <TrendDetail key={index} original_title={item.name || item.title} />
          );
        })
      ) 
      : 
      (
        <p>Yükleniyor</p>
      )}
    </>
  );
};

export default ListItems;
