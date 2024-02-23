import React from "react";

const TvDetail = (props) => {
    const { original_title, media_type, name, backdrop_path
        ,origin_country, popularity,
        overview } = props;
    
    return (
        <>
            <h1>{original_title}</h1>
            <h2 id="media1">Media Tipi: {media_type}</h2>
            <h2>İsim: {name}</h2>
            <img src={backdrop_path} alt={name} />
            <h2 id="media2">Popülerlik: {popularity}</h2>
            <h2 id="media3">ülke: {origin_country}</h2>
            <p>overview: {overview}</p>
        </>
    );
};

export default TvDetail;
