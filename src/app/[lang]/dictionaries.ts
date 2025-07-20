import "server-only";

type Dictionary = {
  ui: any;
  perfil: {
    nome: string;
    profissao: string;
    resumo: string;
    contato: {
      email: string;
      telefone: string;
      endereco: {
        maps: string;
        descricao: string;
      };
      sociais: {
        linkedin: string;
        github: string;
      };
    };
  };
  experiencias: {
    titulo: string;
    subtitulo: string;
    periodo: string;
    localidade: string;
    descricao: string;
    tarefas: string[];
  }[];
  habilidades: string[];
  formacoes: {
    titulo: string;
    subtitulo: string;
    periodo: string;
    localidade: string;
    certificado?: string;
  }[];
  portifolio: {
    titulo: string;
    descricao: string;
    link: string;
  }[];
};

export type Locale = "pt" | "en";

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  const [ui, perfil, experiencias, habilidades, formacoes, portifolio] =
    await Promise.all([
      import(`@/mocks/${locale}/ui.json`).then((module) => module.default),

      import(`@/mocks/${locale}/perfil.json`).then((module) => module.default),

      import(`@/mocks/${locale}/experiencias.json`).then(
        (module) => module.default
      ),

      import(`@/mocks/${locale}/habilidades.json`).then((module) => module.default),

      import(`@/mocks/${locale}/formacoes.json`).then(
        (module) => module.default
      ),

      import(`@/mocks/${locale}/portifolio.json`).then(
        (module) => module.default
      ),
    ]);

  return { ui, perfil, experiencias, habilidades, formacoes, portifolio };
};
