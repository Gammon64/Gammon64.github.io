import { Experiencia } from "@/_components/Experiencia";
import { Formacao } from "@/_components/Formacao";
import Link from "@/_components/Link";
import { Projeto } from "@/_components/Projeto";
import Skill from "@/_components/Skill";
import Image from "next/image";
import {
  FaAt,
  FaGithub,
  FaLinkedin,
  FaLocationPin,
  FaMobile,
} from "react-icons/fa6";
import token from "@/app/hugo_token.png";
import { getDictionary, Locale } from "./dictionaries";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pt" }];
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  // Internationalization
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main>
      <header className="flex flex-col">
        {/* Resumo */}
        <div className="flex items-center p-6 px-16 gap-2 bg-cyan-900">
          <div>
            <h1>{dict.perfil.nome}</h1>
            <h3>{dict.perfil.profissao}</h3>
            <p className="text-gray-50 tracking-tighter">
              {dict.perfil.resumo}
            </p>
          </div>
          {/* Foto */}
          <Image src={token} alt="Token de perfil" width={160} height={160} />
        </div>
        {/* Links */}
        <div className="flex justify-evenly p-2 gap-2 bg-cyan-950">
          <Link icon={FaAt} href={`mailto:${dict.perfil.contato.email}`}>
            {dict.perfil.contato.email}
          </Link>
          <Link
            icon={FaMobile}
            href={`tel:${dict.perfil.contato.telefone.replace(/[\s-]/g, "")}`}
          >
            {dict.perfil.contato.telefone}
          </Link>
          <Link icon={FaLocationPin} href={dict.perfil.contato.endereco.maps}>
            {dict.perfil.contato.endereco.descricao}
          </Link>
          <Link icon={FaLinkedin} href={dict.perfil.contato.sociais.linkedin}>
            LinkedIn
          </Link>
          <Link icon={FaGithub} href={dict.perfil.contato.sociais.github}>
            GitHub
          </Link>
        </div>
      </header>
      <div className="flex p-8 pr-16 gap-8">
        {/* Experiencia */}
        <section className="flex flex-col gap-4">
          <h2>{dict.ui.experiencia}</h2>
          {dict.experiencias.map((experiencia) => (
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
              <Experiencia.Tarefas tarefas={experiencia.tarefas} dict={dict} />
            </Experiencia.Root>
          ))}
        </section>
        {/* Dados Técnicos */}
        <aside className="flex flex-col gap-16">
          {/* Skills */}
          <div className="flex flex-col gap-4">
            <h2>{dict.ui.habilidades}</h2>
            <Skill skills={dict.habilidades} />
          </div>
          {/* Formação */}
          <div className="flex flex-col gap-4">
            <h2>{dict.ui.formacao}</h2>
            {dict.formacoes.map((formacao) => (
              <Formacao.Root key={formacao.titulo}>
                <Formacao.Titulo
                  titulo={formacao.titulo}
                  subtitulo={formacao.subtitulo}
                />
                <Formacao.Timestamp
                  periodo={formacao.periodo}
                  localidade={formacao.localidade}
                />
                {formacao.certificado && (
                  <Formacao.Link href={formacao.certificado} dict={dict}>
                    Alura
                  </Formacao.Link>
                )}
              </Formacao.Root>
            ))}
          </div>
          {/* Projetos */}
          <div className="flex flex-col gap-4">
            <h2>{dict.ui.portifolio}</h2>
            {dict.portifolio.map((projeto) => (
              <Projeto.Root key={projeto.titulo}>
                <Projeto.Titulo>{projeto.titulo}</Projeto.Titulo>
                <Projeto.Descricao>{projeto.descricao}</Projeto.Descricao>
                <Projeto.Link href={projeto.link} dict={dict}>
                  GitHub
                </Projeto.Link>
              </Projeto.Root>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
