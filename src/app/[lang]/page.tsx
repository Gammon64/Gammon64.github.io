import { Experiencia } from "@/_components/Experiencia";
import { Formacao } from "@/_components/Formacao";
import Link from "@/_components/Link";
import { Projeto } from "@/_components/Projeto";
import Skill from "@/_components/Skill";
import Image from "next/image";
import {
  FaArrowUpRightFromSquare,
  FaAt,
  FaGithub,
  FaLinkedin,
  FaLocationPin,
  FaMobile,
} from "react-icons/fa6";
import token from "@/app/hugo_token.png";
import { getDictionary, Locale } from "./dictionaries";
import Download from "@/_components/Download";

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
    <>
      <nav className="site-nav" aria-label="Navegação principal">
        <div className="page-shell site-nav__inner">
          <a className="site-nav__brand" href={`/${lang}`} aria-label="Início">
            HB<span>.</span>
          </a>
          <div className="site-nav__links">
            <a href="#projetos">{dict.ui.portifolio}</a>
            <a href="#experiencia">{dict.ui.experiencia}</a>
            <a href="#habilidades">{dict.ui.habilidades}</a>
            <a href="#formacao">{dict.ui.formacao}</a>
          </div>
          <div className="flex gap-2">
            <a
              className="language-switch"
              href={`/${lang === "pt" ? "en" : "pt"}`}
              lang={lang === "pt" ? "en" : "pt"}
              aria-label={lang === "pt" ? "View in English" : "Ver em português"}
            >
              {lang === "pt" ? "EN" : "PT"}
            </a>
            <Download lang={lang} />
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="page-shell hero__inner">
          <div className="hero__copy">
            <p className="hero__eyebrow">{dict.perfil.profissao}</p>
            <h1>{dict.perfil.nome}</h1>
            <p className="hero__summary">{dict.perfil.resumo}</p>
            <div className="hero__contact">
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
                {dict.perfil.contato.sociais.linkedin}
              </Link>
              <Link icon={FaGithub} href={dict.perfil.contato.sociais.github}>
                {dict.perfil.contato.sociais.github}
              </Link>
            </div>
          </div>
          <Image
            className="hero__image"
            src={token}
            alt="Foto de Hugo Henrique"
            width={220}
            height={220}
            priority
          />
        </div>
      </header>

      <main className="page-shell portfolio-content">
        <section className="content-section projects-section" id="projetos">
          <div className="section-heading">
            <p className="section-kicker">{dict.ui.portifolio}</p>
          </div>
          <div className="project-grid">
            {dict.portifolio.map((projeto) => (
              <Projeto.Root key={projeto.titulo}>
                <Projeto.Titulo>{projeto.titulo}</Projeto.Titulo>
                <Projeto.Descricao>{projeto.descricao}</Projeto.Descricao>
                <a
                  className="project-link"
                  href={projeto.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {dict.ui.acesso} <FaArrowUpRightFromSquare aria-hidden="true" />
                </a>
              </Projeto.Root>
            ))}
          </div>
        </section>

        <div className="details-grid">
          <section className="content-section experience-section" id="experiencia">
            <div className="section-heading">
              <p className="section-kicker">{dict.ui.experiencia}</p>
            </div>
            <div className="experience-list">
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
            </div>
          </section>

          <aside className="supporting-content">
            <section className="content-section" id="habilidades">
              <div className="section-heading">
                <p className="section-kicker">{dict.ui.habilidades}</p>
              </div>
              <Skill skills={dict.habilidades} />
            </section>

            <section className="content-section education-section break-before-page" id="formacao">
              <div className="section-heading">
                <p className="section-kicker">{dict.ui.formacao}</p>
              </div>
              <div className="education-list">
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
            </section>
          </aside>
        </div>
      </main>

      <footer className="site-footer">
        <div className="page-shell site-footer__inner">
          <span>{dict.perfil.nome}</span>
          <a href={`mailto:${dict.perfil.contato.email}`}>
            {dict.perfil.contato.email}
          </a>
        </div>
      </footer>
    </>
  );
}
