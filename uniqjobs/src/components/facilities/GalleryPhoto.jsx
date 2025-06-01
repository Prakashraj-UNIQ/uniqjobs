import React from "react";


const ImageCard = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg aspect-square">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <p className="text-white/80 mt-1">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
