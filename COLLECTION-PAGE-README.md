# 📋 PÁGINA DE COLEÇÃO RIOCAPRIA - DOCUMENTAÇÃO

## 🎯 Visão Geral

A página de coleção foi completamente adaptada do design Webflow (produtos-lista.html) para o tema Shopify com o layout e funcionalidades da Riocapria.

## 📁 Arquivos Criados/Modificados

### 1. **Assets CSS**
- `assets/collection-page.css` - Todos os estilos customizados da página de coleção

### 2. **Section Liquid**
- `sections/main-collection-riocapria.liquid` - Section principal da página de coleção

### 3. **Snippet**
- `snippets/product-card.liquid` - Card de produto com 3 imagens hover + rating (já existia)

### 4. **JavaScript**
- `assets/collection-riocapria.js` - Interações e funcionalidades JavaScript

---

## 🚀 COMO USAR

### Passo 1: Configurar o Template de Coleção

1. Acesse o **Shopify Admin**
2. Vá em **Online Store > Themes**
3. Clique em **Customize** no tema Dawn/Riocapria
4. No editor, navegue até uma página de coleção (Collections)
5. No painel lateral esquerdo, clique no ícone de seção (grid icon)
6. **REMOVA** a section antiga `main-collection-product-grid`
7. Clique em **Add section**
8. Selecione **"Coleção Riocapria"**

### Passo 2: Configurar as Settings

A section possui as seguintes configurações disponíveis:

#### **Produtos por página**
- Range: 9 - 36 produtos
- Padrão: 12
- Recomendado: 9, 12 ou 15 (múltiplos de 3 para grid)

#### **Mostrar avaliações**
- Checkbox (ativado por padrão)
- Exibe as estrelas de rating nos cards dos produtos

#### **Mostrar filtro de tamanhos**
- Checkbox (ativado por padrão)
- Exibe o filtro de tamanhos em grid (12-21)

#### **Mostrar seção de categorias**
- Checkbox (ativado por padrão)
- Exibe a seção de categorias abaixo dos produtos

#### **Adicionar rápido ao carrinho**
- Opções: Nenhum / Padrão
- Padrão: Nenhum

---

## 🎨 ESTRUTURA DE LAYOUT

```
┌─────────────────────────────────────────────────────┐
│  HEADER: Título da Coleção + Descrição + Contador  │
└─────────────────────────────────────────────────────┘
┌─────────────┬───────────────────────────────────────┐
│   SIDEBAR   │         PRODUTOS FEED                 │
│   FILTROS   │  ┌─────────────────────────────────┐  │
│             │  │  Toolbar: Ordenar por           │  │
│ • Preço     │  └─────────────────────────────────┘  │
│ • Material  │  ┌───────┬───────┬───────┐            │
│ • Tamanhos  │  │ Card  │ Card  │ Card  │            │
│ • Tipo      │  ├───────┼───────┼───────┤            │
│             │  │ Card  │ Card  │ Card  │            │
│             │  ├───────┼───────┼───────┤            │
│             │  │ Card  │ Card  │ Card  │            │
│             │  └───────┴───────┴───────┘            │
│             │  Paginação: ← 01 02 03 →              │
└─────────────┴───────────────────────────────────────┘
┌─────────────────────────────────────────────────────┐
│        SEÇÃO CATEGORIAS (8 categorias)              │
└─────────────────────────────────────────────────────┘
```

---

## 🔧 FUNCIONALIDADES IMPLEMENTADAS

### ✅ Layout
- [x] Grid de 3 colunas (desktop)
- [x] Grid de 2 colunas (tablet/mobile)
- [x] Sidebar de filtros sticky (desktop)
- [x] Drawer de filtros (mobile)
- [x] Background bege (var(--brand--areia001))

### ✅ Filtros
- [x] Accordion colapsável
- [x] Filtro de Preço (4 faixas)
- [x] Filtro de Material/Cor (radio buttons)
- [x] Filtro de Tamanhos (grid visual 12-21)
- [x] Filtro de Tipo de Produto (radio buttons)
- [x] Tags de filtros ativos
- [x] Botão "Limpar filtros"
- [x] Contador de produtos

