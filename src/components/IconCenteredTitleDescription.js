import React from "react";

function IconCenteredTitleDescription(props) {
    return (
        <div className="p-10">
            <div className="w-full flex justify-center mb-5">
                <img src={props.icon} />
            </div>
            <h1 className="font-semibold text-2xl text-gray-dark mb-3">{props.title}</h1>
            <p className="text-base text-gray-light">{props.desc}</p>
        </div>
    );
}

export default IconCenteredTitleDescription;