# 📅 Agenda Web

Sistema simples de agendamento de serviços desenvolvido como desafio técnico para processo seletivo de Desenvolvedor Júnior.

A aplicação permite que clientes realizem agendamentos de serviços e que administradores gerenciem os atendimentos através de um painel administrativo.

---

# 🚀 Demonstração

🔗 Deploy:
(Adicionar link após publicação)

🔗 Repositório:
(Adicionar link do GitHub)

---

# 📌 Funcionalidades

## 👤 Área do Cliente

- Realizar agendamento de serviço;
- Informar nome, telefone, serviço, data e horário;
- Visualizar confirmação do agendamento;
- Consultar horários disponíveis;
- Bloqueio automático de horários já ocupados;
- Validação básica dos campos;
- Máscara automática no telefone;
- Bloqueio de datas anteriores ao dia atual.

---

## 👨‍💼 Área Administrativa

- Visualização de todos os agendamentos;
- Visualização dos dados dos clientes;
- Dashboard com informações gerais;
- Filtro de agendamentos por data;
- Alteração do status do atendimento:

  - 🟡 Agendado
  - 🔵 Confirmado
  - 🟢 Concluído
  - 🔴 Cancelado

- Exclusão de agendamentos.

---

# 🛠️ Tecnologias utilizadas

## Front-end

- HTML5
- CSS3
- JavaScript

## Armazenamento

- LocalStorage

## Ferramentas

- Visual Studio Code
- Git
- GitHub
- Navegador Google Chrome

---

# 📂 Estrutura do projeto

```
agenda-web/

│
├── index.html
├── cliente.html
├── admin.html
│
├── css/
│   ├── style.css
│   └── admin.css
│
├── js/
│   ├── storage.js
│   ├── utils.js
│   ├── app.js
│   └── admin.js
│
└── README.md
```

---

# 💡 Decisões técnicas

O projeto foi desenvolvido utilizando apenas HTML, CSS e JavaScript puro com o objetivo de demonstrar domínio dos fundamentos do desenvolvimento web.

Para persistência dos dados foi utilizado o LocalStorage do navegador, permitindo armazenar os agendamentos sem a necessidade de um backend.

A aplicação foi separada em diferentes arquivos para facilitar a organização e manutenção:

- `storage.js`: responsável pela comunicação com o armazenamento local;
- `utils.js`: contém funções auxiliares reutilizáveis;
- `app.js`: controla a área do cliente;
- `admin.js`: controla o painel administrativo.

---

# 🤖 Uso de Inteligência Artificial

Durante o desenvolvimento foi utilizada Inteligência Artificial como ferramenta de apoio para:

- Auxílio na organização da estrutura do projeto;
- Revisão de código;
- Sugestões de melhorias de experiência do usuário;
- Apoio na documentação;
- Discussão de decisões técnicas.

As implementações foram revisadas e compreendidas durante o desenvolvimento do projeto.

---

# ▶️ Como executar o projeto localmente

## 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

## 2. Acesse a pasta do projeto

```bash
cd agenda-web
```

## 3. Execute o projeto

Como o projeto utiliza apenas HTML, CSS e JavaScript, basta abrir o arquivo:

```
index.html
```

no navegador.

Também é possível utilizar extensões como:

```
Live Server
```

no Visual Studio Code para executar localmente.

---

# 🔐 Credenciais de acesso

A aplicação não possui sistema de login.

A área administrativa está disponível através do menu:

```
Painel Administrativo
```

---

# 📱 Responsividade

A interface foi desenvolvida pensando em diferentes tamanhos de tela:

- Desktop;
- Tablets;
- Smartphones.

---

# 📚 Aprendizados

Durante o desenvolvimento deste projeto foram aplicados conceitos como:

- Manipulação do DOM;
- Eventos JavaScript;
- Arrays e objetos;
- Funções reutilizáveis;
- Armazenamento no navegador;
- Organização de arquivos;
- Responsividade com CSS;
- Boas práticas de estruturação.

---

# 👨‍💻 Autor

**Vinícius Brandão**

Desenvolvedor Front-End em formação.

Tecnologias de interesse:

- HTML
- CSS
- JavaScript
- React

