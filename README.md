
# Task Manager - Projeto em Nuvem

Este projeto foi desenvolvido como parte da **Atividade Parcial N697 25.2**.

## 📌 Objetivo
Criar um aplicativo web simples de gerenciamento de tarefas, utilizando:
- Front-end em **HTML/CSS/JS**
- **Firebase** para autenticação e banco de dados
- Hospedagem em **Netlify**
- Versionamento em **GitHub**

## 🚀 Como rodar
1. Baixe/clonar o repositório:
   ```bash
   git clone https://github.com/laerciosousaUNIFOR/task-manager.git
   ```
2. Abra o arquivo `index.html` no navegador.

## 🌐 Deploy
🔗 Link do site no Netlify:https://laerciounifordevsoftnuvem.netlify.app/

## 🧱 Arquitetura

```mermaid
flowchart LR
  A[Navegador (Front-end HTML/JS)]
  B[Firebase Auth]
  C[Firestore (DB)]
  D[Netlify]
  E[GitHub]

  A -->|Login Google| B
  A -->|CRUD tarefas| C
  A -. Deploy .-> D
  A -. Código/Versão .-> E


```markdown
## ✅ Funcionalidades
- Login/Logout com Google (Firebase Authentication)
- Criar, Listar, Editar e Remover tarefas (Firestore)
- Regras de segurança por usuário (cada um vê só suas tarefas)
- Deploy contínuo no Netlify
- Teste automatizado (Jest + GitHub Actions)

## 🧪 Como rodar os testes (nuvem)
- Os testes rodam automaticamente no GitHub Actions a cada push.
- Workflow: `.github/workflows/tests.yml`

## 🌐 Links
- App (Netlify): https://app.netlify.com/teams/laerciosousaunifor/projects
- Repositório: https://github.com/laerciosousaUNIFOR/task-manager

## 👨‍💻 Autor
Francisco Laércio Moura de Sousa Filho - matricula: 2317769
