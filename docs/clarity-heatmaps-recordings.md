# Heatmaps & Recordings — Microsoft Clarity (Vanguardia • icia.vanguardia.grupo)

## Objetivo
Padronizar análises de comportamento por etapa do funil, por variação e por canal.

## Heatmaps (Click • Scroll • Area)
1. **LP — All**  
   - Filtro: `page_type = lp`
   - Variações: duplicar por `variant = A/B/C`
   - UTM: duplicar as versões com `utm_source = <principal>`
   - Observações: validar mapa de scroll (dobras importantes, seções frias)

2. **Form — All**  
   - Filtro: `page_type = form`
   - Observações: verificar dispersão de cliques fora do botão de submit; elementos distratores

3. **Obrigado — All**  
   - Filtro: `page_type = thanks`
   - Observações: links de upsell/navegação e engajamento pós-conversão

## Recordings
- **Abandono no Form**  
  - Incluir: `page_type = form`  
  - Excluir: `page_type = thanks`
- **Erros de validação**  
  - Incluir: evento `form:validation_error`
- **Sucesso de Form**  
  - Incluir: evento `form:submit_success`
- **Clicou CTA na LP sem enviar Form**  
  - Incluir: Smart Event `click:any_button:lp` OU eventos custom `click:/:*`  
  - Excluir: `form:submit_success`

## Dicas de leitura
- Assista 10–20 gravações por segmento antes de concluir hipóteses.
- Priorize sessões com maior duração/engajamento e com `upgrade` (priorizadas).
- Combine com Heatmaps para localizar padrões (ex.: áreas de baixo scroll + baixo clique).

## Troubleshooting rápido
- **Poucas sessões gravadas**: validar consent, volume de tráfego e `upgrade` nos eventos críticos.
- **Heatmap vazio**: conferir filtro (page_type/variant/UTM) e janela de datas.
- **Eventos faltando**: revisar ClickTracker/Form handlers e se o ID do Clarity está correto.