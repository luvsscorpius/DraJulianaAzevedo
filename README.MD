# Dra. Juliana Azevedo — Site Institucional

Landing page institucional da **Dra. Juliana Azevedo**, médica especialista em saúde mental em Pouso Alegre (MG) e região. O site apresenta a atuação profissional, informações sobre saúde mental, localização do consultório e canais de contato/agendamento.

🔗 **Site em produção:** [www.drajulianaazevedo.com.br](https://www.drajulianaazevedo.com.br/)

## ✨ Sobre o projeto

Single page application desenvolvida em React, com foco em apresentar de forma clara e acolhedora a atuação da Dra. Juliana Azevedo, incluindo:

- Apresentação profissional (seção **Sobre**)
- Informações sobre a área de **Saúde Mental**
- Seção de **Atendimento**
- **Localização** do consultório com mapa interativo (Leaflet)
- Cabeçalho e rodapé com navegação e contatos

## 🛠️ Tecnologias utilizadas

- [React](https://react.dev/) `19` (via [Create React App](https://create-react-app.dev/) / `react-scripts`)
- [styled-components](https://styled-components.com/) — estilização
- [Leaflet](https://leafletjs.com/) + [react-leaflet](https://react-leaflet.js.org/) — mapa de localização
- [react-icons](https://react-icons.github.io/react-icons/) — ícones
- [gh-pages](https://www.npmjs.com/package/gh-pages) — deploy estático
- [semantic-release](https://semantic-release.gitbook.io/) — versionamento e changelog automatizados (com GitHub Actions)

## 📁 Estrutura do projeto

```
DraJulianaAzevedo/
├── .github/workflows/     # CI/CD (release automatizado via semantic-release)
├── frontend/              # aplicação React
│   ├── public/
│   └── src/
│       ├── Components/
│       │   ├── Atendimento/
│       │   ├── Footer/
│       │   ├── GlobalStyle/
│       │   ├── Header/
│       │   ├── Hero/
│       │   ├── Localizacao/
│       │   ├── SaudeMental/
│       │   └── Sobre/
│       ├── Pages/
│       │   └── Home/
│       ├── App.js
│       └── index.js
├── CHANGELOG.md
├── .releaserc.json
└── package.json           # configuração de release (raiz do repositório)
```

## 🚀 Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) e npm instalados.

```bash
# Clone o repositório
git clone https://github.com/luvsscorpius/DraJulianaAzevedo.git
cd DraJulianaAzevedo/frontend

# Instale as dependências
npm install

# Rode em modo desenvolvimento
npm start
```

O site ficará disponível em `http://localhost:3000`.

### Outros scripts disponíveis (dentro de `frontend/`)

| Comando         | Descrição                                          |
|-----------------|-----------------------------------------------------|
| `npm start`     | Inicia o servidor de desenvolvimento                |
| `npm run build` | Gera a build de produção na pasta `build/`          |
| `npm test`      | Executa os testes                                   |

## 📦 Deploy e versionamento

- O deploy do build estático é feito com **gh-pages**.
- O versionamento (tags, `CHANGELOG.md` e releases) é automatizado via **semantic-release**, disparado por GitHub Actions a cada push na branch `main`, seguindo o padrão de *Conventional Commits*.

## 👩‍⚕️ Sobre a Dra. Juliana Azevedo

Médica especialista em saúde mental, atendendo em Pouso Alegre (MG) e região. Para mais informações e agendamento de consultas, acesse o [site oficial](https://www.drajulianaazevedo.com.br/).

## 👤 Autoria

Desenvolvido por [vitorr.dev](https://vitorr.dev) — desenvolvimento de sites e landing pages.

## 📄 Licença

Projeto de uso privado/institucional. Todos os direitos reservados.