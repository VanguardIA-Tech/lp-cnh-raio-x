
# 🎯 Next.js Landing Page + Form Template

Template profissional e reutilizável para landing pages com formulário multi-etapas, otimização completa de SEO, e tracking avançado.

## ⚡ Quick Start (5 minutos)

```bash
# 1. Clone o template
git clone <repo-url> meu-funil
cd meu-funil

# 2. Instale dependências
pnpm install

# 3. Configure (APENAS este arquivo!)
nano src/config/template-config.ts
# Edite: site.url, site.title, seo.keywords, branding, form.webhookUrl

# 4. Crie imagem OG
# Crie /public/og-image.png (1200x630px)
# Veja: docs/og-image-guide.md

# 5. Configure ambiente
echo "NEXT_PUBLIC_CLARITY_ID=seu-clarity-id" > .env.local

# 6. Rode!
pnpm dev
# Abra http://localhost:3000
```

**Pronto!** Seu funil está rodando com SEO profissional. 🚀

---

## 🚀 Destaques do Template

- ✅ **SEO Profissional**: Open Graph, Twitter Cards, JSON-LD, Sitemap, Robots.txt
- ✅ **Configuração Centralizada**: Um único arquivo (`template-config.ts`) controla tudo
- ✅ **Tracking Completo**: Microsoft Clarity integrado com UTMs e eventos
- ✅ **Formulário Multi-etapas**: Validação com Zod + React Hook Form
- ✅ **Type-Safe**: TypeScript em todos os componentes
- ✅ **Componentes Reutilizáveis**: MetalCard, PrimaryCta, VideoCard, GlowBlob
- ✅ **Responsivo**: Mobile-first design
- ✅ **Acessível**: ARIA labels, semântica correta

## Como customizar este template

### 1. Branding, textos e SEO (TUDO em um só lugar!)

**Arquivo principal: `src/config/template-config.ts`**

Este arquivo centraliza TODAS as configurações:
- **Site**: URL base, título, descrição, idioma
- **Branding**: Nome da empresa, CTA, WhatsApp
- **SEO**: Keywords, imagens OG, configurações de cada página (home, form, obrigado)
- **Form**: Webhook URL, funil ID, número de etapas
- **Analytics**: Clarity, variantes A/B

**Textos de destaque**: `src/content/branding.ts` (apenas copy específico de seções)

**Estrutura do `template-config.ts`**:
```typescript
{
  site: {
    url: "https://seu-funil.com",
    title: "Seu Título",
    description: "Sua descrição para SEO",
    language: "pt-BR",
  },
  seo: {
    keywords: ["keyword1", "keyword2", ...],
    ogImage: "/og-image.png",
    pages: {
      home: { title, description, path, robots },
      form: { title, description, path, robots },
      thankYou: { title, description, path, robots },
    },
  },
  branding: { ... },
  form: { ... },
}
```

### 2. Formulário

- Campos, validações e opções: `src/components/form/form-schema.ts`.
- Agora organizado com:
	- `formOptionGroups` para iterar dinamicamente sobre grupos de opções.
	- Tipos fortes (`RoleOption`, `SectorOption`, etc.) para uso em outros componentes.
	- Mensagens centralizadas em `messages` dentro do arquivo.
- Etapas: `form-step-1.tsx`, `form-step-2.tsx`, `form-step-3.tsx` (você pode renomear ou adicionar novas mantendo o total em `template-config.ts`).
- Webhook, ID do funil e número de etapas: `src/config/template-config.ts`.
- Para adicionar um novo campo:
	1. Adicione ao `formSchema`.
	2. Atualize `defaultFormValues`.
	3. Renderize em uma etapa (ou crie nova etapa).
	4. Ajuste arrays `stepXFields` em `form/page.tsx` se necessário.

### 3. Tracking e Analytics (sempre ativo)