### ✅ Ordenação
- [x] Dropdown de ordenação
- [x] Opções: Relevância, Mais vendidos, A-Z, Z-A, Menor preço, Maior preço, Novidades
- [x] Dropdown animado

### ✅ Product Cards
- [x] 3 imagens com hover sequencial
- [x] Badge de desconto (% OFF)
- [x] Botão "Ver Detalhes" no hover
- [x] Rating de estrelas (3.5/5)
- [x] Título do produto
- [x] Preço antigo (riscado) + Preço atual
- [x] Texto de parcelamento
- [x] Shadow e elevação no hover

### ✅ Paginação
- [x] Contador de produtos exibidos
- [x] Números de página (01, 02, 03...)
- [x] Setas de navegação ← →
- [x] Página ativa destacada

### ✅ Mobile
- [x] Botão "Filtros" para abrir drawer
- [x] Close button (X) no drawer
- [x] Drawer com overlay
- [x] Grid responsivo
- [x] Touch-friendly

### ✅ JavaScript
- [x] Toggle de accordion de filtros
- [x] Open/close mobile drawer
- [x] Toggle dropdown de ordenação
- [x] Seleção de tamanhos (grid)
- [x] Filtros de radio buttons
- [x] Smooth scroll
- [x] Lazy loading de imagens
- [x] Reset de filtros
- [x] Fechar drawer ao redimensionar

---

## 🎨 CSS CLASSES PRINCIPAIS

### Layout
- `.section_listing1` - Container principal
- `.filters1_component` - Wrapper de filtros + produtos
- `.filters1_layout` - Grid layout (sidebar + feed)
- `.filters1_filters-wrapper` - Sidebar de filtros
- `.filters1_feed` - Área de produtos

### Filtros
- `.filters1_filter-group` - Grupo de filtro
- `.filters1_filter-group-heading` - Header do accordion
- `.filters1_accordion-icon` - Ícone chevron
- `.filters1_filter-options` - Conteúdo colapsável
- `.filters1_list` - Lista de opções
- `.select_iten` - Item de tamanho (grid)
- `.filters5_tag` - Tag de filtro ativo

### Product Card
- `.product-card` - Container do card
- `.card-image-wrapper` - Wrapper das imagens
- `.image-card.one` - Imagem 1 (principal)
- `.image-card.two` - Imagem 2 (hover 1)
- `.image-card.three` - Imagem 3 (hover 2)
- `.tag-promo` - Badge de desconto
- `.button-cards` - Botão "Ver Detalhes"
- `.text-card-produtos` - Título
- `.text-preco-antigo` - Preço riscado
- `.text-parcelas` - Parcelamento

### Grid
- `._3columns-grid-large` - Grid de 3 colunas

### Paginação
- `.numero-paginacao` - Número de página
- `.numero-paginacao.active` - Página ativa
- `.arrow-pags` - Setas de navegação

---

## 📱 RESPONSIVIDADE

### Desktop (> 992px)
- Grid de 3 colunas
- Filtros sticky na lateral
- Hover effects completos

### Tablet (768px - 991px)
- Grid de 2 colunas
- Filtros em drawer lateral
- Botão "Filtros" visível

### Mobile (< 768px)
- Grid de 2 colunas (ou 1 em telas pequenas)
- Drawer de filtros fullscreen
- Cards compactos
- Paginação simplificada

---

## 🎯 CSS VARIABLES UTILIZADAS

```css
/* Cores */
--brand--coral: #fd3558
--brand--areia001: #fff7e6
--brand--areia002: #ebe6db
--brand--areia003: #a29579
--neutral--black: #1b1914
--neutral--neutral: #666

/* Tipografia */
--font-family--heading: Sora, sans-serif
```

---

## ⚙️ JAVASCRIPT EVENTS

### Accordion Toggle
```javascript
document.querySelectorAll('.filter-accordion-toggle')
// Click → Toggle height + icon rotation
```

### Mobile Drawer
```javascript
document.getElementById('open-filters') // Abre drawer
document.getElementById('close-filters') // Fecha drawer
// Click fora → fecha drawer
```

### Sort Dropdown
```javascript
document.getElementById('sort-dropdown')
// Click toggle → abre/fecha
// Click outside → fecha
// Click option → atualiza texto
```

