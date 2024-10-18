import {
  BotIcon,
  CalculatorIcon,
  Dumbbell,
  HeartHandshake,
} from "lucide-react";
import { Link } from "react-router-dom";

export function OptionsScreen() {
  return (
    <div>
      <div className="min-h-screen lg:h-auto py-8">
        <div className="grid grid-cols-2 gap-4 p-4 lg:p-16">
          <Link
            to={"/dietIntelligent"}
            className="btn min-h-20  btn-primary lg:btn-lg "
          >
            <BotIcon size={24} />
            Gerar Dieta Inteligente
          </Link>
          <Link to={""} className="btn min-h-20 btn-primary lg:btn-lg">
            <CalculatorIcon size={24} />
            Calcular IMC
          </Link>
          <Link to={""} className="btn min-h-20 btn-primary lg:btn-lg">
            <HeartHandshake size={24} />
            Dicas de Saúde
          </Link>
          <Link to={""} className="btn min-h-20 btn-primary lg:btn-lg">
            <Dumbbell size={24} />
            Exercícios Físicos Gerados IA
          </Link>
        </div>
      </div>
    </div>
  );
}
