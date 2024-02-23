import React from "react";
import "./style.css";

const MovieDetail = (props) => {
    const { original_title, media_type, original_language, special_info } = props;
    
    return (
        <>
            <h1>{original_title}</h1>
            <h1 id="media1">Özel Bilgi: {special_info}</h1>
            <h2 id="media2">media tipi: {media_type}</h2>
            <h2 id="media3">ana dil: {original_language}</h2>
        </>
    )
}

export default MovieDetail;
