# 🎯 Guia de Configuração Centralizada de SEO

## ✅ Agora TUDO está no `template-config.ts`!

Todas as configurações de SEO foram **centralizadas** no arquivo `src/config/template-config.ts` para facilitar a reutilização em outros funis.

---

## 📝 Estrutura do `template-config.ts`

```typescript
export const templateConfig = {
  site: {
    title: "...",           // 👈 Título principal
    description: "...",     // 👈 Descrição principal
    language: "pt-BR",      // 👈 Idioma
    url: "...",            // 👈 URL base (nova!)
  },
  
  branding: {
    companyName: "...",     // 👈 Nome da empresa
    primaryCtaText: "...",
    whatsappNumber: "...",
    whatsappMessage: "...",
  },
  
  seo: {                    // 👈 NOVO! Todas configs de SEO
    keywords: [...],        // 👈 Keywords para Google
    ogImage: "/og-image.png", // 👈 Caminho da imagem OG
    logo: "/logo.png",      // 👈 Caminho do logo
    
    pages: {                // 👈 Config de cada página
      home: {
        title: "...",
        description: "...",
        path: "/",
        robots: { index: true, follow: true },
      },
      form: {
        title: "...",
        description: "...",
        path: "/form",
        robots: { index: false, follow: true },
      },
      thankYou: {
        title: "...",
        description: "...",
        path: "/obrigado",
        robots: { index: false, follow: false },
      },
    },
  },
  
  form: { ... },
  analytics: { ... },
};
```

---

## 🔄 O Que Mudou?

### Antes (❌ Hardcoded):
```typescript
// layout.tsx
url: 'https://cnh.vanguardia.cloud',
keywords: ["palavra1", "palavra2", ...],
images: [{ url: '/og-image.png' }],

// form/page.tsx
title: "Diagnóstico de Eficiência com IA",
url: "https://cnh.vanguardia.cloud/form",
robots: { index: false, follow: true },
```

### Agora (✅ Centralizado):
```typescript
// layout.tsx
url: templateConfig.site.url,
keywords: templateConfig.seo.keywords,
images: [{ url: templateConfig.seo.ogImage }],

// form/page.tsx
title: templateConfig.seo.pages.form.title,
url: `${templateConfig.site.url}${templateConfig.seo.pages.form.path}`,
robots: templateConfig.seo.pages.form.robots,
```

---

## 🚀 Como Criar um Novo Funil (Passo a Passo)

### 1. **Duplique o Template**
```bash
cp -r tamplate-lpl-form meu-novo-funil
cd meu-novo-funil
```

### 2. **Edite APENAS `template-config.ts`**

```typescript
export const templateConfig = {
  site: {
    title: "Meu Novo Funil — Título Atrativo",
    description: "Descrição otimizada para SEO com keywords relevantes.",
    language: "pt-BR",
    url: "https://meufunil.vanguardia.cloud", // 👈 Mudar URL
  },
  
  branding: {
    companyName: "VanguardIA",
    primaryCtaText: "Meu CTA Personalizado",
    whatsappNumber: "+55 11 99999-9999",     // 👈 Seu número
    whatsappMessage: "Olá! Vim do funil X.",
  },
  
  seo: {
    keywords: [                               // 👈 Suas keywords
      "keyword 1",
      "keyword 2",
      "keyword 3",
      // ...
    ],
    ogImage: "/og-image.png",
    logo: "/logo.png",
    
    pages: {
      home: {
        title: "Título da Home",             // 👈 Personalizar
        description: "Descrição da home...",  // 👈 Personalizar
        path: "/",
        robots: { index: true, follow: true },
      },
      form: {
        title: "Título do Form",             // 👈 Personalizar
        description: "Descrição do form...", // 👈 Personalizar
        path: "/form",
        robots: { index: false, follow: true },
      },
      thankYou: {
        title: "Obrigado!",                  // 👈 Personalizar
        description: "Sucesso...",           // 👈 Personalizar
        path: "/obrigado",
        robots: { index: false, follow: false },
      },
    },
  },
  
  form: {
    webhookUrl: "https://sua-url.com/webhook", // 👈 Seu webhook
    funilId: "seu-funil-id",                   // 👈 Seu ID
    funilIdSecondary: "seu-funil-secondary",
    totalSteps: 3,
  },
  
  analytics: {
    clarity: { enabled: true },
    variant: "A",
  },
};
```

### 3. **Crie a Imagem OG**
- **Arquivo**: `/public/og-image.png`
- **Tamanho**: 1200x630px
- **Conteúdo**: Logo + Título do funil

### 4. **Pronto! 🎉**

Todos os arquivos abaixo **automaticamente** usarão as configs:
- ✅ `layout.tsx` (metadata global)
- ✅ `form/page.tsx` (metadata do form)
- ✅ `obrigado/page.tsx` (metadata de obrigado)
- ✅ `sitemap.ts` (URLs do sitemap)
- ✅ `robots.ts` (regras de crawling)
- ✅ `JsonLd.tsx` (dados estruturados)

