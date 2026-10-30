/* =====================================================================
   data.js — ÚNICO arquivo que você precisa editar para mexer nos cards.

   COMO CRIAR UM CARD NOVO: copie um bloco { ... } da lista CARDS, cole
   no final (antes do "];") e troque os campos:

   category    -> id de uma categoria da lista CATEGORIES abaixo
   color       -> sky | emerald | purple | teal | amber | indigo | rose
   icon        -> monitor | documento | grafico | livro | balanca | megafone | alerta
   title       -> título exibido no card
   description -> linha de apoio exibida no card
   badge       -> (opcional) etiqueta ao lado do título; apague a linha se não quiser
   url         -> link do recurso. https://... abre em nova aba; "#algo" = link fictício
   modalTitle  -> (opcional) título da janela que abre ao clicar; padrão = title
   modalText   -> texto da janela. Aceita HTML simples (<br>, <b>) — só conteúdo seu!

   Atenção: aspas simples dentro do texto precisam de barra: 'd\'água'
   (ou use aspas duplas no valor).
   ===================================================================== */

const CATEGORIES = [
  { id: 'sistemas',   label: 'Sistemas' },
  { id: 'prestacao',  label: 'Prestação de Contas' },
  { id: 'relatorios', label: 'Relatórios & Metas' },
  { id: 'legislacao', label: 'Legislação' },
];

const CARDS = [
  {
    category: 'sistemas', color: 'sky', icon: 'monitor',
    title: 'Plataforma de Acompanhamento Contratual e Transparência Orçamentária (PACTO-Web)',
    badge: 'Sistema',
    description: 'Plataforma de inserção de contratos das Organizações Sociais de Saúde e Transparência Orçamentária',
    url: 'https://script.google.com/macros/s/AKfycbyzES8LSbiYmxBHkBBP4NQsUoApMqDqnm_ro1nxG2bSSr33jgemEIRt9ZmBF-iZMfN2iQ/exec',
    modalTitle: 'Sistema de Monitoramento de Contratos (PACTO-Web)',
    modalText: 'Plataforma restrita para envio e validação das metas assistenciais, indicadores de qualidade e relatórios mensais pelas OSS parceiras.',
  },
  {
    category: 'prestacao', color: 'emerald', icon: 'documento',
    title: 'Portal de Prestação de Contas',
    badge: 'Obrigatório',
    description: 'Submissão de documentos financeiros e execução orçamentária',
    url: '#prestacao',
    modalTitle: 'Prestação de Contas Mensal',
    modalText: 'Envio de balancetes mensais, extratos bancários, folhas de pagamento e relatórios financeiros conforme instrução normativa da GMCG.',
  },
  {
    category: 'relatorios', color: 'purple', icon: 'grafico',
    title: 'Relatórios de Avaliação e Desempenho',
    description: 'Pareceres consolidados das comissões técnicas de monitoramento',
    url: '#relatorios',
    modalTitle: 'Relatórios de Avaliação de Desempenho',
    modalText: 'Acesso público aos pareceres de comissões técnicas de avaliação sobre o cumprimento das metas contratuais por cada Unidade de Saúde.',
  },
  {
    category: 'prestacao', color: 'teal', icon: 'livro',
    title: 'Manual de Prestação de Contas e Modelos',
    description: 'Planilhas, formulários padronizados e orientações técnicas',
    url: '#manual',
    modalTitle: 'Manual do Gestor e Modelos Padronizados',
    modalText: 'Download dos modelos editáveis de relatórios assistenciais, planilhas orçamentárias e guias de orientação técnica.',
  },
  {
    category: 'legislacao', color: 'amber', icon: 'balanca',
    title: 'Legislação e Instruções Normativas',
    description: 'Leis, Decretos e Portarias regulamentadoras das OSS',
    url: '#legislacao',
    modalTitle: 'Legislação e Portarias de Contratos de Gestão',
    modalText: 'Coletânea de leis municipais, decretos e portarias regulamentadoras das parcerias com Organizações Sociais de Saúde (OSS).',
  },
  {
    category: 'legislacao', color: 'indigo', icon: 'megafone',
    title: 'Editais de Chamamento Público',
    description: 'Qualificação de entidades e seleção para gestão de unidades',
    url: '#editais',
    modalTitle: 'Chamamentos Públicos e Qualificação',
    modalText: 'Processos de seleção de entidades sem fins lucrativos, qualificação como OSS e termos de aditamento dos contratos vigentes.',
  },
  {
    category: 'relatorios', color: 'rose', icon: 'alerta',
    title: 'Auditoria e Denúncias Contratuais',
    description: 'Canal direto para relato de inconsistências em serviços de OSS',
    url: '#ouvidoria',
    modalTitle: 'Canal de Ouvidoria Contratual',
    modalText: 'Canal destinado a relatos sobre descumprimento de cláusulas contratuais, irregularidades ou inconsistências nos serviços prestados.',
  },
];
