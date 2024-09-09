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
import token from "./hugo_token.png";

export default function Home() {
  return (
    <main>
      <header className="flex flex-col">
        {/* Resumo */}
        <div className="flex items-center p-6 px-16 gap-2 bg-cyan-900">
          <div>
            <h1>Hugo Henrique Bolandin Barbosa</h1>
            <h3>Desenvolvedor FullStack</h3>
            <p className="text-gray-50 tracking-tighter">
              Impulsionado por um projeto de tese em eletrotécnica, descobri
              minha vocação e comecei minha jornada com Java, anos depois
              transicionei para React.js como minha estrutura preferida.
              Mantenho projetos pessoais com Next.js. Sou normalmente nomeado
              como metódico, gosto de compartilhar minhas experiências com
              outros, como também aprender com estes.
            </p>
          </div>
          {/* Foto */}
          <Image src={token} alt="Token de perfil" width={160} height={160} />
        </div>
        {/* Links */}
        <div className="flex justify-evenly p-2 gap-2 bg-cyan-950">
          <Link icon={FaAt} href="mailto:hugo.hbs64@gmail.com">
            hugo.hbs64@gmail.com
          </Link>
          <Link icon={FaMobile} href="tel:+5518981409164">
            +55 18 98140-9164
          </Link>
          <Link
            icon={FaLocationPin}
            href="https://maps.app.goo.gl/wjstZdKgUDQE1uM39"
          >
            Ilha Solteira, Brasil
          </Link>
          <Link icon={FaLinkedin} href="https://www.linkedin.com/in/hugo-hbb/">
            LinkedIn
          </Link>
          <Link icon={FaGithub} href="https://github.com/Gammon64">
            GitHub
          </Link>
        </div>
      </header>
      <div className="flex p-8 pr-16 gap-8">
        {/* Experiencia */}
        <section className="flex flex-col gap-4">
          <h2>Experiência</h2>
          <Experiencia.Root>
            <Experiencia.Titulo
              titulo="Desenvolvedor Web"
              subtitulo="Exiti Soluções Digitais"
            />
            <Experiencia.Timestamp
              periodo="03/2022 - 09/2024"
              localidade="Ilha Solteira, Brasil"
            />
            <Experiencia.Descricao>
              Desenvolvedora de softwares personalizados, aplicativos para
              internet e dispositivos móveis para empresas em geral.
            </Experiencia.Descricao>
            <Experiencia.Tarefas
              tarefas={[
                "Desenvolver e manter aplicações em Java ServerFaces, Spring e Next.js",
              ]}
            />
          </Experiencia.Root>

          <Experiencia.Root>
            <Experiencia.Titulo
              titulo="Tech Lead"
              subtitulo="Exiti Soluções Digitais"
            />
            <Experiencia.Timestamp
              periodo="01/2024 – 06/2024"
              localidade="Ilha Solteira, Brasil"
            />
            <Experiencia.Descricao>
              Desenvolvedora de softwares personalizados, aplicativos para
              internet e dispositivos móveis para empresas em geral.
            </Experiencia.Descricao>
            <Experiencia.Tarefas
              tarefas={[
                "Responsável pela organização dos Sprints, juntamente com as reuniões necessárias com a equipe de desenvolvimento.",
                "Analisar a qualidade e organizar os Pull Requests da equipe.",
                "Desenvolver e manter aplicações em Java ServerFaces, Spring e Next.js",
              ]}
            />
          </Experiencia.Root>

          <Experiencia.Root>
            <Experiencia.Titulo
              titulo="Analista de Sistemas"
              subtitulo="Ceres Sistemas"
            />
            <Experiencia.Timestamp
              periodo="10/2020 - 09/2022"
              localidade="Pereira Barreto, Brasil"
            />
            <Experiencia.Descricao>
              Automação de laboratórios químicos e agricultura
            </Experiencia.Descricao>
            <Experiencia.Tarefas
              tarefas={[
                "Responsável por desenvolver e manter uma aplicação web em Java Server Faces, Java e um serviço web em JAX-RS além de fornecer suporte ao cliente.",
              ]}
            />
          </Experiencia.Root>

          <Experiencia.Root>
            <Experiencia.Titulo
              titulo="Técnico em TI"
              subtitulo="Ceres Sistemas"
            />
            <Experiencia.Timestamp
              periodo="01/2019 - 10/2020"
              localidade="Pereira Barreto, Brasil"
            />
            <Experiencia.Descricao>
              Automação de laboratórios químicos e agricultura
            </Experiencia.Descricao>
            <Experiencia.Tarefas
              tarefas={[
                "Responsável por desenvolver e manter uma aplicação web em Java Server Faces além de fornecer suporte ao cliente.",
              ]}
            />
          </Experiencia.Root>
        </section>
        {/* Dados Técnicos */}
        <aside className="flex flex-col gap-16">
          {/* Skills */}
          <div className="flex flex-col gap-4">
            <h2>Habilidades</h2>
            <Skill
              skills={"JIRA,Linux,Java,Spring,Firebase,Next.js,PostgreSQL,Node.js,React,PrismaORM".split(
                ","
              )}
            />
          </div>
          {/* Formação */}
          <div className="flex flex-col gap-4">
            <h2>Formação Acadêmica</h2>
            <Formacao.Root>
              <Formacao.Titulo
                titulo="Curso Técnico em informática"
                subtitulo="ETEC"
              />
              <Formacao.Timestamp
                periodo="01/2018 - 12/2018"
                localidade="Ilha Solteira, SP, Brasil"
              />
            </Formacao.Root>
          </div>
          {/* Projetos */}
          <div className="flex flex-col gap-4">
            <h2>Projetos Pessoais</h2>
            <Projeto.Root>
              <Projeto.Titulo>Adashmin</Projeto.Titulo>
              <Projeto.Descricao>
                Projeto fullstack de gerência de funcionários usando Next.js e
                NestJs.
              </Projeto.Descricao>
              <Projeto.Link href="https://github.com/Gammon64/Adashmin">
                GitHub
              </Projeto.Link>
            </Projeto.Root>

            <Projeto.Root>
              <Projeto.Titulo>Ocorrência API</Projeto.Titulo>
              <Projeto.Descricao>
                Projeto demonstração de API Rest usando Spring, PostgreSQL e
                Min.io em containers Docker
              </Projeto.Descricao>
              <Projeto.Link href="https://github.com/Gammon64/ocorrencia-api">
                GitHub
              </Projeto.Link>
            </Projeto.Root>
          </div>
        </aside>
      </div>
    </main>
  );
}
