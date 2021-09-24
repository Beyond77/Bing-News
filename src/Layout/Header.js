import React, { useState } from "react";

const Header = ({ fetchNoticias }) => {
  const [ocultar, setOcultar] = useState(true);

  const toggle = () => {
    setOcultar(!ocultar);
  };

  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between m-5 flex-wrap bg-white lg:m-0">
        <div className="flex items-center flex-shrink-0 text-black lg:mr-10">
          <p className="text-xl  font-black tracking-tight">
            Bing <span className="text-secondary">News</span>
          </p>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text border-gray-200"
            onClick={toggle}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {ocultar && (
          <div className="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
            <div className="text-lg text-black lg:flex-grow ">
              <button
                onClick={() => {
                  fetchNoticias("Noticias", "Day");
                }}
                className="block lg:inline-block p-5  border-b-2 border-gray-100 lg:border-white lg:hover:text-white hover:bg-secondary"
              >
                Home
              </button>

              <button
                onClick={() => {
                  fetchNoticias("Negocios", "Week");
                }}
                className="block lg:inline-block p-5 border-b-2 border-gray-100 lg:border-white hover:bg-secondary hover:text-white visited:bg-secondary"
              >
                Negocios
              </button>

              <button
                onClick={() => {
                  fetchNoticias("Entretenimiento", "Week");
                }}
                className="block lg:inline-block p-5 border-b-2 border-gray-100 lg:border-white hover:bg-secondary hover:text-white"
              >
                Entretenimiento
              </button>

              <button
                onClick={() => {
                  fetchNoticias("Economia digital", "Week");
                }}
                className="block lg:inline-block p-5 border-b-2 border-gray-100 lg:border-white hover:bg-secondary hover:text-white"
              >
                Economía Digital
              </button>
            </div>
          </div>
        )}

        {/* aaa */}

        {!ocultar && (
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
            <div className="text-lg text-black lg:flex-grow ">
              <button
                onClick={() => {
                  fetchNoticias("Noticias", "Day");
                }}
                className="block lg:inline-block p-5  border-b-2 border-gray-100 lg:border-white lg:hover:text-white hover:bg-secondary"
              >
                Home
              </button>

              <button
                onClick={() => {
                  fetchNoticias("Negocios", "Week");
                }}
                className="block lg:inline-block p-5 border-b-2 border-gray-100 lg:border-white hover:bg-secondary hover:text-white visited:bg-secondary"
              >
                Negocios
              </button>

              <button
                onClick={() => {
                  fetchNoticias("Entretenimiento", "Week");
                }}
                className="block lg:inline-block p-5 border-b-2 border-gray-100 lg:border-white hover:bg-secondary hover:text-white"
              >
                Entretenimiento
              </button>

              <button
                onClick={() => {
                  fetchNoticias("Economia digital", "Week");
                }}
                className="block lg:inline-block p-5 border-b-2 border-gray-100 lg:border-white hover:bg-secondary hover:text-white"
              >
                Economía Digital
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
