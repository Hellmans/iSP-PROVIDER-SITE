// Mock data para Lucas Net ISP Landing Page

export const mockData = {
  // Informações da empresa
  company: {
    name: "Lucas Net",
    tagline: "Conectando você ao futuro",
    description: "Internet de fibra óptica com velocidade e estabilidade incomparáveis",
    phone: "(11) 98765-4321",
    email: "contato@lucasnet.com.br",
    whatsapp: "5511987654321",
    address: "Av. Paulista, 1000 - São Paulo, SP"
  },

  // Links externos
  externalLinks: {
    speedTest: "https://librespeed.org/", // Pode ser alterado para o link real
    clientArea: "https://painel.lucasnet.com.br/login" // Link fictício
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
    }
  ],

  // Áreas de cobertura
  coverage: {
    cities: [
      "São Paulo - SP",
      "Guarulhos - SP",
      "Osasco - SP",
      "Santo André - SP",
      "São Bernardo do Campo - SP",
      "São Caetano do Sul - SP",
      "Diadema - SP",
      "Mauá - SP",
      "Ribeirão Pires - SP",
      "Taboão da Serra - SP",
      "Barueri - SP",
      "Carapicuíba - SP"
    ],
    neighborhoods: "120+ bairros atendidos",
    coverage: "95% da região metropolitana"
  },

  // Depoimentos de clientes
  testimonials: [
    {
      id: 1,
      name: "Maria Silva",
      location: "São Paulo - SP",
      rating: 5,
      comment: "Melhor internet que já tive! Velocidade estável e suporte excelente. Recomendo muito a Lucas Net!",
      avatar: "MS"
    },
    {
      id: 2,
      name: "João Santos",
      location: "Guarulhos - SP",
      rating: 5,
      comment: "Trabalho home office e nunca tive problemas. A conexão é rápida e confiável. Atendimento nota 10!",
      avatar: "JS"
    },
    {
      id: 3,
      name: "Ana Oliveira",
      location: "Osasco - SP",
      rating: 5,
      comment: "Instalação rápida, preço justo e internet de qualidade. Toda família está satisfeita!",
      avatar: "AO"
    },
    {
      id: 4,
      name: "Carlos Ferreira",
      location: "Santo André - SP",
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
      value: "50mil+",
      label: "Clientes Satisfeitos"
    },
    {
      id: 2,
      value: "99.8%",
      label: "Uptime Garantido"
    },
    {
      id: 3,
      value: "120+",
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