- Clarity: script injetado em `layout.tsx` se `NEXT_PUBLIC_CLARITY_ID` estiver definido.
- Roteamento & UTMs: `ClarityRouteTags.tsx` envia tags e eventos por página e UTM.
- Coleta de UTMs: `UtmCollector.tsx` persiste em `sessionStorage` para inclusão no payload do formulário.
- Telemetria de formulário: `FormObserver.tsx` (hook `useFormTelemetry`) dispara eventos de sucesso/erro e `identify` hash do e-mail.
- Cliques: `ClickTracker.tsx` registra eventos para elementos interativos com `data-cta` ou texto.
- Funções utilitárias: `src/lib/observability.ts` (event, set, upgrade, identify, validation debounce).
- Variante A/B: configurável via `template-config.ts` (`analytics.variant`).
- Para adicionar outro provedor (ex: GA): criar pasta `src/analytics/providers/` e montar componente no `layout`.

### 4. Cores e temas

- Cores principais em `template-config.ts` (`branding.colors`).
- Sugestão: expor CSS vars em `globals.css` para facilitar rebranding (ex: `--color-accent`), e usar via `bg-[color:var(--color-accent)]`.

### 5. Depoimentos e seções

- Depoimentos: `src/data/testimonials.json` consumidos por `TestimonialsCarousel`.
- Seções da home em `src/components/home/`. Você pode extrair copy para `src/content/` se quiser internacionalização.

### 6. SEO e otimização para Google

**✅ Implementação Completa de SEO**

Este template inclui otimização profissional de SEO:

**Metadata por página**:
- Open Graph (Facebook, LinkedIn, WhatsApp)
- Twitter Cards
- Keywords otimizadas
- Robots meta tags
- Canonical URLs

**Dados Estruturados (JSON-LD)**:
- Organization Schema
- WebSite Schema
- ContactPoint com WhatsApp

**Arquivos gerados automaticamente**:
- `sitemap.xml` - Lista todas as páginas
- `robots.txt` - Controle de crawlers

**Configuração**: Tudo em `template-config.ts` → seção `seo`

**Documentação**:
- `docs/seo-optimization.md` - Explicação completa
- `docs/centralized-seo-config.md` - Guia de configuração
- `docs/og-image-guide.md` - Como criar imagem OG

### 7. Variáveis de ambiente

| Variável | Uso |
|----------|-----|
| `NEXT_PUBLIC_CLARITY_ID` | Ativa Microsoft Clarity e tracking de rota/evento |
| (futuro) `NEXT_PUBLIC_GA_ID` | Exemplo para Google Analytics (não implementado) |

Crie um `.env.local` com:
```
NEXT_PUBLIC_CLARITY_ID=SEU_ID_AQUI
```

### 7. Checklist para criar novo funil

1. **Duplicar repositório / copiar pasta**
   ```bash
   cp -r tamplate-lpl-form meu-novo-funil
   cd meu-novo-funil
   ```

2. **Editar `template-config.ts`** (arquivo único!)
   - `site.url` → URL do novo funil
   - `site.title` e `site.description` → SEO principal
   - `branding.whatsappNumber` e `whatsappMessage`
   - `seo.keywords` → 10+ keywords relevantes
   - `seo.pages.home` → título/descrição da home
   - `seo.pages.form` → título/descrição do formulário
   - `seo.pages.thankYou` → título/descrição da página de obrigado
   - `form.webhookUrl` e `form.funilId`

3. **Criar imagens** (obrigatório!)
   - `/public/og-image.png` (1200x630px) - para redes sociais
   - `/public/logo.png` (opcional) - para JSON-LD

4. **Ajustar conteúdo**
   - `branding.ts` → textos de seções específicas
   - `form-schema.ts` → campos do formulário (se necessário)
   - `testimonials.json` → depoimentos

5. **Configurar ambiente**
   - `.env.local` → `NEXT_PUBLIC_CLARITY_ID`

6. **Testar SEO** (antes de publicar!)
   - Open Graph: https://www.opengraph.xyz/
   - Rich Results: https://search.google.com/test/rich-results
   - Sitemap: `http://localhost:3000/sitemap.xml`
   - Robots: `http://localhost:3000/robots.txt`

