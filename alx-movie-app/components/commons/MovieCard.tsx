import React from "react";
interface MovieCardProps {
  title: string;
  poster: string;
  releaseDate: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, poster, releaseDate }) => {
  return (
    <div className="border rounded shadow hover:shadow-lg transition p-2">
      <img src={poster} alt={title} className="w-full h-64 object-cover rounded" />
      <h3 className="mt-2 font-bold">{title}</h3>
      <p className="text-gray-500">{releaseDate}</p>
    </div>
  );
};

export default MovieCard;
