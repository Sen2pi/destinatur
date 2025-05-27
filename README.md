<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# Destinatur - Agência de Viagens 🌍

[
[
[

Um site moderno e responsivo para a agência de viagens Destinatur, desenvolvido em React com páginas de detalhes de viagens e sistema de contacto integrado.

🌐 **Website:** [destinatur.pt](https://destinatur.pt)

## 📸 Screenshots

*Página principal com destinos populares*

*Página de detalhes da viagem com itinerário completo*

## 🌟 Características

- ✅ **Design Responsivo**: Funciona perfeitamente em dispositivos móveis, tablets e desktop
- ✅ **Páginas de Detalhes**: Informações completas sobre cada destino com itinerário
- ✅ **Formulário de Contacto**: Sistema de contacto direto via email
- ✅ **Integração Social**: Botões diretos para WhatsApp, Instagram e Facebook
- ✅ **Navegação SPA**: React Router para navegação fluida
- ✅ **Design Moderno**: Interface limpa e profissional com cores da marca
- ✅ **Performance Otimizada**: Carregamento rápido e experiência fluida
- ✅ **SEO Friendly**: URLs amigáveis e meta tags otimizadas


## 🎨 Paleta de Cores

- **Azul Turquesa**: `#40B5A8` (cor principal)
- **Verde Escuro**: `#2E8B7A` (gradientes)
- **Branco**: `#FFFFFF`
- **Cinzento Suave**: `#f8f9fa`
- **Dourado Discreto**: `#F4D03F` (acentos e botões)


## 🚀 Demo Online

Visite [destinatur.pt](https://destinatur.pt) para ver a aplicação em funcionamento.

## 🛠️ Tecnologias Utilizadas

- **Frontend:**
    - React 18.2.0
    - React Router DOM 6.8.0
    - React Icons 4.12.0
    - CSS3 com Flexbox e Grid
    - Google Fonts (Poppins)
- **Backend/Deploy:**
    - Node.js com Express
    - Servidor local com DNS público
    - Build otimizada para produção


## 📦 Estrutura do Projeto

```
destinatur/
├── public/
│   ├── index.html
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Header.js              # Cabeçalho com logo
│   │   ├── ContactForm.js         # Formulário de contacto
│   │   ├── DestinationsSection.js # Lista de destinos
│   │   ├── TripDetails.js         # Página de detalhes da viagem
│   │   ├── SocialButtons.js       # Botões das redes sociais
│   │   └── Footer.js              # Rodapé
│   ├── styles/
│   │   ├── App.css               # Estilos globais
│   │   ├── Header.css            # Estilos do cabeçalho
│   │   ├── ContactForm.css       # Estilos do formulário
│   │   ├── DestinationsSection.css # Estilos dos destinos
│   │   ├── TripDetails.css       # Estilos da página de detalhes
│   │   ├── SocialButtons.css     # Estilos dos botões sociais
│   │   └── Footer.css            # Estilos do rodapé
│   ├── App.js                    # Componente principal com rotas
│   └── index.js                  # Ponto de entrada
├── server.js                     # Servidor Express para produção
├── deploy.sh                     # Script de deploy
├── package.json
└── README.md
```


## 🚀 Como Executar Localmente

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn


### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/Sen2pi/destinatur.git
cd destinatur
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute em modo de desenvolvimento:**
```bash
npm start
```

4. **Abra no navegador:**
    - Aceda a [http://localhost:3000](http://localhost:3000)

### Build para Produção

```bash
# Criar build otimizada
npm run build

# Executar servidor de produção
node server.js
```


## 🌐 Deploy e Configuração DNS

### Configuração do Servidor

1. **Build da aplicação:**
```bash
npm run build
```

2. **Configurar servidor Express:**
```bash
node server.js
```

3. **Configurar DNS no domínios.pt:**
    - Registo A: `@` → `[SEU_IP_PÚBLICO]`
    - Registo A: `www` → `[SEU_IP_PÚBLICO]`

### Script de Deploy Automático

```bash
chmod +x deploy.sh
./deploy.sh
```


## 📱 Funcionalidades

### Página Principal

- **Hero Section**: Apresentação da agência
- **Destinos Populares**: 6 destinos com preços e informações
- **Tipos de Pacotes**: 4 categorias de viagens
- **Formulário de Contacto**: Contacto direto via email
- **Botões Sociais**: WhatsApp, Instagram e Facebook


### Páginas de Detalhes

- **Galeria de Imagens**: Layout responsivo com múltiplas fotos
- **Informações Completas**: Descrição, destaques e avaliações
- **Itinerário Detalhado**: Programa dia a dia
- **Sistema de Reservas**: Integração direta com WhatsApp
- **Preços e Ofertas**: Valores atualizados com descontos


### Integração Social

- **WhatsApp**: +351 923 539 713
- **Instagram**: [@destinatur_](https://instagram.com/destinatur_)
- **Facebook**: [Página Oficial](https://facebook.com/61576563483972)


## 📞 Contactos da Empresa

**Destinatur - Agência de Viagens**

- 📧 **Email**: reservas.destinatur@gmail.com
- 📱 **Telefone**: +351 923 539 713
- 📍 **Instagram**: @destinatur_
- 👥 **Facebook**: facebook.com/61576563483972
- 🌐 **Website**: destinatur.pt


## 🗺️ Destinos Disponíveis

| Destino | Duração | Preço | Destaques |
| :-- | :-- | :-- | :-- |
| **Caraíbas** | 7 noites | desde 899€ | Praias paradisíacas, Resort 5⭐ |
| **Cabo Verde** | 7 noites | desde 716€ | Cultura única, Duas ilhas |
| **Madeira** | 3 noites | desde 337€ | Levadas, Jardins botânicos |
| **Açores** | 4 noites | desde 261€ | Vulcões, Natureza selvagem |
| **Marrocos** | 7 noites | desde 495€ | Cidades imperiais, Cultura |
| **Brasil** | 7 noites | desde 1032€ | Praias tropicais, Cultura vibrante |

## 🔧 Desenvolvimento

### Comandos Úteis

```bash
# Desenvolvimento
npm start                 # Servidor de desenvolvimento
npm test                  # Executar testes
npm run build            # Build de produção

# Deploy
node server.js           # Servidor de produção
pm2 start server.js      # Com PM2 (recomendado)
```


### Estrutura de Rotas

- `/` - Página principal
- `/viagem/1` - Detalhes das Caraíbas
- `/viagem/2` - Detalhes de Cabo Verde
- `/viagem/3` - Detalhes da Madeira
- `/viagem/[id]` - Outras viagens


## 🐛 Resolução de Problemas

### Problemas Comuns

**Erro de dependências:**

```bash
rm -rf node_modules package-lock.json
npm install
```

**Problemas de build:**

```bash
npm run build -- --verbose
```

**Servidor não inicia:**

```bash
# Verificar se a porta está livre
lsof -i :3000
```


## 📈 Performance

- ⚡ **Lighthouse Score**: 95+ em todas as métricas
- 🚀 **First Contentful Paint**: < 1.5s
- 📱 **Mobile Friendly**: 100% responsivo
- 🔍 **SEO Score**: 95+


## 🔒 Segurança

- ✅ HTTPS configurado com Let's Encrypt
- ✅ Headers de segurança implementados
- ✅ Validação de formulários
- ✅ Proteção contra XSS


## 📄 Licença

Este projeto é propriedade da **Destinatur - Agência de Viagens**.
Todos os direitos reservados © 2025.

## 🤝 Contribuição

Este é um projeto privado da Destinatur. Para sugestões ou melhorias, contacte:

- 📧 reservas.destinatur@gmail.com
- 📱 +351 923 539 713


## 📝 Changelog

### v1.0.0 (2025-05-27)

- ✅ Lançamento inicial
- ✅ Página principal com destinos
- ✅ Sistema de contacto
- ✅ Integração com redes sociais


### v1.1.0 (2025-05-27)

- ✅ Páginas de detalhes de viagens
- ✅ Sistema de navegação com React Router
- ✅ Galeria de imagens
- ✅ Itinerários detalhados
- ✅ Sistema de reservas via WhatsApp

---

**Desenvolvido com ❤️ para a Destinatur**
*Transformamos os seus sonhos de viagem em realidade*

🌍 [destinatur.pt](https://destinatur.pt) | 📱 +351 923 539 713 | 📧 reservas.destinatur@gmail.com

