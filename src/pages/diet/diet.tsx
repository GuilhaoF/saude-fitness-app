import { z } from "zod";
import { Navbar } from "../../components/navbar/navbar";
import {
  genderOptions,
  levelOptions,
  objectiveOptions,
} from "../../utils/data-options";
const schema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório" }),
  weight: z.string().min(1, { message: "O peso é obrigatório" }),
  age: z.string().min(1, { message: "A idade é obrigatória" }),
  height: z.string().min(1, { message: "A altura é obrigatória" }),
});

export function Diet() {
  return (
    <div>
      <Navbar title="Gerar Dieta com IA" />
      <div className="min-h-screen lg:h-auto my-4 py-8 px-4 sm:px-8 lg:px-16">
        <form className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Digite seu nome"
            className="input-md bg-input w-full sm:w-3/4 lg:w-1/2 sm:p-4"
          />
          <input
            type="text"
            placeholder="Digite sua altura"
            className="input-md bg-input w-full sm:w-3/4 lg:w-1/2 sm:p-4"
          />
          <input
            type="text"
            placeholder="Digite sua idade"
            className="input-md bg-input w-full sm:w-3/4 lg:w-1/2 sm:p-4"
          />
          <input
            type="text"
            placeholder="Digite seu peso"
            className="input-md bg-input w-full sm:w-3/4 lg:w-1/2 sm:p-4"
          />

          <select
            id="gender"
            name="gender"
            className="mt-1 block w-full sm:w-3/4 lg:w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {genderOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            id="level"
            name="level"
            className="mt-1 block w-full sm:w-3/4 lg:w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {levelOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            id="level"
            name="level"
            className="mt-1 block w-full sm:w-3/4 lg:w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {objectiveOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <button type="submit" className="btn w-full sm:w-3/4 lg:w-1/2">
            Gerar Dieta
          </button>
        </form>
      </div>
    </div>
  );
}
