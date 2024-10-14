import { Experiencia } from "@/_components/Experiencia";
import { Formacao } from "@/_components/Formacao";
import Link from "@/_components/Link";
import { Projeto } from "@/_components/Projeto";
import Skill from "@/_components/Skill";
import mock_perfil from "@/mock/perfil.json";
import mock_experiencias from "@/mock/experiencias.json";
import mock_habilidades from "@/mock/habilidades.json";
import mock_formacoes from "@/mock/formacoes.json";
import mock_portifolio from "@/mock/portifolio.json";
import Image from "next/image";
import {
  FaAt,
  FaGithub,
  FaLinkedin,
  FaLocationPin,
  FaMobile,
} from "react-icons/fa6";
import token from "./hugo_token.png";

export default function Home() {
  return (
    <main>
      <header className="flex flex-col">
        {/* Resumo */}
        <div className="flex items-center p-6 px-16 gap-2 bg-cyan-900">
          <div>
            <h1>{mock_perfil.nome}</h1>
            <h3>{mock_perfil.profissao}</h3>
            <p className="text-gray-50 tracking-tighter">
              {mock_perfil.resumo}
            </p>
          </div>
          {/* Foto */}
          <Image src={token} alt="Token de perfil" width={160} height={160} />
        </div>
        {/* Links */}
        <div className="flex justify-evenly p-2 gap-2 bg-cyan-950">
          <Link icon={FaAt} href={`mailto:${mock_perfil.contato.email}`}>
            {mock_perfil.contato.email}
          </Link>
          <Link
            icon={FaMobile}
            href={`tel:${mock_perfil.contato.telefone.replace(/[\s-]/g, "")}`}
          >
            {mock_perfil.contato.telefone}
          </Link>
          <Link icon={FaLocationPin} href={mock_perfil.contato.endereco.maps}>
            {mock_perfil.contato.endereco.descricao}
          </Link>
          <Link icon={FaLinkedin} href={mock_perfil.contato.sociais.linkedin}>
            LinkedIn
          </Link>
          <Link icon={FaGithub} href={mock_perfil.contato.sociais.github}>
            GitHub
          </Link>
        </div>
      </header>
      <div className="flex p-8 pr-16 gap-8">
        {/* Experiencia */}
        <section className="flex flex-col gap-4">
          <h2>Experiência</h2>
          {mock_experiencias.map((experiencia) => (
            <Experiencia.Root key={experiencia.titulo}>
              <Experiencia.Titulo
                titulo={experiencia.titulo}
                subtitulo={experiencia.subtitulo}
              />
              <Experiencia.Timestamp
                periodo={experiencia.periodo}
                localidade={experiencia.localidade}
              />
              <Experiencia.Descricao>
                {experiencia.descricao}
              </Experiencia.Descricao>
              <Experiencia.Tarefas tarefas={experiencia.tarefas} />
            </Experiencia.Root>
          ))}
        </section>
        {/* Dados Técnicos */}
        <aside className="flex flex-col gap-16">
          {/* Skills */}
          <div className="flex flex-col gap-4">
            <h2>Habilidades</h2>
            <Skill skills={mock_habilidades} />
          </div>
          {/* Formação */}
          <div className="flex flex-col gap-4">
            <h2>Formação Acadêmica</h2>
            {mock_formacoes.map((formacao) => (
              <Formacao.Root key={formacao.titulo}>
                <Formacao.Titulo
                  titulo={formacao.titulo}
                  subtitulo={formacao.subtitulo}
                />
                <Formacao.Timestamp
                  periodo={formacao.periodo}
                  localidade={formacao.localidade}
                />
              </Formacao.Root>
            ))}
          </div>
          {/* Projetos */}
          <div className="flex flex-col gap-4">
            <h2>Projetos Pessoais</h2>
            {mock_portifolio.map((projeto) => (
              <Projeto.Root key={projeto.titulo}>
                <Projeto.Titulo>{projeto.titulo}</Projeto.Titulo>
                <Projeto.Descricao>{projeto.descricao}</Projeto.Descricao>
                <Projeto.Link href={projeto.link}>GitHub</Projeto.Link>
              </Projeto.Root>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
