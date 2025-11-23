# 🌟 Portfólio Amanda Morgado - Psicóloga

Portfólio profissional moderno e responsivo desenvolvido para a psicóloga Amanda Morgado, especialista em Transtorno do Espectro Autista (TEA) e pós-graduada em ABA (Análise do Comportamento Aplicada).

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações fluidas e interativas
- **React Icons** - Ícones elegantes

## ✨ Características

- ✅ **Design Moderno** - Interface elegante com gradientes e animações
- ✅ **100% Responsivo** - Adaptado para mobile, tablet e desktop
- ✅ **Animações Suaves** - Transições e efeitos com Framer Motion
- ✅ **SEO Otimizado** - Meta tags e estrutura semântica
- ✅ **WhatsApp Flutuante** - Botão fixo para contato rápido
- ✅ **Formulário de Contato** - Sistema de contato integrado
- ✅ **Performance** - Otimizado para carregamento rápido
- ✅ **Acessibilidade** - Navegação por teclado e semântica HTML

## 🛠️ Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Criar build de produção
npm run build

# Executar build de produção
npm start

# Verificar código
npm run lint
```

Acesse em: `http://localhost:3000`

## 📱 Seções do Site

1. **Header** - Menu de navegação fixo com efeito de scroll
2. **Hero** - Apresentação impactante com animações
3. **Sobre** - Biografia profissional e credenciais
4. **Serviços** - 6 serviços detalhados com ícones
5. **Especialidades** - 4 áreas de especialização
6. **Contato** - Formulário e informações de contato
7. **Footer** - Links úteis e informações adicionais
8. **WhatsApp** - Botão flutuante para contato direto

## 🎨 Personalização de Cores

Edite o arquivo `tailwind.config.js` para alterar o esquema de cores:

```javascript
colors: {
  primary: {
    500: '#4a90e2', // Cor principal
  },
  secondary: {
    500: '#50c878', // Cor secundária
  },
}
```

Ou use as classes do Tailwind diretamente nos componentes.

## 📞 Atualizando Informações de Contato

Substitua os dados de contato nos seguintes arquivos:

### Telefone e WhatsApp
- `app/components/Hero.jsx` - linha com `wa.me/5511999999999`
- `app/components/Contact.jsx` - array `contactInfo`
- `app/components/Footer.jsx` - seção de contato
- `app/components/WhatsAppButton.jsx` - link do WhatsApp

### Email
- `app/components/Contact.jsx` - array `contactInfo`
- `app/components/Footer.jsx` - seção de contato

### Redes Sociais
- `app/components/Hero.jsx` - array de redes sociais
- `app/components/Footer.jsx` - links sociais

## 🌐 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
1. Conecte seu repositório GitHub
2. Configure build command: `npm run build`
3. Configure publish directory: `.next`

## 📦 Estrutura de Pastas

```
psicologaAmanda/
├── app/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Expertise.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

## 🎯 Próximas Melhorias Sugeridas

- [ ] Adicionar seção de depoimentos
- [ ] Implementar blog com artigos
- [ ] Criar FAQ (Perguntas Frequentes)
- [ ] Integrar Google Analytics
- [ ] Adicionar modo escuro
- [ ] Sistema de agendamento online
- [ ] Galeria de fotos do consultório

## 📄 Licença

Este projeto foi desenvolvido para uso profissional exclusivo.

## 🤝 Suporte

Para dúvidas ou sugestões, entre em contato através dos canais disponíveis no site.

---

💜 Desenvolvido com Next.js, Tailwind CSS e Framer Motion
