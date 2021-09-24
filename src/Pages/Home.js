import React, { useEffect, useState } from "react";
import placeholder from "../img/Bing-News.png";
import fetch from "../helpers/fetch";
import Header from "../Layout/Header";

const Home = () => {
  const [noticias, setNoticias] = useState([]);

  const [fecha, setFecha] = useState("");

  useEffect(() => {
    fetchNoticias("Noticias", "Day");
  }, []);

  const fetchNoticias = async (q, freshness) => {
    const misNoticias = await fetch(q, freshness);
    const dia = freshness === "Week" ? (freshness = "la Semana") : "Hoy";
    const categoria = q === "Noticias" ? (q = "") : "en ";
    setFecha(`Noticias de ${dia} ${categoria} ${q}`);
    setNoticias(misNoticias);
  };

  return (
    <div>
      <Header fetchNoticias={fetchNoticias} />
      <div className="bg-gray-100">
        <div className="container mx-auto px-5 lg:px-0">
          <h1 className="text-secondary pt-5 font-bold text-xl">{fecha}</h1>
          <div className="flex flex-col mx-auto lg:flex-row lg:flex-wrap">
            {noticias.map((noticia, index) => (
              <div
                className="flex flex-col md:flex-auto md:  w-full border rounded-md my-7 shadow-lg lg:w-cards lg:mr-5 lg:flex-auto  flex-nowrap"
                key={index + noticia.description}
              >
                <img
                  className="rounded-t-md object-cover w-full h-48"
                  src={
                    noticia.image
                      ? noticia.image.thumbnail.contentUrl
                      : placeholder
                  }
                  alt={noticia.description}
                />

                <h1 className="mx-3 my-2 font-bold"> {noticia.name}</h1>
                <p className="mx-3 mb-5 line-clamp-2">{noticia.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
