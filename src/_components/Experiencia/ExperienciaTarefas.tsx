import React from "react";

const ExperienciaTarefas = ({ tarefas }: { tarefas: string[] }) => {
  return (
    <div>
      <p className="italic text-xs text-cyan-600">Conquistas/Tarefas</p>
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
