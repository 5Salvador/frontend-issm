import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa"; 

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Verificação de Seguro", href: "/verificacao" },
    { name: "Sobre Nós", href: "https://www.issm.gov.mz/sobre-nos/" },
    { namne: "Serviços", href: "/servicos" },
    { name: "Contato", href: "https://www.issm.gov.mz/contacto/" },
  ];
  return (
    <nav className="static top-0 left-0 w-full bg-white shadow-md font-montserrat">
      <div className="w-full bg-blue-950 px-4 p-2">
        <p className="text-center text-white">
          Instituto de Supervisão de Seguros de Moçambique - ISSM © 2025
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-28 h-auto space-y-6">
        {/* Logo Section */}
        <div className="w-64 flex items-center">
          <img src="/LOGO-ISSM-2025.png" alt="" className="mt-4" />
        </div>

        {/* Linha Verde Section */}
        <div className="flex flex-row justify-between items-center gap-2">
          <FaHeadphones className="text-2xl text-blue-950 hover:text-yellow-700 duration-300" />
          <p>
            LINHA VERDE: <span className="text-yellow-600">800 500 600</span>
          </p>
        </div>

        {/* Redes Sociais Icones Section */}
        <div className="flex flex-row gap-2">
          <div className="flex border-2 border-blue-950 bg-white p-2 rounded-2xl hover:bg-yellow-600 duration-300 cursor-pointer">
            <FaFacebook className="text-blue-950" />
          </div>
          <div className="flex border-2 border-blue-950 bg-white p-2 rounded-2xl hover:bg-yellow-600 duration-300 cursor-pointer">
            <FaYoutube className="text-blue-950" />
          </div>
          <div className="flex border-2 border-blue-950 bg-white p-2 rounded-2xl hover:bg-yellow-600 duration-300 cursor-pointer">
            <FaInstagram className="text-blue-950" />
          </div>
        </div>

        {/* Email Icone Section */}
        <div className="flex flex-row justify-between items-center gap-2 border-2 border-blue-950 bg-white p-2 rounded-2xl hover:bg-yellow-600 duration-300 cursor-pointer">
          <MdEmail className="text-2xl text-blue-950" />

          <p>info@issm.gov.mz</p>
        </div>

        {/* 50 anos Logo */}
        <div className="w-38 flex items-center">
          <img src="/50anos.png" alt="" />
        </div>
      </div>
      <div className="w-full bg-blue-950 px-4 p-2">
        {/* <p className='text-center text-white'>Comemorando 50 anos de excelência na supervisão de seguros em Moçambique
                </p> */}

        {/*Mobile Menu Button */}
        <div className="flex justify-end md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes className="text-3xl text-white hover:text-yellow-600 duration-300" />
            ) : (
              <GiHamburgerMenu className="text-3xl text-white hover:text-yellow-600 duration-300" />
            )}
          </button>
        </div>
        {/* NavLinks Section Desktop*/}
        <div className="hidden md:flex flex-row justify-center items-center gap-8 p-2">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-white hover:text-yellow-600 duration-300 font-medium`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* NavLinks Section Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-4 mt-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-white hover:text-yellow-600 duration-300 font-medium"
                  
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