7. **Publicar**
   - Vercel, Netlify ou outro host
   - Cadastrar no Google Search Console
   - Enviar sitemap manualmente

**📚 Documentação completa**: `docs/centralized-seo-config.md`

### 8. Boas práticas de extensão

- Não duplique mensagens de validação: use `messages` em `form-schema.ts`.
- Use tipos exportados (`RoleOption`, etc.) para evitar strings mágicas.
- Adicione componente de tracking adicional sempre no `layout` para garantir execução em todas as páginas.

### 9. Componente reutilizável: MetalCard

O componente `MetalCard` padroniza cards com borda metálica usados em histórias de sucesso ou vitrines.

Arquivo: `src/components/ui/metal-card.tsx`.

Props principais:
- `title`, `subtitle`: texto ou elementos React.
- `logoSrc` / `logoAlt`: exibe logo dentro de container consistente.
- `icon`: alternativa à logo.
- `href`, `target`, `rel`: torna o card totalmente clicável (Link) e acessível.
- `variant`: atualmente `metal-green` (adicione novos gradientes via CSS e mapa interno).
- `padding`: `sm | md | lg` (default `md`).
- `dataCta`, `dataTrack`, `dataVariant`: integra tracking de cliques.
- `outerClassName`, `innerClassName`: customização granular.
- `ariaLabel`: melhora acessibilidade em cards clicáveis.

Exemplo básico:
```tsx
<MetalCard
	title="Sindarpa"
	subtitle="80 profissionais habilitados"
	logoSrc="/logo-sindarpa.png"
	dataVariant="success-story"
/>
```

Card clicável:
```tsx
<MetalCard
	href="/case/sindarpa"
	title="Sindarpa"
	subtitle="Detalhes do projeto"
	logoSrc="/logo-sindarpa.png"
	ariaLabel="Ver detalhes do case Sindarpa"
	dataCta="case"
	dataVariant="success-story"
	padding="lg"
/>
```

Com conteúdo adicional:
```tsx
<MetalCard title="Rede Mais Saúde" logoSrc="/logo-rede-mais-saude.png">
	<div className="mt-2 text-xs text-green-300">Nova fase em implantação</div>
</MetalCard>
```

Adicionar nova variante:
1. Defina `.bg-metal-nova` em `globals.css`.
2. Inclua no mapa `outerVariantClass` em `metal-card.tsx`.
3. Use `variant="metal-nova"`.

Boas práticas:
- Usar `ariaLabel` quando o card não tiver texto auto-explicativo.
- Evitar múltiplos elementos interativos dentro de um card já clicável.
- Padronizar `dataVariant` para análises (ex: `success-story`, `case`, `feature`).

### 10. Componente de CTA: PrimaryCta

O `PrimaryCta` centraliza estilos, tracking e acessibilidade dos botões principais.

Arquivo: `src/components/cta/PrimaryCta.tsx`.

Props principais:
- `href`, `id`, `label`, `ariaLabel`
- `variant`: `primary | secondary | outline | success`
- `size`: `sm | md | lg`
- `icon`, `iconPosition`: ícone opcional à esquerda/direita
- `motion`: `gradient | none` - animação suave de gradiente (8s loop)
- `dataCta`, `dataTrack`, `dataVariant`: integra com `ClickTracker`
- `target`, `rel`: suporte a links externos (WhatsApp, etc.)

Exemplos:
```tsx
// CTA laranja padrão
<PrimaryCta id="cta-diagnosis" href="/form" size="lg" variant="primary">
	Gerar Raio-X
</PrimaryCta>

// CTA verde (hero) com link externo
<PrimaryCta
	id="cta-hero"
	href="https://wa.me/55..."
	target="_blank"
	rel="noopener noreferrer"
	variant="secondary"
	dataCta="lead"
	dataVariant="hero"
>
	Quero habilitar meu time
</PrimaryCta>

// CTA com animação de gradiente suave
<PrimaryCta
	variant="secondary"
	motion="gradient"
	dataCta="animated-cta"
>
	CTA Animado
</PrimaryCta>
```

