export interface Curso {
  id: string;
  titulo: string;
  descricao: string;
  descricaoCompleta: string;
  preco: number;
  precoOriginal?: number;
  instrutor: string;
  duracao: string;
  nivel: 'Iniciante' | 'Intermediário' | 'Avançado';
  modulos: number;
  aulas: number;
  imagem: string;
  categoria: string;
  destaque?: boolean;
  beneficios: string[];
  conteudo: string[];
}

export const cursos: Curso[] = [
  {
    id: 'marketing-digital-completo',
    titulo: 'Marketing Digital Completo 2025',
    descricao: 'Aprenda a vender online e ganhar dinheiro com marketing digital do zero ao avançado',
    descricaoCompleta: 'Curso completo de Marketing Digital com estratégias comprovadas para vender online. Aprenda SEO, Google Ads, Facebook Ads, Instagram, Email Marketing e muito mais.',
    preco: 97,
    precoOriginal: 297,
    instrutor: 'Pedro Silva',
    duracao: '40 horas',
    nivel: 'Iniciante',
    modulos: 12,
    aulas: 156,
    imagem: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    categoria: 'Marketing',
    destaque: true,
    beneficios: [
      'Acesso vitalício ao curso',
      'Certificado de conclusão',
      'Suporte direto com instrutor',
      'Atualizações gratuitas',
      'Grupo VIP no WhatsApp',
      'Bônus: Templates prontos'
    ],
    conteudo: [
      'Fundamentos do Marketing Digital',
      'SEO e Tráfego Orgânico',
      'Google Ads e Tráfego Pago',
      'Facebook e Instagram Ads',
      'Email Marketing Profissional',
      'Copywriting e Vendas',
      'Funis de Vendas',
      'Análise de Métricas',
      'Automação de Marketing',
      'Cases de Sucesso',
      'Estratégias Avançadas',
      'Como Escalar Resultados'
    ]
  },
  {
    id: 'desenvolvimento-web-fullstack',
    titulo: 'Desenvolvimento Web Full Stack',
    descricao: 'Torne-se um desenvolvedor completo e crie aplicações web profissionais',
    descricaoCompleta: 'Aprenda a criar aplicações web completas do zero. Domine React, Node.js, bancos de dados e deploy em produção.',
    preco: 147,
    precoOriginal: 497,
    instrutor: 'Ana Costa',
    duracao: '60 horas',
    nivel: 'Intermediário',
    modulos: 15,
    aulas: 203,
    imagem: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop',
    categoria: 'Programação',
    destaque: true,
    beneficios: [
      'Acesso vitalício',
      'Projetos práticos reais',
      'Mentoria em grupo',
      'Certificado reconhecido',
      'Portfólio completo',
      'Ajuda na colocação profissional'
    ],
    conteudo: [
      'HTML, CSS e JavaScript Moderno',
      'React e Next.js',
      'TypeScript Avançado',
      'Node.js e Express',
      'APIs RESTful',
      'Bancos de Dados SQL e NoSQL',
      'Autenticação e Segurança',
      'Testes Automatizados',
      'Deploy e DevOps',
      'Git e GitHub',
      'Projetos Reais',
      'Preparação para Entrevistas'
    ]
  },
  {
    id: 'design-grafico-profissional',
    titulo: 'Design Gráfico Profissional',
    descricao: 'Crie designs incríveis e trabalhe como freelancer ou em agências',
    descricaoCompleta: 'Curso completo de Design Gráfico com Photoshop, Illustrator e Figma. Aprenda a criar identidades visuais, posts para redes sociais e muito mais.',
    preco: 87,
    precoOriginal: 247,
    instrutor: 'Carlos Mendes',
    duracao: '35 horas',
    nivel: 'Iniciante',
    modulos: 10,
    aulas: 128,
    imagem: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop',
    categoria: 'Design',
    beneficios: [
      'Acesso vitalício',
      'Software incluído (alternativas gratuitas)',
      'Projetos práticos',
      'Certificado',
      'Templates premium',
      'Comunidade ativa'
    ],
    conteudo: [
      'Fundamentos do Design',
      'Teoria das Cores',
      'Tipografia Profissional',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Figma para UI/UX',
      'Identidade Visual',
      'Design para Redes Sociais',
      'Mockups e Apresentações',
      'Portfólio Profissional'
    ]
  },
  {
    id: 'vendas-alta-performance',
    titulo: 'Vendas de Alta Performance',
    descricao: 'Técnicas comprovadas para vender mais e aumentar seus ganhos',
    descricaoCompleta: 'Aprenda as melhores técnicas de vendas utilizadas por top performers. Aumente suas conversões e ganhe mais comissões.',
    preco: 67,
    precoOriginal: 197,
    instrutor: 'Ricardo Alves',
    duracao: '25 horas',
    nivel: 'Iniciante',
    modulos: 8,
    aulas: 94,
    imagem: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop',
    categoria: 'Vendas',
    beneficios: [
      'Acesso vitalício',
      'Scripts de vendas prontos',
      'Certificado',
      'Suporte direto',
      'Atualizações gratuitas',
      'Bônus: Planilhas de controle'
    ],
    conteudo: [
      'Mindset de Vendedor',
      'Prospecção Eficiente',
      'Qualificação de Leads',
      'Apresentação Persuasiva',
      'Objeções e Como Vencer',
      'Fechamento de Vendas',
      'Pós-venda e Fidelização',
      'Vendas Online'
    ]
  },
  {
    id: 'ingles-fluente-6-meses',
    titulo: 'Inglês Fluente em 6 Meses',
    descricao: 'Método comprovado para falar inglês fluentemente em tempo recorde',
    descricaoCompleta: 'Aprenda inglês de forma prática e eficiente com método exclusivo. Foco em conversação e situações reais do dia a dia.',
    preco: 127,
    precoOriginal: 397,
    instrutor: 'Maria Santos',
    duracao: '50 horas',
    nivel: 'Iniciante',
    modulos: 24,
    aulas: 180,
    imagem: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=500&fit=crop',
    categoria: 'Idiomas',
    destaque: true,
    beneficios: [
      'Acesso vitalício',
      'Aulas ao vivo semanais',
      'Certificado internacional',
      'Material didático completo',
      'App mobile incluído',
      'Garantia de 30 dias'
    ],
    conteudo: [
      'Pronúncia Perfeita',
      'Gramática Essencial',
      'Vocabulário do Dia a Dia',
      'Conversação Prática',
      'Inglês para Negócios',
      'Inglês para Viagens',
      'Compreensão Auditiva',
      'Escrita Profissional',
      'Preparação para Entrevistas',
      'Cultura Americana e Britânica'
    ]
  },
  {
    id: 'excel-avancado-profissional',
    titulo: 'Excel Avançado Profissional',
    descricao: 'Domine Excel e destaque-se no mercado de trabalho',
    descricaoCompleta: 'Aprenda Excel do básico ao avançado. Dashboards, fórmulas complexas, macros e automações para aumentar sua produtividade.',
    preco: 57,
    precoOriginal: 147,
    instrutor: 'João Ferreira',
    duracao: '30 horas',
    nivel: 'Intermediário',
    modulos: 9,
    aulas: 112,
    imagem: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    categoria: 'Produtividade',
    beneficios: [
      'Acesso vitalício',
      'Planilhas prontas',
      'Certificado',
      'Suporte técnico',
      'Atualizações incluídas',
      'Bônus: Macros prontas'
    ],
    conteudo: [
      'Excel Básico e Intermediário',
      'Fórmulas e Funções Avançadas',
      'Tabelas Dinâmicas',
      'Gráficos Profissionais',
      'Dashboards Interativos',
      'Power Query',
      'Macros e VBA',
      'Automação de Tarefas',
      'Análise de Dados'
    ]
  }
];

export function getCursoById(id: string): Curso | undefined {
  return cursos.find(curso => curso.id === id);
}

export function getCursosDestaque(): Curso[] {
  return cursos.filter(curso => curso.destaque);
}