---

## 📋 Checklist para Novo Funil

- [ ] Atualizar `site.url`
- [ ] Atualizar `site.title` e `site.description`
- [ ] Atualizar `branding.whatsappNumber` e `whatsappMessage`
- [ ] Atualizar `seo.keywords` (10+ keywords relevantes)
- [ ] Atualizar `seo.pages.home.title` e `description`
- [ ] Atualizar `seo.pages.form.title` e `description`
- [ ] Atualizar `seo.pages.thankYou.title` e `description`
- [ ] Atualizar `form.webhookUrl` e `funilId`
- [ ] Criar `/public/og-image.png` (1200x630px)
- [ ] Criar `/public/logo.png` (opcional, para JSON-LD)
- [ ] Testar com validadores de SEO

---

## 🧪 Testar Alterações

### Verificar se está pegando as configs:

1. **Inspecionar HTML**:
```bash
pnpm dev
```
Abra `http://localhost:3000` e inspecione o `<head>`:
```html
<title>Meu Novo Funil — Título Atrativo</title>
<meta name="description" content="..." />
<meta property="og:url" content="https://meufunil.vanguardia.cloud" />
```

2. **Testar Sitemap**:
```
http://localhost:3000/sitemap.xml
```
Deve mostrar as 3 URLs corretas.

3. **Testar Robots**:
```
http://localhost:3000/robots.txt
```
Deve mostrar o host correto.

4. **Validadores Online**:
- Open Graph: https://www.opengraph.xyz/
- Rich Results: https://search.google.com/test/rich-results

---

## 🎨 Personalizando Ainda Mais

### Adicionar Mais Páginas ao SEO:

```typescript
seo: {
  // ... configs existentes
  pages: {
    home: { ... },
    form: { ... },
    thankYou: { ... },
    
    // 👈 NOVA PÁGINA
    about: {
      title: "Sobre Nós",
      description: "Conheça nossa história...",
      path: "/sobre",
      robots: { index: true, follow: true },
    },
  },
}
```

Depois crie `src/app/sobre/page.tsx`:
```typescript
import type { Metadata } from "next";
import { templateConfig } from "@/config/template-config";

export const metadata: Metadata = {
  title: templateConfig.seo.pages.about.title,
  description: templateConfig.seo.pages.about.description,
  // ... resto igual aos outros
};
```

### Adicionar Redes Sociais ao JSON-LD:

```typescript
// template-config.ts
seo: {
  // ...
  socialLinks: [
    "https://linkedin.com/company/vanguardia",
    "https://instagram.com/vanguardia",
    "https://twitter.com/vanguardia",
  ],
}
```

Depois em `JsonLd.tsx`:
```typescript
"sameAs": templateConfig.seo.socialLinks || []
```

---

## 💡 Dicas Pro

### 1. **Keywords Efetivas**:
- Use 8-15 keywords
- Mix de termos amplos e específicos
- Inclua variações (singular/plural)
- Pense no que seu cliente busca

### 2. **Títulos e Descrições**:
- **Título**: 50-60 caracteres (Google corta se passar)
- **Descrição**: 150-160 caracteres
- Inclua keyword principal
- Seja persuasivo, não apenas descritivo

### 3. **URLs**:
- Curtas e descritivas
- Sem caracteres especiais
- Use hífens, não underscores
- Ex: `/diagnostico-ia` melhor que `/diag_IA`

### 4. **Robots**:
- `index: true` = Google pode mostrar nos resultados
- `index: false` = Google não mostra (mas ainda rastreia)
- Use `false` para páginas internas/privadas

---

## 📚 Referências

- **Arquivo de Config**: `src/config/template-config.ts`
- **Documentação SEO**: `docs/seo-optimization.md`
- **Guia de Imagem OG**: `docs/og-image-guide.md`
- **AI Rules**: `AI_RULES.md`

---

## ❓ FAQ

**P: Preciso alterar mais algum arquivo além do `template-config.ts`?**  
R: Não! Todos os outros arquivos pegam as configs de lá automaticamente.

**P: E se eu quiser ter títulos diferentes do padrão?**  
R: Basta editar `seo.pages.nomeDaPagina.title` no config.

**P: Como adiciono mais keywords?**  
R: Adicione no array `seo.keywords` no template-config.

**P: O sitemap atualiza automaticamente?**  
R: Sim! Se você adicionar novas páginas no config, adicione no `sitemap.ts` usando as configs.

---

## 🎉 Benefícios da Centralização

✅ **Um único lugar** para mudar tudo  
✅ **Menos erros** (não esquece de atualizar um arquivo)  
✅ **Rápido** para criar novos funis  
✅ **Consistente** em todas as páginas  
✅ **Fácil manutenção** (futuras mudanças)  
✅ **Type-safe** (TypeScript valida tudo)

---

**Agora você pode criar 10 funis diferentes em minutos só editando `template-config.ts`!** 🚀
