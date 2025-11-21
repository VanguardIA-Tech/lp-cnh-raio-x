# Funnels — Microsoft Clarity (Vanguardia • icia.vanguardia.grupo)

## Objetivo
Padronizar e documentar a criação de funis de conversão no Microsoft Clarity para medir o fluxo principal (LP ▸ Form ▸ Obrigado) e analisar o impacto de diferentes variações (`variant`) e canais (`utm_*`).

## Padrões
- **Etapas do Funil:** Usar a tag `page_type` para definir as etapas, garantindo robustez contra mudanças de URL.
- **Janela de Análise:** Usar "Last 7 days" ou "Last 28 days" como padrão.
- **Nomeação:**
  - `Funnel • LP→Form→Obrigado (All)`
  - `Funnel • LP→Form→Obrigado (Variant A)`
  - `Funnel • LP→Form→Obrigado (Variant B)`

## Passo a passo na UI do Clarity
1. No painel do Clarity, vá para **Settings** › **Funnels** › **New**.
2. Adicione as seguintes etapas, usando o tipo "Page visit" e filtrando por Tag:
   - **Step 1:** Filter by Tag → `page_type` is `lp`.
   - **Step 2:** Filter by Tag → `page_type` is `form`.
   - **Step 3:** Filter by Tag → `page_type` is `thanks`.
3. Nomeie o funil como **Funnel • LP→Form→Obrigado (All)** e salve.
4. Para criar funis por variante, clone o funil principal:
   - Abra o funil recém-criado, clique nos três pontos (⋮) e selecione **Clone**.
   - Adicione um filtro global ao funil clonado: **Filter by Tag** → `variant` is `A`.
   - Renomeie para **Funnel • LP→Form→Obrigado (Variant A)** e salve.
   - Repita o processo para outras variantes (B, C, etc.).

## Segmentos Salvos Recomendados
Crie os seguintes segmentos na seção **Segments** do Clarity para análises recorrentes:

- **Segment • Abandonou no Form**
  - **Inclui:** `page_type = form`
  - **Exclui:** `page_type = thanks`

- **Segment • Chegou à Obrigado (Convertidos)**
  - **Inclui:** `page_type = thanks`

- **Segment • Clicou CTA na LP mas não enviou Form**
  - **Inclui:** Smart Event `click:any_button:lp`
  - **Exclui:** Custom Event `form:submit_success`

- **Segment • Variant A (All Traffic)**
  - **Filtro:** `variant = A`

- **Segment • UTM Paid (All)**
  - **Filtro:** `utm_medium = cpc` (ou outra convenção de tráfego pago)

## Recomendações de Análise
- Compare as taxas de conversão entre os funis "All" e os de variantes (A/B/C) para medir a performance de cada versão.
- Aplique segmentos de UTM (ex: "UTM Paid") aos funis para entender a performance por canal.
- Use o segmento "Abandonou no Form" para filtrar **Recordings** e identificar pontos de fricção no preenchimento.