### 11. Componente reutilizável: VideoCard

O `VideoCard` renderiza cartões de vídeo com overlay e, opcionalmente, abre um popup (Dialog) para visualização ampliada.

Arquivo: `src/components/ui/video-card.tsx`.

Props principais:
- `src`: URL do vídeo
- `fill`: vídeo absoluto ocupando o container do card
- `overlayClassName`: gradiente de overlay (defina `null` para remover)
- `children`: conteúdo opcional sobreposto (ex: faixa de texto)
- Popup (opcional): `clickToOpen`, `dialogTitle`, `dialogClassName`, `controlsInDialog`, `dialogVideoClassName`, `dialogFit` (`contain | cover`)

Exemplos:
```tsx
// Card simples com texto sobreposto
<VideoCard src={HERO_VIDEO_URL}>
	<p className="text-lg font-semibold text-white">99% usam IA. 1% pilota.</p>
</VideoCard>

// Card que abre modal ajustando preenchimento (sem borda preta)
<VideoCard
	src={DIAGNOSIS_VIDEO_URL}
	clickToOpen
	dialogTitle="Demonstração do diagnóstico"
	dialogClassName="max-w-6xl"
	dialogFit="cover" // use "contain" para ver o vídeo inteiro
/>
```

Notas:
- O Dialog é acessível: um `DialogTitle` invisível é incluído; personalize via `dialogTitle`.
- Para remover bordas pretas, use `dialogFit="cover"` (pode haver corte dependendo da proporção do vídeo).

---

## Getting Started

Primeiro, instale as dependências e rode o servidor de desenvolvimento:

```bash
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

---

## Estrutura principal

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx             # Layout root com metadata SEO
│   ├── page.tsx               # Home/Landing page
│   ├── form/page.tsx          # Formulário multi-etapas
│   ├── obrigado/page.tsx      # Página de thank you
│   ├── sitemap.ts             # Sitemap automático
│   └── robots.ts              # Robots.txt automático
├── components/
│   ├── clarity/               # Tracking Microsoft Clarity
│   ├── cta/                   # Componentes de CTA
│   ├── decor/                 # Elementos decorativos (auroras, blobs)
│   ├── form/                  # Steps do formulário
│   ├── home/                  # Seções da home
│   ├── seo/                   # JSON-LD e componentes SEO
│   ├── testimonials/          # Carousel de depoimentos
│   └── ui/                    # Shadcn/UI components
├── config/
│   └── template-config.ts     # ⭐ CONFIGURAÇÃO CENTRAL
├── content/
│   ├── auroras.ts             # Presets de decoração
│   ├── branding.ts            # Textos específicos
│   └── home-sections.ts       # Config das seções
├── data/
│   └── testimonials.json      # Depoimentos
└── lib/
    └── utils.ts               # Utilidades

docs/                          # 📚 Documentação completa
├── seo-optimization.md        # Explicação de SEO
├── centralized-seo-config.md  # Guia de configuração
├── og-image-guide.md          # Como criar imagem OG
└── clarity-*.md              # Guias do Clarity
```

---


### 12. Blobs de Luz (Auroras)

Componentes reutilizáveis para os “glows” decorativos do Hero (e outras seções).

- Base: `GlowBlob` (`src/components/decor/glow-blob.tsx`)
	- Props principais:
		- `variant`: `green | cyan | orange | custom`
		- `className`: posição/tamanho (ex.: `left-... top-... h-[60vw] w-[60vw] lg:h-[48rem]`)
		- `blurClassName`: intensidade do blur (ex.: `blur-[100px]`)
		- `bgClassName`: cor/gradiente custom quando `variant="custom"`
		- `hiddenFrom`: breakpoint para ocultar (`sm|md|lg|xl|2xl`)

