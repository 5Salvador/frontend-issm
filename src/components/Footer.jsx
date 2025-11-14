import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const contactLinks = [
    {
      name: " Endereço: Av. 24 de Julho, Shopping 24, nº 123, Maputo, Moçambique",
    },
    {
      name: "Telefone: +258 21 123 456",
    },
    {
      name: "Email: info@issm.gov.mz",
    },
    {
      name: "Website: www.issm.gov.mz",
    },
  ];

  const institucionalLinks = [
    { name: "Legislação", path: "/" },
    { name: "Requisitos", path: "/" },
    { name: "Mercado Segurador", path: "/" },
    { name: "Informação Estatística", path: "/" },
    { name: "Consumidor", path: "/" },
  ];

  const especialidadesLinks = [
    { name: "Supervisão de Seguros", path: "/" },
    { name: "Fiscalização", path: "/" },
    { name: "Branqueamento de Capitais", path: "/" },
  ];

  const redesSociaisLinks = [
    { icon: <FaFacebook size={16}/>, url: "" },
    { icon: <FaYoutube size={16}/>, url: "" },
    { icon: <FaInstagram size={16}/>, url: "" },
    { icon: <FaLinkedin size={16}/>, url: "" },

  ]
  return (
    <footer className="w-full flex flex-col p-2 px-4 space-y-3 bg-blue-950 font-roboto mt-6">
      <div className="w-full flex flex-col md:flex-row justify-around items-start  space-y-4 md:space-y-0 mt-5">
        {/* Primeira coluna */}
        <div className="flex flex-col items-center mb-4 md:mb-0 md:items-start">
          <h2 className="text-tertiary font-semibold text-lg mb-2">
            Contactos
          </h2>
          <div className="flex flex-col space-y-2">
            {contactLinks.map((link, index) => (
              <span
                key={index}
                className="text-white hover:text-tertiary duration-300"
              >
                {link.name}
              </span>
            ))}
          </div>
        </div>
        {/* Segunda coluna */}
        <div className="flex flex-col items-center mb-4 md:mb-0 md:items-start">
          <h2 className="text-tertiary font-semibold text-lg mb-2">
            Intitucional
          </h2>
          <div className="flex flex-col space-y-2">
            {institucionalLinks.map((link, index) => (
              <Link key={index} to={link.path}>
                <span className="text-white hover:text-tertiary duration-300">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        {/* Terceira coluna */}
        <div className="flex flex-col items-center mb-4 md:mb-0 md:items-start">
          <h2 className="text-tertiary font-semibold text-lg mb-2">
            Nossas Especialidades
          </h2>
          <div className="flex flex-col space-y-2 text-white">
            {especialidadesLinks.map((link, index) => (
              <Link key={index} to={link.path}>
                <span className="text-white hover:text-tertiary duration-300">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        {/* Quarta coluna Redes sociais */}
        <div className="flex flex-col">
          <h2 className="text-tertiary font-semibold text-lg mb-2">Redes Sociais</h2>
        <div className="flex flex-row gap-2">
            {redesSociaisLinks.map((link, index) => (
                <Link key={index} to={link.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-tertiary duration-300 text-2xl p-2 border rounded-4xl">
                  {link.icon}
                </Link>
            ))}
        </div>
        </div>
      </div>
      <p className="text-center text-white">
        &copy; {new Date().getFullYear()} Instituto de Supervisão de Seguros de
        Moçambique. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
