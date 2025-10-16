# 🚀 INSTALAÇÃO RÁPIDA - PÁGINA DE COLEÇÃO RIOCAPRIA

## ✅ PROBLEMA RESOLVIDO

O erro `"O tipo de seção 'main-collection' não faz referência a um arquivo de seção existente"` foi corrigido!

## 📁 ARQUIVOS CRIADOS

### ✅ Arquivos Principais
1. **`sections/main-collection.liquid`** ← Section principal (resolve o erro do template)
2. **`assets/collection-page.css`** ← CSS customizado
3. **`assets/collection-riocapria.js`** ← JavaScript de interações
4. **`snippets/product-card.liquid`** ← Card de produto (já existia)

### 📋 Arquivos Opcionais
- **`sections/main-collection-riocapria.liquid`** ← Versão alternativa com nome diferente

---

## 🔧 PASSO A PASSO DE INSTALAÇÃO

### **1. Fazer Upload dos Arquivos**

```bash
cd riocapria-theme
shopify theme push
```

Ou, se quiser testar primeiro em ambiente de desenvolvimento:

```bash
shopify theme dev
```

### **2. Verificar o Template**

O arquivo `templates/collection.json` já está configurado corretamente:

```json
{
  "sections": {
    "main": {
      "type": "main-collection",  ← Agora existe!
      "settings": {}
    }
  },
  "order": ["main"]
}
```

### **3. Configurar no Shopify Admin (Opcional)**

1. Acesse **Shopify Admin > Online Store > Themes**
2. Clique em **Customize**
3. Navegue até qualquer **página de coleção**
4. A section **"Coleção Principal"** já estará aplicada automaticamente
5. Configure as opções na sidebar:
   - ✅ Produtos por página: 12
   - ✅ Mostrar avaliações: Sim
   - ✅ Mostrar filtro de tamanhos: Sim
   - ✅ Mostrar categorias: Sim

---

## 🎨 RESULTADO ESPERADO

```
┌─────────────────────────────────────────────────┐
│  ANÉIS                                          │
│  Descubra nossa coleção exclusiva...           │
│  Produtos encontrados: 12                       │
└─────────────────────────────────────────────────┘
┌──────────┬──────────────────────────────────────┐
│ FILTROS  │  [Ordenar por ▼]                     │
│ [Limpar] │                                      │
│          │  ┌────┐ ┌────┐ ┌────┐                │
│ ▼ Preço  │  │40% │ │    │ │    │                │
│   Radio  │  │OFF │ │    │ │    │                │
│          │  │ 1  │ │ 2  │ │ 3  │                │
│ ▼ Materi │  │⭐⭐ │ │⭐⭐ │ │⭐⭐ │                │
│   Radio  │  │R$  │ │R$  │ │R$  │                │
│          │  └────┘ └────┘ └────┘                │
│ ▼ Tamanh │  Grid com 9-12 produtos              │
│  12 13 1 │                                      │
│          │  Paginação: ← 01 02 03 →             │
│ ▼ Tipo   │                                      │
│   Radio  │                                      │
└──────────┴──────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│  Pesquise por Categorias                        │
│  [8 categorias com imagens]                     │
└─────────────────────────────────────────────────┘
```

---

## ✨ FUNCIONALIDADES ATIVAS

### Desktop
- [x] Grid de 3 colunas
- [x] Filtros sticky na lateral
- [x] Accordion de filtros
- [x] Cards com 3 imagens hover
- [x] Rating de estrelas
- [x] Badges de desconto
- [x] Dropdown de ordenação
- [x] Paginação

### Mobile
- [x] Botão "Filtros" (abre drawer)
- [x] Drawer lateral com overlay
- [x] Grid de 2 colunas
- [x] Touch-friendly
- [x] Responsive design

---

## 🔍 VERIFICAÇÃO

Para verificar se está tudo funcionando:

### 1. Verificar Erros de Tema
```bash
shopify theme check
```

✅ O erro `main-collection não encontrado` **NÃO** deve mais aparecer!

### 2. Testar em Desenvolvimento
```bash
shopify theme dev
```

Abra o navegador e vá para:
- `http://localhost:9292/collections/all` (ou qualquer coleção)

