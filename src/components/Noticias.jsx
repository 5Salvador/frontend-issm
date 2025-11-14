import React from "react";
import noticiasData from "../data/noticias.json";
import { Link } from "react-router-dom";

const Noticias = () => {
  return (
    <>
      <div className="max-w-7xl justify-center items-center my-10 p-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticiasData.map((noticia) => (
            <a
              href={noticia.url}
              target="_blank"
              rel="noopener noreferrer"
              key={noticia.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={noticia.image}
                alt={noticia.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-950">
                  {noticia.title}
                </h3>
                <p className="text-sm text-gray-500">{noticia.date}</p>
                <p className="mt-2 text-gray-700 text-sm">
                  {noticia.description}
                </p>
                <p className="mt-3 text-yellow-600 font-medium">Ler mais →</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Noticias;
