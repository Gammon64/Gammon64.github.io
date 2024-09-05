import React from "react";

const ExperienciaTarefas = ({ tarefas }: { tarefas: string[] }) => {
  return (
    <div>
      <h4>Conquistas/Tarefas</h4>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienciaTarefas;
