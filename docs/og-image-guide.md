# Como Criar a Imagem Open Graph

A imagem Open Graph (`og-image.png`) é **essencial** para que seus links tenham preview visual ao serem compartilhados em redes sociais.

## 📐 Especificações

- **Dimensões**: 1200x630 pixels
- **Formato**: PNG ou JPG
- **Tamanho máximo**: 8 MB (recomendado: < 1 MB)
- **Localização**: `/public/og-image.png`

## 🎨 Opções para Criar

### Opção 1: Canva (Recomendado - Gratuito)
1. Acesse: https://www.canva.com/
2. Busque por "Facebook Post" ou "Open Graph"
3. Configure dimensões para 1200x630px
4. Adicione:
   - Logo da VanguardIA
   - Título: "Eficiência Inteligente para Empresas"
   - Subtítulo: "Programa CNH Corporativa"
   - Cores da marca
5. Exporte como PNG

### Opção 2: Figma (Gratuito)
1. Crie um frame 1200x630px
2. Adicione os elementos visuais
3. Exporte como PNG 2x

### Opção 3: Photoshop/GIMP
1. Novo documento: 1200x630px
2. Design com elementos da marca
3. Salve como PNG com qualidade alta

### Opção 4: Ferramenta Online
- https://www.opengraph.xyz/
- https://www.bannerbear.com/
- https://ogimage.gallery/

## ✅ Checklist de Conteúdo

A imagem deve incluir:
- [ ] Logo da VanguardIA
- [ ] Título principal do site
- [ ] Cores da marca (laranja #F97316, verde)
- [ ] Texto legível mesmo em thumbnail pequeno
- [ ] Sem texto muito pequeno (< 20px)
- [ ] Boa proporção de contraste

## 🎯 Dicas de Design

1. **Texto grande e legível**: Use fontes >= 40px
2. **Contraste alto**: Texto escuro em fundo claro ou vice-versa
3. **Zona segura**: Deixe margem de 50px em todos os lados
4. **Hierarquia visual**: Destaque o elemento mais importante
5. **Simplicidade**: Menos é mais, evite poluição visual

## 📍 Onde Colocar

Salve o arquivo em:
```
/public/og-image.png
```

O Next.js irá servir automaticamente de:
```
https://cnh.vanguardia.cloud/og-image.png
```

## 🧪 Como Testar

Após criar e colocar a imagem:

1. **Facebook Debugger**:
   - https://developers.facebook.com/tools/debug/
   - Cole a URL e clique em "Scrape Again"

2. **LinkedIn Post Inspector**:
   - https://www.linkedin.com/post-inspector/
   - Cole a URL

3. **Twitter Card Validator**:
   - https://cards-dev.twitter.com/validator
   - Cole a URL

4. **WhatsApp**:
   - Envie a URL para um contato
   - Veja o preview gerado

## 🔄 Atualizando a Imagem

Se você alterar a imagem depois de já ter compartilhado:

1. Limpe o cache das redes sociais usando os debuggers acima
2. Ou adicione `?v=2` no final da URL da imagem no código
3. Aguarde 24-48h para propagação completa

## 📱 Preview em Diferentes Plataformas

A imagem será exibida em:
- WhatsApp
- Facebook
- LinkedIn
- Twitter/X
- Telegram
- Slack
- Discord
- iMessage
- E outros...

## 🎨 Template Sugerido

```
┌─────────────────────────────────────────────┐
│                                             │
│         [LOGO VANGUARDIA]                   │
│                                             │
│   Eficiência Inteligente para Empresas      │
│                                             │
│   Programa CNH Corporativa                  │
│   IA e Automação sob Medida                 │
│                                             │
│                            cnh.vanguardia.cloud │
└─────────────────────────────────────────────┘
```

## ⚡ Alternativa Rápida

Se você não tem tempo agora, pode usar uma ferramenta de geração automática:

```bash
# Usando o Cloudinary (exemplo)
https://res.cloudinary.com/demo/image/upload/
  w_1200,h_630,c_fill,
  l_text:Arial_80_bold:Eficiência%20Inteligente%20para%20Empresas,
  co_rgb:ffffff,
  g_center/
  sample.jpg
```

Ou simplesmente use uma cor sólida com texto por enquanto e melhore depois.