### Size Selector
```javascript
document.querySelectorAll('.select_iten')
// Click → toggle active class
// Disabled items não são clicáveis
```

---

## 🔄 INTEGRAÇÃO COM SHOPIFY

### Liquid Variables Usadas

```liquid
{{ collection.title }}              // Título da coleção
{{ collection.description }}        // Descrição
{{ collection.products_count }}     // Total de produtos
{{ collection.products }}           // Loop de produtos
{{ collection.current_type }}       // Tipo filtrado atual
{{ collection.current_vendor }}     // Marca filtrada atual
{{ collection.all_types }}          // Todos os tipos disponíveis

{{ paginate.pages }}                // Total de páginas
{{ paginate.current_page }}         // Página atual
{{ paginate.next }}                 // Link próxima página
{{ paginate.previous }}             // Link página anterior

{{ product.url }}                   // URL do produto
{{ product.title }}                 // Título
{{ product.price }}                 // Preço
{{ product.compare_at_price }}      // Preço original
{{ product.images }}                // Array de imagens
```

---

## 🚨 NOTAS IMPORTANTES

### 1. Filtros Avançados
Os filtros implementados são **estáticos** (hardcoded). Para filtros dinâmicos baseados em metafields ou tags do Shopify, será necessário:

- Integrar com Shopify Storefront Filtering API
- Usar AJAX para filtrar sem reload
- Implementar URL params para filtros persistentes

### 2. Rating de Estrelas
O rating é **estático** (3.5 stars para todos). Para ratings dinâmicos:

- Instalar app de reviews (Judge.me, Loox, etc.)
- Ou criar metafields customizados para ratings
- Atualizar o snippet `product-card.liquid`

### 3. Seção de Categorias
A seção usa `linklists.main-menu.links` como fonte. Certifique-se de:

- Ter um menu chamado "main-menu" criado
- Adicionar imagens nas coleções
- Limitar a 8 categorias (ou ajustar o `limit: 8`)

### 4. Parcelamento
O cálculo de parcelamento é **estático** (7x). Para integrar com gateway de pagamento:

- Usar apps como Parcelas no Cartão
- Ou integrar com API do gateway
- Configurar regras de parcelamento no backend

---

## 🐛 TROUBLESHOOTING

### Problema: Filtros não aparecem
**Solução:** Verifique se a section está adicionada corretamente no template de coleção.

### Problema: Images não carregam
**Solução:** Certifique-se de que os produtos têm pelo menos 1 imagem carregada.

### Problema: Grid quebrado
**Solução:** Verifique se o CSS `collection-page.css` está sendo carregado corretamente.

### Problema: JavaScript não funciona
**Solução:** Abra o Console do navegador e verifique erros. Certifique-se de que `collection-riocapria.js` está carregado.

### Problema: Mobile drawer não abre
**Solução:** Verifique se os IDs `#open-filters`, `#close-filters` e `#filters-sidebar` existem no HTML.

---

## ✨ PRÓXIMOS PASSOS (Melhorias Futuras)

### Filtros AJAX
- [ ] Implementar filtros sem reload de página
- [ ] Usar Shopify Storefront API
- [ ] Adicionar loading states
- [ ] Atualizar URL params

### Ratings Dinâmicos
- [ ] Integrar com app de reviews
- [ ] Fetch ratings via API
- [ ] Atualizar UI dinamicamente

### Performance
- [ ] Implementar infinite scroll
- [ ] Lazy load avançado
- [ ] Otimizar imagens (WebP/AVIF)
- [ ] Minificar CSS/JS

### UX Enhancements
- [ ] Adicionar contador de filtros ativos
- [ ] Implementar filtro de busca dentro da coleção
- [ ] Adicionar botão "Voltar ao topo"
- [ ] Implementar favoritos/wishlist

---

## 📞 SUPORTE

Para dúvidas ou problemas:
1. Verifique este documento primeiro
2. Consulte a documentação do Shopify Liquid
3. Teste em ambiente de desenvolvimento antes de publicar
4. Use o Shopify Theme Check para validar código

---

**Desenvolvido para:** Riocapria E-commerce
**Tema base:** Shopify Dawn
**Data:** Outubro 2025
**Versão:** 1.0
