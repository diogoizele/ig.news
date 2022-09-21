# ig.news 🗞

![Ig news](public/application_screenshot.png)

O projeto `ig.news` busca o aprendizado do
framework `NextJS`, abordando de ponta a ponta
as funcionalidades mais usadas da ferramenta:

- Server Side Rendering
- Next Routing
- Serverless- API Routes

### API Serverless

O NextJS possui a funcionalidade de API
routes, que usa o modelo de serverless
para execução de uma espécie de backend
feita no frontend.

Serverless é um modelo de desenvolvimento
nativo da nuvem que permite que os
desenvolvedores criem e executem aplicativos
sem precisar gerenciar servidores.

Para criação do banco de dados do `ig.news`
optou-se pela utilização do banco de dados
**FaunaDB**.

A ferramenta em questão é
recomendada pela própria empresa do NextJS,
a Vercel, e possui uma documentação e API
mais simples, além de uma melhor precificação se comparado com as outras
alternativas do mercado, como por exemplo o DynamoDB da AWS.

### Credentials

Credentials são chaves de segurança que não
devem estar públicas para que os usuários
da aplicação possam conferir. Geralmente
são chaves de acesso e controle de APIs.

Logo, faz-se necessário um nível de
encapsulamento para estes segredos, de uma
forma em que não fiquei públicos no código do `frontend`. O NextJS cuida disso ao
usarmos essas `credentials` em 3 escopos:

- método `getServerSideProps()` (SSR)
- método `getStaticProps()` (SSG)
- API routes