### 3. Testar Funcionalidades
- [ ] Página carrega sem erros
- [ ] Filtros aparecem na lateral
- [ ] Accordion de filtros abre/fecha
- [ ] Cards de produtos aparecem com 3 imagens
- [ ] Hover nas imagens funciona
- [ ] Dropdown de ordenação abre/fecha
- [ ] Paginação funciona
- [ ] Mobile: Botão "Filtros" abre drawer
- [ ] Mobile: Drawer fecha com botão X
- [ ] Seção de categorias aparece abaixo

---

## 🐛 TROUBLESHOOTING

### Erro: "main-collection não encontrado"
✅ **RESOLVIDO!** O arquivo `sections/main-collection.liquid` foi criado.

### Erro: CSS não está sendo aplicado
**Solução:**
1. Certifique-se de que `assets/collection-page.css` foi enviado
2. Limpe o cache do navegador (Ctrl+Shift+R)
3. Verifique se o arquivo está sendo carregado (F12 > Network > CSS)

### Erro: JavaScript não funciona
**Solução:**
1. Certifique-se de que `assets/collection-riocapria.js` foi enviado
2. Abra Console do navegador (F12)
3. Deve ver: `Riocapria Collection Page - JavaScript Loaded`

### Filtros não aparecem
**Solução:**
1. Verifique se a section está ativa no template
2. Configure `show_size_filter: true` nas settings

### Imagens não carregam
**Solução:**
1. Certifique-se de que os produtos têm imagens
2. Para cards com 3 imagens hover, produtos precisam ter pelo menos 3 imagens

### Grid quebrado
**Solução:**
1. Verifique se CSS está carregado
2. Limpe cache do navegador
3. Teste em modo anônimo

---

## 📱 RESPONSIVIDADE

### Desktop (> 992px)
- Sidebar de filtros: 280px
- Grid de produtos: 3 colunas
- Todos os hover effects ativos

### Tablet (768px - 991px)
- Filtros em drawer lateral
- Grid: 2 colunas
- Botão "Filtros" visível

### Mobile (< 768px)
- Drawer fullscreen
- Grid: 2 colunas (ou 1 em telas muito pequenas)
- Interface touch-friendly

---

## 🎯 PRÓXIMOS PASSOS (OPCIONAL)

### Melhorias Futuras
- [ ] Integrar com app de reviews (Judge.me, Loox)
- [ ] Implementar filtros AJAX (sem reload)
- [ ] Adicionar filtros dinâmicos por tags/metafields
- [ ] Implementar infinite scroll
- [ ] Otimizar imagens para WebP/AVIF

### Customizações
- [ ] Ajustar faixas de preço nos filtros
- [ ] Adicionar mais opções de material/cor
- [ ] Personalizar textos de parcelamento
- [ ] Adicionar mais opções de ordenação

---

## 📞 SUPORTE

**Dúvidas comuns:**

**P: Posso usar a section antiga do Dawn?**
R: Sim, mas você perderá o design customizado Riocapria. Use `main-collection-product-grid` no template.

**P: Como alterar o número de produtos por página?**
R: No Shopify Admin > Customize > Settings da section > Produtos por página (range 9-36)

**P: Como mudar as cores?**
R: Edite as CSS variables em `collection-page.css`:
```css
--brand--coral: #fd3558
--brand--areia001: #fff7e6
```

**P: Como desabilitar a seção de categorias?**
R: No Shopify Admin > Customize > Settings da section > Desmarque "Mostrar seção de categorias"

---

## ✅ CHECKLIST FINAL

Antes de publicar em produção:

- [ ] Fazer upload de todos os arquivos
- [ ] Testar em ambiente de desenvolvimento
- [ ] Verificar página em desktop
- [ ] Verificar página em mobile
- [ ] Testar todos os filtros
- [ ] Testar ordenação
- [ ] Testar paginação
- [ ] Verificar performance (Lighthouse)
- [ ] Limpar avisos do Theme Check (opcional)
- [ ] Fazer backup do tema atual
- [ ] Publicar nova versão

---

**Status:** ✅ **PRONTO PARA USO!**

**Desenvolvido para:** Riocapria E-commerce
**Baseado em:** produtos-lista.html (Webflow)
**Data:** Outubro 2025
