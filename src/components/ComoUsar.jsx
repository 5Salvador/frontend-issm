// InsuranceSteps.tsx
import React from "react";
import { FaCar, FaSearch, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Digite a matrícula",
    description: "Insira a matrícula completa do veículo no campo de verificação.",
    icon: <FaCar className="text-4xl text-blue-500" />,
  },
  {
    id: 2,
    title: "Clique em Verificar",
    description: "Pressione o botão de verificação para obter o status do seguro do veículo.",
    icon: <FaSearch className="text-4xl text-green-500" />,
  },
  {
    id: 3,
    title: "Confira os detalhes",
    description: "Veja se o seguro está ativo, a seguradora e a validade da apólice.",
    icon: <FaCheckCircle className="text-4xl text-purple-500" />,
  },
];

const InsuranceSteps = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-issmBlue text-center my-16">Como verificar seu seguro</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-issmBlue">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceSteps;
