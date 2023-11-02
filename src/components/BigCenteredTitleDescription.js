import React from "react";

function BigCenteredTitleDescription(props) {
    return (
        <div className="p-10 xl:w-1/3 xl:mx-auto">
            <h1 className="font-semibold text-3xl text-gray-dark mb-5">{props.title}</h1>
            <p className="text-base text-gray-light">{props.desc}</p>
        </div>
    );
}

export default BigCenteredTitleDescription;