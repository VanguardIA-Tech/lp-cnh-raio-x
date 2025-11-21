
# Next.js Landing Page + Form Template

Este projeto é um template reutilizável para landing pages com formulário multi-etapas e página de obrigado, pronto para customização rápida.

## Como customizar este template

### 1. Branding e textos principais

- Edite `src/config/template-config.ts` para alterar título do site, descrição, cores, nome da empresa, texto do CTA, número do WhatsApp, URL do webhook e ID do funil.
- Edite `src/content/branding.ts` para ajustar textos de destaque (ex: título e subtítulo da página de obrigado, texto do botão flutuante, etc).

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

### 6. Variáveis de ambiente

| Variável | Uso |
|----------|-----|
| `NEXT_PUBLIC_CLARITY_ID` | Ativa Microsoft Clarity e tracking de rota/evento |
| (futuro) `NEXT_PUBLIC_GA_ID` | Exemplo para Google Analytics (não implementado) |

Crie um `.env.local` com:
```
NEXT_PUBLIC_CLARITY_ID=SEU_ID_AQUI
```

### 7. Checklist para criar novo funil

1. Duplicar repositório / copiar pasta.
2. Ajustar `template-config.ts` (webhook, título, funilId, CTA, cores).
3. Editar `branding.ts` para textos principais.
4. Revisar `form-schema.ts` (adicionar/remover campos).
5. Ajustar etapas do form em `form/page.tsx` se mudou número de passos.
6. Definir `NEXT_PUBLIC_CLARITY_ID` no deploy.
7. Publicar no Vercel ou outro host.

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

 - Presets de aurora/blobs: `src/content/auroras.ts`
 - Decorativos: `src/components/decor/glow-blob.tsx`, `src/components/decor/aurora-field.tsx`

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

## Créditos

Template criado por VanguardIA. Sinta-se livre para reutilizar e adaptar.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
