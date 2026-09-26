type SkillGroup = {
  categoria: string;
  nome: string;
  habilidades: string[];
};

const categoryColors: Record<string, string> = {
  backend: "bg-blue-900",
  frontend: "bg-emerald-900",
  data: "bg-amber-800",
  tools: "bg-rose-900",
  methodologies: "bg-violet-900",
  "soft-skills": "bg-teal-900",
};

const Skill = ({ skills }: { skills: SkillGroup[] }) => {
  return (
    <div className="flex w-full flex-col gap-4">
      {skills.map(({ categoria, nome, habilidades }) => (
        <section key={categoria} className="flex flex-col gap-2">
          <h4 className="font-semibold">{nome}</h4>
          <div className="flex flex-wrap gap-2">
            {habilidades.map((skill) => (
              <span
                key={skill}
                className={`flex items-center px-3 h-8 ${categoryColors[categoria] ?? "bg-cyan-950"} text-gray-50 rounded-md`}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Skill;
