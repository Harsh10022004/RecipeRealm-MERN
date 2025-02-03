import React from "react";

export const RecipeTile = ({handleClick, id,image,title}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:cursor-pointer" id={id} onClick={()=>handleClick(id)}>
            <img className="w-full" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
            </div>
        </div>
    );
};

export default RecipeTile;