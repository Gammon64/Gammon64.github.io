import { Dictionary, getDictionary, Locale } from "@/app/[lang]/dictionaries";

const ExperienciaTarefas = async ({
  tarefas,
  dict,
}: {
  tarefas: string[];
  dict: Dictionary;
}) => {
  return (
    <div>
      <p className="italic text-xs text-cyan-600">{dict.ui.tarefas}</p>
      <ul className="list-disc list-inside marker:text-cyan-600">
        {tarefas.map((tarefa, index) => (
          <li key={index} className="text-sm font-bold p-0.5">
            {tarefa}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienciaTarefas;
