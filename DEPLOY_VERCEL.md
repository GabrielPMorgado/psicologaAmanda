# 🚀 Como Publicar no Vercel

## Passo a Passo:

### 1️⃣ Fazer Login no Vercel
Abra o terminal e execute:
```bash
vercel login
```
Escolha a opção de login (GitHub, GitLab, Bitbucket ou Email)

### 2️⃣ Fazer o Deploy
No terminal, execute:
```bash
vercel
```

### 3️⃣ Responda as perguntas:
- **Set up and deploy?** → Pressione ENTER (Yes)
- **Which scope?** → Escolha sua conta
- **Link to existing project?** → N (No)
- **Project name?** → psicologaamanda (ou pressione ENTER)
- **In which directory is your code?** → ./ (pressione ENTER)
- **Want to override settings?** → N (No)

### 4️⃣ Aguarde o Deploy
O Vercel vai:
- 📦 Fazer build do projeto
- 🚀 Fazer upload
- ✅ Gerar URL de produção

### 5️⃣ Acessar o Site
Ao final, você receberá 2 URLs:
- **Preview:** URL temporária para testes
- **Production:** URL definitiva do site

## 📝 Comandos Úteis:

```bash
# Deploy em produção
vercel --prod

# Ver seus projetos
vercel list

# Ver logs
vercel logs
```

## 🌐 Domínio Personalizado

Após o deploy, você pode adicionar um domínio personalizado:
1. Acesse: https://vercel.com/dashboard
2. Selecione seu projeto
3. Vá em "Settings" → "Domains"
4. Adicione seu domínio

## 🔄 Atualizações Futuras

Para atualizar o site:
```bash
git add .
git commit -m "Atualização"
vercel --prod
```

---

✨ **Dica:** Salve a URL de produção para compartilhar!