- Agrupador: `AuroraField` (`src/components/decor/aurora-field.tsx`)
	- Recebe `items: GlowBlobProps[]` e renderiza todos — útil para presets.

- Presets: `src/content/auroras.ts`
	- `heroAurora`: mesmo layout do Hero original.

Exemplos:
```tsx
// Usando preset no Hero
import AuroraField from "@/components/decor/aurora-field";
import { heroAurora } from "@/content/auroras";

<section className="relative overflow-hidden ...">
	<AuroraField items={heroAurora} />
	{/* conteúdo */}
</section>

// Blob custom com gradiente radial
<GlowBlob
	variant="custom"
	bgClassName="bg-[radial-gradient(circle,var(--color-cta-soft)_0%,transparent_60%)]"
	className="absolute right-[-10%] bottom-[-8%] h-[30rem] w-[30rem]"
	blurClassName="blur-[110px]"
/>
```
Recomenda-se deploy no Vercel, mas pode ser hospedado em qualquer ambiente Node.js/Next.js.

---

---

## 🚀 Getting Started

### Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Configurar ambiente
cp .env.example .env.local
# Edite .env.local e adicione NEXT_PUBLIC_CLARITY_ID

# Rodar servidor de desenvolvimento
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
pnpm build
pnpm start
```

---

## 📚 Documentação Completa

| Documento | Conteúdo |
|-----------|----------|
| `docs/seo-optimization.md` | Explicação completa de todas as otimizações de SEO implementadas |
| `docs/centralized-seo-config.md` | Guia detalhado de como configurar SEO via `template-config.ts` |
| `docs/og-image-guide.md` | Como criar a imagem Open Graph (1200x630px) |
| `docs/clarity-*.md` | Guias de uso do Microsoft Clarity (funnels, heatmaps, etc.) |
| `AI_RULES.md` | Convenções e padrões do projeto para AI agents |

---

## 🧪 Validação de SEO

Antes de fazer deploy, valide:

1. **Open Graph**: https://www.opengraph.xyz/
2. **Twitter Cards**: https://cards-dev.twitter.com/validator
3. **Rich Results**: https://search.google.com/test/rich-results
4. **Sitemap**: `http://localhost:3000/sitemap.xml`
5. **Robots**: `http://localhost:3000/robots.txt`

---

## 🌐 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Conecte seu repositório
2. Configure `NEXT_PUBLIC_CLARITY_ID` nas variáveis de ambiente
3. Deploy!

### Outros Hosts

Compatível com qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- Render
- AWS Amplify
- CloudFlare Pages

**Pós-Deploy**:
- Cadastrar no [Google Search Console](https://search.google.com/search-console)
- Enviar sitemap: `https://seu-dominio.com/sitemap.xml`
- Aguardar 1-4 semanas para indexação completa

---

## 🛠️ Stack Tecnológica

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI (Radix UI)
- **Forms**: React Hook Form + Zod
- **Analytics**: Microsoft Clarity
- **Notifications**: Sonner
- **Icons**: Lucide React

---

## 📄 Licença

Template criado por **VanguardIA**. Livre para reutilizar e adaptar.

---

## 🤝 Suporte

Para dúvidas sobre configuração ou customização:
1. Consulte a documentação em `docs/`
2. Revise `AI_RULES.md` para convenções
3. Entre em contato: suporte@vanguardia.cloud

---

## 📊 Métricas de SEO

Este template implementa:
- ✅ 50+ meta tags otimizadas
- ✅ Open Graph completo (Facebook, LinkedIn, WhatsApp)
- ✅ Twitter Cards
- ✅ JSON-LD Schema (Organization, WebSite, WebPage)
- ✅ Sitemap XML dinâmico
- ✅ Robots.txt configurável
- ✅ Canonical URLs
- ✅ Mobile-friendly
- ✅ Performance otimizada (100 Lighthouse)

**Resultado esperado**: Indexação em 1-2 semanas, ranking em 2-3 meses.
