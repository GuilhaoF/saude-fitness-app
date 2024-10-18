interface Option {
  label: string;
  value: string;
}

export const genderOptions: Option[] = [
  { label: "Masculino", value: "masculino" },
  { label: "Feminino", value: "feminino" },
];

export const levelOptions: Option[] = [
  {
    label: "Sedentário (pouco ou nenhuma atividade física)",
    value: "Sedentário",
  },
  {
    label: "Levemente ativo (exercícios 1 a 3 vezes na semana)",
    value: "Levemente ativo (exercícios 1 a 3 vezes na semana)",
  },
  {
    label: "Moderadamente ativo (exercícios 3 a 5 vezes na semana)",
    value: "Moderadamente ativo (exercícios 3 a 5 vezes na semana)",
  },
  {
    label: "Altamente ativo (exercícios 5 a 7 dia por semana)",
    value: "Altamente ativo (exercícios 5 a 7 dia por semana)",
  },
];

export const objectiveOptions: Option[] = [
  { label: "Emagrecer", value: "emagrecer" },
  { label: "Hipertrofia", value: "Hipertrofia" },
  { label: "Hipertrofia + Definição", value: "Hipertrofia e Definição" },
  { label: "Definição", value: "Definição" },
];
