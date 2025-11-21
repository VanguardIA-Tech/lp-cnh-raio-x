# Smart Events — Microsoft Clarity (Vanguardia • icia.vanguardia.grupo)

## Objetivo
Padronizar Smart Events para cliques em botões/links por página do funil e (opcional) um evento de API para “form:submit_success”.

## Nomenclatura
- click:any_button:lp
- click:any_button:form
- click:any_button:thanks
- (opcional) form:submit_success (API event)

## Seletores base
- Universal: `button, [role="button"], a, input[type="submit"], *[data-cta]`
- LP: `*[data-cta], header a, main a, button, [role="button"]`
- Form: `form button[type="submit"], input[type="submit"], *[data-cta="form-submit"]`
- Obrigado: `main a, button, [role="button"], *[data-cta]`

## Filtros
- Preferir **Tag `page_type`** = lp | form | thanks
- Alternativa: “URL contém” `/`, `/form`, `/obrigado`

## Passo a passo na UI do Clarity
1. Settings → Smart events → New → Button clicks
2. Nomear conforme acima
3. Definir seletor + filtro de página (tag/URL)
4. Salvar

## API Event (opcional)
- Tipo: Custom (API)
- Nome: form:submit_success
- Nosso código já dispara via `clarity("event","form:submit_success")`

## Boas práticas
- Usar `data-cta` nos principais botões
- Marcar `data-track="false"` para elementos a ignorar
- Evitar PII em rótulos/atributos

## Checklist rápido (UI do Clarity)
- [ ] `click:any_button:lp` criado (filtro por `page_type=lp` ou URL correta)
- [ ] `click:any_button:form` criado (filtro por `page_type=form` ou URL correta)
- [ ] `click:any_button:thanks` criado (filtro por `page_type=thanks` ou URL correta)
- [ ] (Opcional) `form:submit_success` (API event) criado
- [ ] Teste rápido: cliques em cada página aparecem como Smart Event