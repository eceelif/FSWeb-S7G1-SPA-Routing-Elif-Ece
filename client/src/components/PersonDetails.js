import React from "react";

const PersonDetail = (props) => {
    const { original_title, media_type, name, profile_path, special_info, popularity } = props;
    
    return (
        <>
            <h1>{original_title}</h1>
            <h1>Özel Bilgi: {special_info}</h1>
            <h2 id="media1" >Media Tipi: {media_type}</h2>
            <h2 id="media2">İsim: {name}</h2>
            <img src={profile_path} alt={name} />
            <h2 id="media3">Popülerlik: {popularity}</h2>
        </>
    );
};

export default PersonDetail;
