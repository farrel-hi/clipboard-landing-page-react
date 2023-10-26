import React from "react";

function SmallTitleDescription(props) {
    return(
        <div className="p-10">
            <h1 className="font-semibold text-2xl text-gray-dark mb-2">{props.title}</h1>
            <p className="text-base text-gray-light">{props.desc}</p>
        </div>
    );
}

export default SmallTitleDescription;