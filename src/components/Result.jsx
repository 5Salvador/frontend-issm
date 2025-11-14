import React from "react";
import { CheckCircle, AlertCircle, XCircle } from "lucide-react";

const Result = ({ data, error }) => {
  if (error) {
    return (
      <div className="bg-red-100 border border-red-300 text-red-700 rounded-xl p-4 mt-4 w-full md:w-1/2 text-center shadow-md">
        <XCircle className="inline-block w-6 h-6 mr-2" />
        <span className="font-medium">{error}</span>
      </div>
    );
  }

  if (!data) return null;

  // Função que ignora fuso horário (timezone safe)
  const parseDate = (dateString) => {
    if (!dateString) return null;
    // Garante que pega só a parte "YYYY-MM-DD"
    const [year, month, day] = dateString.substring(0, 10).split("-");
    return new Date(Number(year), Number(month) - 1, Number(day)); // cria data local
  };

  const dataInicio = parseDate(data.data_inicio);
  const dataFim = parseDate(data.data_fim);
  const currentDate = new Date();

  // Ignora horas para comparar apenas a data
  const today = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

  const isActive = today >= dataInicio && today <= dataFim;

   console.log("📅 Status recebido:", data.status);
  console.log("📅 Data início (original):", data.data_inicio);
  console.log("📅 Data fim (original):", data.data_fim);
  console.log("📅 Data início (convertida):", dataInicio);
  console.log("📅 Data fim (convertida):", dataFim);
  console.log("📅 Hoje:", currentDate);
  console.log("✅ Está ativo?", isActive);

  return (
    <div className="bg-white rounded-2xl p-6 mt-6 shadow-lg border border-gray-100 w-full md:w-2/3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Detalhes do Seguro
        </h2>
        {isActive ? (
          <span className="flex items-center text-green-600 font-medium">
            <CheckCircle className="w-5 h-5 mr-1" /> Ativo
          </span>
        ) : (
          <span className="flex items-center text-red-600 font-medium">
            <AlertCircle className="w-5 h-5 mr-1" /> Inativo
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
        <div>
          <p className="text-sm text-gray-500">Matrícula</p>
          <p className="font-medium">{data.matricula}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Proprietário</p>
          <p className="font-medium">{data.tomador_seguro}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Seguradora</p>
          <p className="font-medium">{data.nome_seguradora}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Início</p>
          <p className="font-medium">
            <p className="font-medium">
      {new Date(
        new Date(data.data_inicio).getTime() + 24 * 60 * 60 * 1000
      ).toISOString().slice(0, 10)}
    </p>
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Fim</p>
          <p className="font-medium">
             {new Date(
        new Date(data.data_fim).getTime() + 24 * 60 * 60 * 1000
      ).toISOString().slice(0, 10)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
