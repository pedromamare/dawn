# 🔍 DIAGNÓSTICO DO LAYOUT DA PÁGINA DE COLEÇÃO

## 📸 PROBLEMA IDENTIFICADO

Comparando as duas imagens fornecidas:

### ❌ Imagem 1 (Atual - Shopify Online)
- Layout básico do Dawn (tema padrão)
- Sem a topbar vermelha promocional
- Sem o header customizado Riocapria
- Grid de produtos sem estilo customizado
- Filtros sem o design Riocapria
- Cards de produtos sem as 3 imagens hover
- Sem badges de desconto laranja

### ✅ Imagem 2 (Esperado - HTML Original)
- Topbar vermelha: "Frete Grátis acima de R$299,99"
- Header Riocapria com logo + menu de categorias
- Grid de 3 colunas com espaçamento correto
- Filtros com estilo accordion Riocapria
- Cards com 3 imagens hover + badges "40% OFF" laranja
- Rating de estrelas 3.5
- Background bege (#fff7e6)

---

## 🎯 CAUSA RAIZ DO PROBLEMA

O tema está configurado, mas o **CSS e JavaScript customizados não estão sendo carregados** corretamente na versão online.

### Possíveis Causas:

1. **Arquivos não foram enviados ao Shopify**
   - `assets/collection-page.css`
   - `assets/collection-riocapria.js`

2. **Cache do navegador/Shopify**
   - CSS/JS antigos em cache

3. **Conflito de CSS**
   - CSS do Dawn sobrescrevendo estilos customizados

4. **Tema não foi publicado**
   - Changes apenas em "Draft" ou "Preview"

---

## ✅ SOLUÇÃO - PASSO A PASSO

### PASSO 1: Verificar Arquivos Localmente

```bash
cd /Users/pedromamare/projetos/sites/shopify/riocapria-theme

# Verificar se os arquivos existem
ls -la assets/collection-page.css
ls -la assets/collection-riocapria.js
ls -la sections/main-collection.liquid
ls -la snippets/product-card.liquid
```

**Resultado esperado:** Todos os arquivos devem existir.

---

### PASSO 2: Fazer Upload dos Arquivos

```bash
# Opção A: Push completo do tema
shopify theme push

# Opção B: Push seletivo (apenas arquivos modificados)
shopify theme push --only assets/collection-page.css
shopify theme push --only assets/collection-riocapria.js
shopify theme push --only sections/main-collection.liquid
shopify theme push --only snippets/product-card.liquid
shopify theme push --only layout/theme.liquid
```

---

### PASSO 3: Limpar Cache

#### No Navegador:
1. Abra DevTools (F12)
2. Clique com botão direito em "Reload"
3. Selecione "Empty Cache and Hard Reload"

Ou use:
- **Chrome/Edge:** `Ctrl + Shift + Delete`
- **Firefox:** `Ctrl + Shift + Delete`
- **Safari:** `Cmd + Option + E`

#### No Shopify:
1. Acesse **Shopify Admin**
2. **Online Store > Themes**
3. Clique nos 3 pontos do tema
4. **Edit Code**
5. Salve qualquer arquivo (espaço em branco) para forçar rebuild

---

### PASSO 4: Verificar se CSS Está Carregado

1. Abra a página de coleção no navegador
2. Pressione `F12` (DevTools)
3. Vá para a aba **Network**
4. Filtre por **CSS**
5. Recarregue a página
6. Procure por: `collection-page.css`

**✅ Se aparecer:**
- Status: 200 OK
- Tamanho: ~80-100 KB
- CSS está carregando

**❌ Se não aparecer ou status 404:**
- Arquivo não foi enviado
- Volte ao Passo 2

---

### PASSO 5: Verificar se JavaScript Está Carregado

1. Na aba **Network**, filtre por **JS**
2. Procure por: `collection-riocapria.js`
3. Verifique status 200

**Teste adicional:**
1. Abra o **Console** (aba Console no DevTools)
2. Procure por: `Riocapria Collection Page - JavaScript Loaded`
3. Se não aparecer, JavaScript não está funcionando

---

### PASSO 6: Inspecionar Elementos

1. Clique com botão direito em qualquer elemento da página
2. **Inspecionar elemento**
3. Verifique se as classes CSS existem:
   - `.section_listing1`
   - `.filters1_component`
   - `._3columns-grid-large`
   - `.product-card`
   - `.image-card.one`, `.two`, `.three`

**Se as classes não estiverem aplicadas:**
- CSS não está sendo carregado
- Conflito de especificidade

---

### PASSO 7: Forçar Publicação do Tema

```bash
# Via CLI
shopify theme push --unpublished

# Depois publique no Admin:
# Shopify Admin > Online Store > Themes > Actions > Publish
```

---

## 🔧 VERIFICAÇÕES ADICIONAIS

### 1. Verificar `layout/theme.liquid`

Abra o arquivo e certifique-se de que contém:

```liquid
<link href="{{ 'collection-page.css' | asset_url }}" rel="stylesheet" type="text/css">
```

E no final, antes de `</body>`:

```liquid
<script src="{{ 'collection-riocapria.js' | asset_url }}" defer></script>
```

### 2. Verificar `sections/main-collection.liquid`

Deve começar com:

```liquid
{{ 'collection-page.css' | asset_url | stylesheet_tag }}
{{ 'component-price.css' | asset_url | stylesheet_tag }}
...
<script src="{{ 'collection-riocapria.js' | asset_url }}" defer="defer"></script>
```

### 3. Verificar Template de Coleção

`templates/collection.json` deve ter:

```json
{
  "sections": {
    "main": {
      "type": "main-collection",
      "settings": {}
    }
  },
  "order": ["main"]
}
```

---

## 🚨 TROUBLESHOOTING ESPECÍFICO

### Problema: Grid está quebrado (não tem 3 colunas)

**Causa:** CSS `._3columns-grid-large` não está sendo aplicado

**Solução:**
1. Verifique se `collection-page.css` foi enviado
2. Limpe cache do navegador
3. Adicione `!important` temporariamente no CSS:

```css
._3columns-grid-large {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 1.5rem !important;
}
```

### Problema: Cards de produto não têm 3 imagens hover

**Causa:** Snippet `product-card.liquid` não está sendo usado

**Solução:**
1. Verifique se o snippet existe
2. Verifique se `main-collection.liquid` está renderizando ele:
   ```liquid
   {% render 'product-card', product: product %}
   ```

### Problema: Filtros não aparecem ou sem estilo

**Causa:** HTML da sidebar de filtros não está renderizando

**Solução:**
1. Verifique se `main-collection.liquid` tem a section de filtros
2. Procure por `<div class="filters1_filters-wrapper">`
3. Se não existir, arquivo foi sobrescrito

### Problema: Topbar vermelha não aparece

**Causa:** Header group não está configurado

**Solução:**
1. Verifique `sections/header-group.json`
2. Deve incluir `"topbar-promo"`
3. Verifique se `sections/topbar-promo.liquid` existe

### Problema: Background não é bege

**Causa:** CSS variable não definida ou não aplicada

**Solução:**
Adicione no início de `collection-page.css`:

```css
:root {
  --brand--areia001: #fff7e6;
  --brand--coral: #fd3558;
  --neutral--black: #1b1914;
  --neutral--neutral: #666;
}

.section_listing1 {
  background-color: var(--brand--areia001, #fff7e6) !important;
}
```

---

## 📊 CHECKLIST DE VERIFICAÇÃO

Antes de considerar o problema resolvido, marque:

- [ ] `collection-page.css` aparece na aba Network (200 OK)
- [ ] `collection-riocapria.js` aparece na aba Network (200 OK)
- [ ] Console mostra "Riocapria Collection Page - JavaScript Loaded"
- [ ] Topbar vermelha aparece no topo
- [ ] Header Riocapria aparece (logo + menu)
- [ ] Background da página é bege (#fff7e6)
- [ ] Grid tem 3 colunas no desktop
- [ ] Filtros aparecem na lateral esquerda
- [ ] Cards de produtos têm 3 imagens
- [ ] Hover nos cards funciona (imagens trocam)
- [ ] Badges "40% OFF" aparecem em laranja
- [ ] Rating de estrelas aparece
- [ ] Botão "Ver Detalhes" aparece no hover
- [ ] Dropdown "Ordenar por" funciona
- [ ] Paginação aparece no final
- [ ] Seção "Pesquise por Categorias" aparece abaixo

---

## 🎯 SOLUÇÃO RÁPIDA (Se tudo falhar)

Se após todas as verificações o layout ainda não estiver correto:

### Opção 1: Reset Completo

```bash
# 1. Delete o tema atual do Shopify Admin
# 2. Faça upload do tema novamente
shopify theme push --theme-id YOUR_THEME_ID

# 3. Publique o tema
# Shopify Admin > Themes > Publish
```

### Opção 2: Usar Template Alternativo

Modifique `templates/collection.json`:

```json
{
  "sections": {
    "main": {
      "type": "main-collection-riocapria",
      "settings": {
        "products_per_page": 12,
        "show_rating": true,
        "show_size_filter": true,
        "show_categories": true
      }
    }
  },
  "order": ["main"]
}
```

---

## 💡 DICAS FINAIS

1. **Sempre teste em Preview antes de Publicar**
   ```bash
   shopify theme dev
   ```
   Acesse: `http://localhost:9292/collections/all`

2. **Use modo Incógnito do navegador** para evitar cache

3. **Compare HTML renderizado:**
   - Abra DevTools
   - Inspecione `<div class="section_listing1">`
   - Se a classe não existir, CSS não está carregado

4. **Verifique console de erros:**
   - Erros de JavaScript impedem execução
   - Erros 404 indicam arquivos faltando

---

## 📞 PRÓXIMOS PASSOS

Depois de corrigir:

1. **Teste todas as funcionalidades:**
   - Filtros (clicar para abrir/fechar)
   - Ordenação (dropdown)
   - Paginação
   - Mobile (drawer de filtros)

2. **Verifique performance:**
   - Lighthouse (F12 > Lighthouse)
   - Meta: 90+ em Performance

3. **Teste em diferentes navegadores:**
   - Chrome
   - Firefox
   - Safari
   - Edge

4. **Teste em diferentes dispositivos:**
   - Desktop (1920px)
   - Tablet (768px)
   - Mobile (375px)

---

**Status:** 🟡 **Aguardando correção**

**Última atualização:** Outubro 2025
