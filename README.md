# 💈 Barbearia Premium - SPA

Uma Single Page Application moderna e responsiva desenvolvida para uma barbearia premium, oferecendo uma experiência elegante e sofisticada aos usuários.

## ✨ Características Principais

- **Design Moderno e Elegante**: Interface clean com paleta de cores inspirada em tons de âmbar, preto e cinza
- **Tema Dark/Light**: Alternância entre temas com persistência em localStorage
- **Totalmente Responsivo**: Adaptado para dispositivos móveis, tablets e desktops
- **Animações Suaves**: Transições e micro-interações usando Framer Motion
- **Navegação Intuitiva**: Menu fixo com scroll suave entre seções
- **Integração WhatsApp**: Botão flutuante para agendamento direto
- **Google Maps**: Mapa interativo com localização da barbearia

## 🚀 Tecnologias Utilizadas

- **React 19.1.0** - Biblioteca JavaScript para construção de interfaces
- **Vite 6.3.5** - Build tool e dev server ultrarrápido
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animações para React
- **Lucide React** - Ícones modernos e customizáveis
- **Google Maps API** - Integração de mapas

## 📁 Estrutura do Projeto

```
barbearia-spa/
├── public/
├── src/
│   ├── assets/          # Imagens e recursos estáticos
│   ├── components/      # Componentes reutilizáveis
│   │   ├── ui/          # Componentes UI do shadcn/ui
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── ReviewCard.jsx
│   │   └── WhatsAppButton.jsx
│   ├── context/         # Contextos React
│   │   └── ThemeContext.jsx
│   ├── hooks/           # Hooks customizados
│   │   └── useTheme.js
│   ├── pages/           # Seções principais
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Reviews.jsx
│   │   ├── About.jsx
│   │   └── Location.jsx
│   ├── utils/           # Funções utilitárias
│   ├── App.css          # Estilos globais e tema
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Ponto de entrada
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Seções da Aplicação

### 1. **Hero (Início)**
- Título principal com gradiente
- Subtítulo descritivo
- Botões de call-to-action (Agendar Horário / Ver Serviços)
- Estatísticas da barbearia (Anos de experiência, Clientes, Avaliação)
- Animações de entrada suaves

### 2. **Serviços**
- Cards elegantes para cada serviço
- Informações de preço e duração
- Botões de agendamento via WhatsApp
- Efeitos hover e animações

**Serviços Oferecidos:**
- Corte Masculino - R$ 50,00 (45 min)
- Barba - R$ 35,00 (30 min)
- Corte + Barba - R$ 75,00 (1h 15min)
- Pigmentação - R$ 40,00 (40 min)

### 3. **Avaliações**
- Carrossel automático de avaliações
- Navegação manual com botões
- Indicadores de posição
- Avaliações com estrelas, nome do cliente e comentário

### 4. **Sobre a Barbearia**
- História e propósito da barbearia
- Diferenciais competitivos
- Cards com ícones destacando:
  - Profissionais Qualificados
  - Atendimento Personalizado
  - Pontualidade
  - Produtos Premium

### 5. **Localização**
- Endereço completo
- Horário de funcionamento
- Mapa interativo do Google Maps
- Botão para abrir no Google Maps

### 6. **Footer**
- Horário de funcionamento
- Endereço resumido
- Contato telefônico
- Links para redes sociais (Instagram, Facebook)
- Copyright

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js (versão 18 ou superior)
- pnpm, npm ou yarn

### Instalação

1. Clone o repositório ou navegue até a pasta do projeto:
```bash
cd barbearia-spa
```

2. Instale as dependências:
```bash
pnpm install
# ou
npm install
# ou
yarn install
```

### Executar em Desenvolvimento

```bash
pnpm run dev
# ou
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:5173/`

### Build para Produção

```bash
pnpm run build
# ou
npm run build
# ou
yarn build
```

Os arquivos otimizados serão gerados na pasta `dist/`

### Preview da Build

```bash
pnpm run preview
# ou
npm run preview
# ou
yarn preview
```

## 🎨 Personalização

### Alterar Cores do Tema

Edite o arquivo `src/App.css` para modificar as variáveis CSS do tema:

```css
:root {
  --background: oklch(0.98 0.005 85);
  --foreground: oklch(0.15 0.01 85);
  /* ... outras variáveis */
}

.dark {
  --background: oklch(0.12 0.01 85);
  --foreground: oklch(0.95 0.005 85);
  /* ... outras variáveis */
}
```

### Alterar Informações de Contato

Edite os seguintes arquivos:

- **WhatsApp**: `src/components/WhatsAppButton.jsx` e `src/components/ServiceCard.jsx`
- **Endereço**: `src/pages/Location.jsx` e `src/components/Footer.jsx`
- **Telefone**: `src/components/Footer.jsx`

### Adicionar/Modificar Serviços

Edite o array `services` em `src/pages/Services.jsx`:

```javascript
const services = [
  {
    name: 'Nome do Serviço',
    description: 'Descrição do serviço',
    price: 'R$ XX,XX',
    duration: 'XX min',
    icon: IconeDoLucide,
  },
  // ...
];
```

### Modificar Avaliações

Edite o array `reviews` em `src/pages/Reviews.jsx`:

```javascript
const reviews = [
  {
    name: 'Nome do Cliente',
    rating: 5,
    comment: 'Comentário do cliente',
    date: 'Data',
  },
  // ...
];
```

## 🌐 Deploy

### Opções de Deploy

1. **Vercel** (Recomendado)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Conecte o repositório no painel da Netlify
   - Configure o build command: `pnpm run build`
   - Configure o publish directory: `dist`

3. **GitHub Pages**
   - Configure o `base` no `vite.config.js`
   - Execute `pnpm run build`
   - Faça deploy da pasta `dist`

## 📱 Responsividade

A aplicação é totalmente responsiva e otimizada para:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## ♿ Acessibilidade

- Labels ARIA em botões interativos
- Contraste adequado entre texto e fundo
- Navegação por teclado suportada
- Semântica HTML apropriada

## 📄 Licença

Este projeto foi desenvolvido como uma aplicação de demonstração.

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas!

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através do WhatsApp: (11) 98765-4321

---

**Desenvolvido com ❤️ usando React + Vite + Tailwind CSS**

