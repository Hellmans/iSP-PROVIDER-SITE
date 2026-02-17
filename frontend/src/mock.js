// Mock data para Lucas Net ISP Landing Page

export const mockData = {
  // Informações da empresa
  company: {
    name: "Lucas Net",
    tagline: "Conectando você ao futuro",
    description: "Internet de fibra óptica com velocidade e estabilidade incomparáveis",
    phone: "(21) 97266-8405",
    email: "contato@lucasnetfibra.com.br",
    whatsapp: "5521972668405",
    whatsappMessage: "Ola, vim do site e gostaria de ser atendido",
    address: "São Pedro da Serra - Rio de Janeiro, RJ"
  },

  // Links externos
  externalLinks: {
    speedTest: "https://lucasnetfibra.com.br/speedtest", 
    clientArea: "http://mkauth.lucasnetfibra.com.br/central"
  },

  // Planos de internet
  plans: [
    {
      id: 1,
      name: "Essencial",
      speed: "200",
      unit: "Mega",
      price: "79,90",
      features: [
        "Wi-Fi grátis",
        "Instalação gratuita",
        "Suporte 24/7",
        "Sem fidelidade"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Power",
      speed: "500",
      unit: "Mega",
      price: "119,90",
      features: [
        "Wi-Fi 6 grátis",
        "Instalação gratuita",
        "Suporte prioritário 24/7",
        "Sem fidelidade",
        "IP fixo grátis"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Ultra",
      speed: "1",
      unit: "Giga",
      price: "179,90",
      features: [
        "Wi-Fi 6 mesh grátis",
        "Instalação gratuita",
        "Suporte VIP 24/7",
        "Sem fidelidade",
        "IP fixo grátis",
        "Roteador premium"
      ],
      popular: false
    },
    {
      id: 4,
      name: "Essencial + TV",
      speed: "200",
      unit: "Mega",
      price: "109,90",
      features: [
        "Wi-Fi grátis",
        "Instalação gratuita",
        "Suporte 24/7",
        "Sem fidelidade",
        "+300 canais de TV"
      ],
      popular: false,
      hasTV: true
    },
    {
      id: 5,
      name: "Power + TV",
      speed: "500",
      unit: "Mega",
      price: "149,90",
      features: [
        "Wi-Fi 6 grátis",
        "Instalação gratuita",
        "Suporte prioritário 24/7",
        "Sem fidelidade",
        "IP fixo grátis",
        "+300 canais de TV"
      ],
      popular: false,
      hasTV: true
    },
    {
      id: 6,
      name: "Ultra + TV",
      speed: "1",
      unit: "Giga",
      price: "209,90",
      features: [
        "Wi-Fi 6 mesh grátis",
        "Instalação gratuita",
        "Suporte VIP 24/7",
        "Sem fidelidade",
        "IP fixo grátis",
        "Roteador premium",
        "+300 canais de TV"
      ],
      popular: false,
      hasTV: true
    }
  ],

  // Áreas de cobertura
  coverage: {
    cities: [
      "Bocaina - RJ",
      "Bocaina dos Malford - RJ",
      "Bocaina dos Blaut - RJ",
      "Boa Esperança de Baixo - RJ"
    ],
    neighborhoods: "4+ bairros atendidos",
    coverage: "100% da região de São Pedro da Serra"
  },

  // Depoimentos de clientes
  testimonials: [
    {
      id: 1,
      name: "Maria Silva",
      location: "Bocaina - RJ",
      rating: 5,
      comment: "Melhor internet que já tive! Velocidade estável e suporte excelente. Recomendo muito a Lucas Net!",
      avatar: "MS"
    },
    {
      id: 2,
      name: "João Santos",
      location: "São Pedro da Serra - RJ",
      rating: 5,
      comment: "Trabalho home office e nunca tive problemas. A conexão é rápida e confiável. Atendimento nota 10!",
      avatar: "JS"
    },
    {
      id: 3,
      name: "Ana Oliveira",
      location: "Malford - RJ",
      rating: 5,
      comment: "Instalação rápida, preço justo e internet de qualidade. Toda família está satisfeita!",
      avatar: "AO"
    },
    {
      id: 4,
      name: "Carlos Ferreira",
      location: "Boa Esperança de Baixo - RJ",
      rating: 5,
      comment: "Migrei de outra operadora e a diferença é absurda. Lucas Net é outra categoria!",
      avatar: "CF"
    }
  ],

  // FAQ - Perguntas Frequentes
  faq: [
    {
      id: 1,
      question: "Como funciona a instalação?",
      answer: "A instalação é 100% gratuita! Após a contratação, nossa equipe técnica agenda uma visita em até 48 horas úteis. O processo leva em média 2 horas e você já sai com internet funcionando."
    },
    {
      id: 2,
      question: "Há período de fidelidade?",
      answer: "Não! Todos os nossos planos são sem fidelidade. Você tem total liberdade para cancelar quando quiser, sem multas ou taxas adicionais."
    },
    {
      id: 3,
      question: "O que está incluso no plano?",
      answer: "Todos os planos incluem: roteador Wi-Fi grátis, instalação gratuita, suporte técnico 24/7, velocidade garantida e sem limite de dados (internet ilimitada)."
    },
    {
      id: 4,
      question: "Como funciona o suporte técnico?",
      answer: "Oferecemos suporte 24 horas por dia, 7 dias por semana através de WhatsApp, telefone e chat online. Nosso tempo médio de resposta é de 5 minutos."
    },
    {
      id: 5,
      question: "Posso testar antes de contratar?",
      answer: "Sim! Oferecemos 7 dias de garantia. Se não ficar satisfeito com a qualidade da internet, devolvemos seu dinheiro sem perguntas."
    },
    {
      id: 6,
      question: "A velocidade é garantida?",
      answer: "Sim! Garantimos no mínimo 90% da velocidade contratada via cabo. Nossa rede de fibra óptica oferece ultra estabilidade e baixíssima latência."
    },
    {
      id: 7,
      question: "Vocês atendem minha região?",
      answer: "Atendemos mais de 120 bairros na região metropolitana. Digite seu CEP no formulário de contato e verificaremos a disponibilidade imediatamente."
    },
    {
      id: 8,
      question: "Quais as formas de pagamento?",
      answer: "Aceitamos cartão de crédito, débito automático, boleto bancário e PIX. No débito automático você ganha 5% de desconto!"
    }
  ],

  // Estatísticas
  stats: [
    {
      id: 1,
      value: "90+",
      label: "Clientes Satisfeitos"
    },
    {
      id: 2,
      value: "99.8%",
      label: "Uptime Garantido"
    },
    {
      id: 3,
      value: "4+",
      label: "Bairros Atendidos"
    },
    {
      id: 4,
      value: "24/7",
      label: "Suporte Disponível"
    }
  ],

  // Benefícios
  benefits: [
    {
      id: 1,
      icon: "Zap",
      title: "Ultra Velocidade",
      description: "Fibra óptica com velocidade simétrica de download e upload"
    },
    {
      id: 2,
      icon: "Shield",
      title: "Conexão Estável",
      description: "99.8% de uptime garantido com rede redundante"
    },
    {
      id: 3,
      icon: "Headphones",
      title: "Suporte 24/7",
      description: "Atendimento especializado a qualquer hora do dia"
    },
    {
      id: 4,
      icon: "DollarSign",
      title: "Melhor Custo-Benefício",
      description: "Planos competitivos sem taxas escondidas"
    },
    {
      id: 5,
      icon: "Wifi",
      title: "Wi-Fi Grátis",
      description: "Roteador de alta performance incluso"
    },
    {
      id: 6,
      icon: "Clock",
      title: "Instalação Rápida",
      description: "Instalação gratuita em até 48h úteis"
    }
  ]
};
