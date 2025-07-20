const Skill = ({ skills }: { skills: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2 w-80">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="flex items-center p-4 h-8 bg-cyan-950 text-gray-50 rounded-md"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default Skill;
