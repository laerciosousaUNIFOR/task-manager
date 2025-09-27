# 📌 Task Manager - Projeto de Computação em Nuvem

Aplicação web simples para gerenciamento de tarefas, desenvolvida como parte da disciplina de Desenvolvimento de Software para Nuvem.  
Implementa autenticação com Google e CRUD de tarefas em tempo real, utilizando **Firebase** no back-end e **Netlify** no deploy.

---

## ✅ Funcionalidades
- Login/Logout com Google (Firebase Authentication)
- Criar, Listar, Editar e Remover tarefas (Firestore)
- Regras de segurança por usuário (cada um vê apenas suas próprias tarefas)
- Deploy contínuo via Netlify
- Teste automatizado em nuvem (Jest + GitHub Actions)

---

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
```

---

## 🚀 Como rodar

### 1. Rodar localmente
```bash
git clone https://github.com/laerciosousaUNIFOR/task-manager.git
```

- Abra o arquivo `index.html` diretamente no navegador  
  ou  
- Use a extensão **Live Server** no VS Code (abre em `http://localhost:5500`)

⚠️ Importante: ao rodar localmente, certifique-se de que o domínio `localhost` esteja adicionado em  
**Firebase Console → Authentication → Settings → Authorized domains**

---

### 2. Rodar online
A aplicação já está publicada no Netlify:  
👉 [https://laerciounifordevsoftnuvem.netlify.app/](https://laerciounifordevsoftnuvem.netlify.app/)

---

## 🧪 Testes automatizados

- Implementado com **Jest** e executado em **GitHub Actions**
- Arquivos principais:
  - `functions.js` → funções utilitárias
  - `functions.test.js` → testes unitários
  - `.github/workflows/tests.yml` → pipeline CI

Fluxo:
1. A cada **push** ou **pull request**, o Actions instala dependências e roda `npm test`.
2. O resultado aparece na aba **Actions** do repositório.

---

## 🌐 Links
- App (Netlify): [https://laerciounifordevsoftnuvem.netlify.app/](https://laerciounifordevsoftnuvem.netlify.app/)  
- Repositório (GitHub): [https://github.com/laerciosousaUNIFOR/task-manager](https://github.com/laerciosousaUNIFOR/task-manager)

---

## 📖 Tecnologias em Nuvem
- **Netlify** → deploy automático do front-end
- **Firebase Authentication** → login/logout via Google
- **Firebase Firestore** → banco de dados NoSQL em nuvem
- **GitHub** → versionamento do código
- **GitHub Actions** → execução de testes automatizados em nuvem

---

## 👨‍💻 Autor
**Francisco Laércio Moura de Sousa Filho - matricula: 2317769**  
Projeto desenvolvido como parte da disciplina **Desenvolvimento de Software para Nuvem**.
