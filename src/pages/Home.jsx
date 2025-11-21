import React from "react";
import { motion } from "framer-motion";
import { GiHistogram } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import ConsultaForm from "../components/ConsultaForm";
import Noticias from "../components/Noticias";
import ComoUsar from "../components/ComoUsar";

const Home = () => {
  const issmLinks = [
    {
      name: "Portal BSA",
      url: "#",
      icon: (
        <GiHistogram
          size={55}
          className="text-issmBlue group-hover:text-white duration-300"
        />
      ),
      text: "Aceda ao Portal BSA para mais informações.",
    },
    {
      name: "Portal de atendimento ao consumidor",
      url: "#",
      icon: (
        <FaHeadphones
          size={55}
          className="text-issmBlue group-hover:text-white duration-300"
        />
      ),
      text: "Para submissão de reclamações, pedidos de informação e acesso a material de educação financeira e proteção do consumidor.",
    },
    {
      name: "Portal de Licenciamento",
      url: "#",
      icon: (
        <BiSolidUser
          size={55}
          className="text-issmBlue group-hover:text-white duration-300"
        />
      ),
      text: "Para submissão e acompanhamento de processos de autorização e registo de entidades do setor.",
    },
    {
      name: "Portal de Agentes e Promotores",
      url: "#",
      icon: (
        <FaUsers
          size={55}
          className="text-issmBlue group-hover:text-white duration-300"
        />
      ),
      text: "Para gestão de registos e cumprimento de obrigações por parte destes profissionais.",
    },
  ];
  return (
    <>
      <div className="max-w-7xl container mx-auto px-4 flex flex-col items-center justify-center mt-6 font-montserrat">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-6 mt-6 bg-issmBlue py-12 md:py-24 px-4 md:px-8">
          {/* Imagem do carro */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              className="flex justify-center"
            >
              <img
                src="/mercedes.png"
                alt="Mercedes"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>

          {/* Formulário e texto */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-4xl text-white font-semibold text-center md:text-start mb-4 md:mb-6">
              Verificar Seguro Através da{" "}
              <span className="text-issmYellow">Matrícula</span>
            </h1>
            <p className="text-lg text-white text-center md:text-start mb-6">
              Bem-vindo ao nosso sistema de verificação de seguro veicular.
              Insira a matrícula do veículo para verificar o status do seguro.
            </p>

            {/* ConsultaForm */}
            <ConsultaForm />
          </div>
        </div>

        <div className="w-full flex flex-col mt-5 p-4 justify-center items-center">
          <div className="max-w-4xl flex flex-col text-center my-6 space-y-4">
            <h1 className="text-3xl font-semibold text-issmBlue">
              Portal de Serviços
            </h1>
            <p className="text-gray-600">
              Esta área é a sua plataforma digital centralizada para aceder a
              diversos serviços e ferramentas essenciais, desenhados para
              facilitar a interação entre o Instituto, as entidades
              supervisionadas (seguradoras, resseguradoras, mediadores, etc.) e
              o público em geral.
            </p>
          </div>
          {/* Sidebar de links uteis */}
          <div className="flex flex-row flex-wrap gap-2 p-2 justify-center">
            {issmLinks.map((link, index) => (
              <div
                key={index}
                className="w-72 group flex flex-col rounded-bl-4xl rounded-tr-4xl p-4 space-y-2 items-center  bg-boxBackground hover:bg-tertiary duration-300"
              >
                <div className="mt-0">{link.icon}</div>
                <a href={link.url} className="text-center">
                  <span className="text-md text-center font-semibold group-hover:text-white duration-300">
                    {link.name}
                  </span>
                </a>
                <p className="text-center group-hover:text-white duration-300">
                  {link.text}
                </p>
              </div>
            ))}
          </div>
        </div>
         <ComoUsar />
        {/* Noticias  */}
        <div className="w-full flex flex-col p-2 mt-6 justify-center items-center">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-semibold text-issmBlue">
              Noticias e Destaques
            </h1>
          </div>
          <Noticias />
        
        </div>
      </div>
    </>
  );
};

export default Home;
