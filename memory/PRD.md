# PRD - Lucas Net - Provedor de Internet

## Informações do Projeto
**Data de Criação:** Dezembro 2024
**Status:** MVP Frontend Completo (com dados mockados)

## Problema Original
Construir uma página moderna e bonita de provedor de internet com:
- Botão de Speed Test (link externo)
- Botão de Área do Cliente (link externo)
- Design moderno e profissional

## Identidade da Marca
- **Nome:** Lucas Net
- **Cores:** Azul e Branco
- **Tagline:** Conectando você ao futuro
- **Estilo:** Moderno com glassmorphism, animações suaves e design clean

## Funcionalidades Implementadas ✅

### 1. Header Fixo com Navegação
- Logo da Lucas Net
- Menu de navegação (Início, Planos, Cobertura, FAQ, Contato)
- Botão Speed Test (link externo para Libre Speed/Open Speed Test)
- Botão Área do Cliente (link externo)
- Menu mobile responsivo

### 2. Hero Section
- Título impactante com descrição
- CTAs principais (Assine Agora, Testar Velocidade)
- Imagem de fibra óptica de alta qualidade
- Badge "Fibra Óptica 100% Pura"

### 3. Seção de Estatísticas
- 50mil+ Clientes Satisfeitos
- 99.8% Uptime Garantido
- 120+ Bairros Atendidos
- Suporte 24/7

### 4. Seção de Benefícios
- 6 cards com benefícios principais
- Ícones Lucide React
- Hover effects

### 5. Planos e Preços
- 3 planos: Essencial (200 Mega), Power (500 Mega), Ultra (1 Giga)
- Plano "Mais Popular" destacado
- Lista de features para cada plano
- Botões de CTA

### 6. Área de Cobertura
- Lista de 12 cidades atendidas
- Imagem de torre de celular
- Botão para verificar disponibilidade

### 7. Depoimentos de Clientes
- 4 cards de depoimentos
- Avaliações 5 estrelas
- Avatar com iniciais
- Localização dos clientes

### 8. FAQ (Perguntas Frequentes)
- 8 perguntas com respostas detalhadas
- Accordion shadcn UI com animação
- Hover effects nos items

### 9. Formulário de Contato/Orçamento
- Campos: Nome, Email, Telefone, CEP, Mensagem
- Validação de campos obrigatórios
- Toast notification ao enviar
- Design em card branco sobre fundo azul

### 10. Footer Completo
- 4 colunas: Sobre, Links Rápidos, Serviços, Contato
- Informações de contato
- Links para todas seções
- Copyright

## Tecnologias Utilizadas
- **Frontend:** React 19
- **UI Components:** Shadcn UI
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)
- **Routing:** React Router DOM
- **Notifications:** Sonner

## Dados Mockados (mock.js)
- Informações da empresa
- Links externos (Speed Test, Área do Cliente)
- 3 planos de internet
- 12 cidades de cobertura
- 4 depoimentos de clientes
- 8 perguntas frequentes (FAQ)
- 4 estatísticas
- 6 benefícios

## Design Features
✅ Cores azul e branco (tema corporativo)
✅ Fonte Inter (moderna e profissional)
✅ Animações suaves em hover
✅ Scroll suave entre seções
✅ Design responsivo (mobile/tablet/desktop)
✅ Backdrop blur no header
✅ Gradientes sutis
✅ Espaçamento generoso
✅ Componentes shadcn UI

## Links Externos Configurados
- **Speed Test:** https://librespeed.org/
- **Área do Cliente:** https://painel.lucasnet.com.br/login (fictício)

## Próximos Passos (Backlog)

### P0 - Crítico
- [ ] Atualizar links externos do Speed Test e Área do Cliente com URLs reais
- [ ] Adicionar imagens/logos reais da marca

### P1 - Alta Prioridade
- [ ] Backend com FastAPI
  - [ ] API de contato/orçamento (enviar email)
  - [ ] API de verificação de cobertura por CEP
  - [ ] Dashboard admin para gerenciar conteúdo
- [ ] Integração com serviço de email (SendGrid/AWS SES)
- [ ] Analytics (Google Analytics/Mixpanel)

### P2 - Média Prioridade
- [ ] Sistema de chat ao vivo (WhatsApp Business API)
- [ ] Blog/notícias
- [ ] Área de suporte com tickets
- [ ] Integração Speed Test próprio
- [ ] SEO optimization (meta tags, sitemap, schema.org)
- [ ] Performance optimization (lazy loading, CDN)

### P3 - Baixa Prioridade
- [ ] Modo escuro
- [ ] Multilíngua (i18n)
- [ ] Comparador de planos interativo
- [ ] Calculadora de cobertura no mapa
- [ ] Portal do cliente completo

## Melhorias Sugeridas
1. **Conversão:** Adicionar popup de desconto para primeira assinatura
2. **Engajamento:** Implementar chat ao vivo com WhatsApp
3. **Confiança:** Adicionar certificações e prêmios
4. **Performance:** Implementar lazy loading nas imagens

## Arquitetura de Arquivos

```
frontend/
├── src/
│   ├── components/ui/     # Componentes Shadcn UI
│   ├── pages/
│   │   └── HomePage.jsx   # Página principal
│   ├── mock.js            # Dados mockados
│   ├── App.js             # Configuração de rotas
│   ├── App.css            # Estilos globais e animações
│   └── index.css          # Tailwind + variáveis CSS
```

## Observações
- Todos os dados são mockados e não há backend conectado
- Links externos apontam para URLs de exemplo
- Design segue diretrizes modernas de UI/UX
- Pronto para integração com backend quando necessário

---

## Atualização - Logo Implementada

**Data:** Dezembro 2024

### Mudanças Realizadas
✅ Logo oficial da Lucas Net implementada no header (h-12)
✅ Logo implementada no footer com fundo branco para contraste no fundo escuro
✅ Substituído ícone genérico de Wifi pela logo real da marca

### Detalhes da Logo
- Arquivo: WhatsApp Image 2025-11-05 at 17.33.35.jpeg
- Cores: Azul escuro (navy) e azul claro
- Design: "L" estilizado com gráfico de rede acima
- Texto: "LUCAS NET" com linhas horizontais decorativas
- Estilo: Moderno, corporativo, tecnológico

### Localização da Logo
- **Header:** Logo com altura de 48px (h-12)
- **Footer:** Logo com altura de 48px (h-12) em container branco com padding e border radius

