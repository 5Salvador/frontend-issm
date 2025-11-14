import React, { useRef, useState } from "react";
import axios from "axios";
import Result from "./Result";
import { Loader2, Camera } from "lucide-react";
import { FaCameraRetro } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";

const reCAPTCHA = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const ConsultaForm = () => {
  const [matricula, setMatricula] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  
  const plateRegex = /^[A-Z]{2,3}\d{3}(MC|MP|GZ|IB|NI|CA|NA|ZA|TE|MA|SF)$/;
  const plateRegexWithDash = /^[A-Z]{2,3}-\d{3}-(MC|MP|GZ|IB|NI|CA|NA|ZA|TE|MA|SF)$/;
  const normalizedMatricula = matricula.trim().toUpperCase().replace(/(\w{3})(\d{3})(\w{2})/, '$1-$2-$3');

  //Consulta ao backend pela matrícula manual
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);
    setError(null);

    if (!captchaValue) {
      toast.warning("Por favor complete o reCAPTCHA");
      return;
    }

    if (!matricula) {
      setError("Por favor, insira uma matrícula.");
      return;
    }

    if (!plateRegex.test(normalizedMatricula) && !plateRegexWithDash.test(normalizedMatricula)) {
      setError("Formato de matrícula inválido");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:5000/api/seguro/${matricula}`
      );
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Seguro não encontrado.");
      } else {
        setResult(data);
      }
    } catch (err) {
      setError("Não foi possível conectar ao servidor.");
    } finally {
      setLoading(false);
    }
  };




  //Capturar imagem e enviar
  const handleImageCapture = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setIsScanning(true);

      const response = await fetch("http://localhost:5000/api/scan", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Não foi possível ler a matrícula da imagem.");
        setMatricula("");
      } else {
        // Preenche o input com a matrícula limpa
        setMatricula(data.text.trim());
      }
    } catch (err) {
      console.error("Erro ao escanear:", err);
      alert("Erro ao escanear a matrícula. Tente novamente.");
    } finally {
      setIsScanning(false);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form
        className="mt-6 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 gap-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value.toUpperCase())}
          className="md:w-full bg-white rounded-sm p-2 outline-0 text-gray-500 uppercase"
          placeholder="ABC-123-MC"
        />
        <div className="transform scale-80">
          {" "}
          {/* Added wrapper div with scale transform */}
          <ReCAPTCHA sitekey={reCAPTCHA} onChange={handleCaptchaChange} />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center gap-2 bg-issmYellow rounded-sm p-2 text-white font-medium transition-all duration-300 hover:bg-issmBlue hover:text-boxBackground ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin w-5 h-5" />
              Verificando...
            </>
          ) : (
            "Verificar"
          )}
        </button>

        {/* <label className="flex items-center justify-center p-2.5 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition">
          <span className="">
            <FaCameraRetro className="text-issmYellow" />
          </span>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handleImageCapture}
          />
        </label> */}
      </form>

      <Result data={result} error={error} />
      <ToastContainer position="top-center" />
    </div>
  );
};

export default ConsultaForm;
