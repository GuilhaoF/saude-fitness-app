import { useNavigate } from "react-router-dom";
import { Carousel } from "../../components/carousel/carousel";
import { Navbar } from "../../components/navbar/navbar";

export function Home() {
  const navigate = useNavigate();

  function handleGetStarted() {
    navigate("/formOptions");
  }

  return (
    <div>
      <Navbar title="Tela Inicial" />
      <div className="flex justify-center items-center min-h-screen py-8 flex-col">
        <Carousel />
        <div className="my-3 px-16 text-center">
          <span className="text-lg text-center font-bold  text-gray-500 mr-2">
            Bem-vindo ao Diet Super, seu super app de saúde! Nosso aplicativo
            oferece uma série de ferramentas inovadoras para cuidar da sua saúde
            de maneira completa e personalizada. Uma das funcionalidades mais
            poderosas é a Geração de Dieta Inteligente, onde utilizamos a
            tecnologia de Inteligência Artificial para criar dietas
            personalizadas com base nas suas necessidades e preferências
            alimentares.
          </span>
        </div>
        <button
          className="flex justify-center items-center mx-4 btn-wide btn-circle py-9 bg-green-500 text-white"
          onClick={handleGetStarted}
        >
          <span className=" text-center text-xl">Get Started</span>
        </button>
      </div>
    </div>
  );
}
