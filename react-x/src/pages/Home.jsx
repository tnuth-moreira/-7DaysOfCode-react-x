import { App } from "../layouts/App";
import { useState } from "react";

export const Home = () => {
  const [message, setMessage] = useState("");

  const handleLogout = () => {
    console.log("SAINDO DA APLICACAO");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("PUBLICANDO UM NOVO TWEET");
  };

  return (
    <App>
      <div className="bg-gray-100 min-h-screen w-screen">
        <div className="flex justify-between px-5 py-2 border-b bg-white">
          <span className="font-sans text-lg text-sky-500 lowercase">
            React-X
          </span>
          <div>
            <span className="font-sans text-sm text-gray-500 mr-2">
              email@exemplo.com
            </span>
            <button
              className="bg-red-500 text-white lowercase rounded px-2 py-1 text-sm hover:bg-red-600"
              onClick={handleLogout}
              type="button"
            >
              Sair
            </button>
          </div>
        </div>

        <div className="container mx-auto p-10">
          <form onSubmit={handleFormSubmit}>
            <p className="text-sm text-gray-600 pl-2">Reacte agora mesmo...</p>
            <div>
              <textarea
                className="border rounded w-full resize-none text-gray-500 p-5 my-2"
                maxLength={255}
                onChange={(event) => setMessage(event.target.value)}
                rows={3}
                value={message}
              />
            </div>
            <div className="flex justify-between">
              {message.length < 255 ? (
                <p className="text-sm text-green-600">
                  Você ainda pode digitar {255 - message.length} caracteres
                </p>
              ) : (
                <p className="text-sm text-red-600">
                  Você esgotou a quantidade de caracteres
                </p>
              )}
              <button className="bg-sky-500 p-2 rounded text-white hover:bg-sky-600">
                reactar
              </button>
            </div>
          </form>

          <div className="pt-5">
            <div className="border px-4 py-2 bg-white rounded mt-5 first:mt-0">
              <p className="text-gray-500 py-2 mb-5">
                Pagina principal com estrutura e estilos
              </p>
              <div className="flex justify-between">
                <span className="text-sm text-sky-500">
                  email@exemplo.com.br
                </span>
                <time className="text-xs text-gray-500">
                  01/01/2024 7:00:00 PM
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
};
