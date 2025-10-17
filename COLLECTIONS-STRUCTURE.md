# 📦 ESTRUTURA DE COLLECTIONS - RIOCAPRIA

Este documento descreve a estrutura de collections (categorias e subcategorias) para a loja Riocapria, usando a convenção de nomenclatura que permite hierarquia automática nos breadcrumbs.

---

## 🎯 Convenção de Nomenclatura

**Padrão:** `categoria-subcategoria`

**Como funciona:**
- Collections "pai" têm handle simples: `aneis`, `brincos`, `colares`, etc.
- Collections "filhas" começam com o handle do pai: `aneis-solitarios`, `aneis-aliancas`, etc.
- O snippet `breadcrumbs.liquid` detecta automaticamente a hierarquia pelo hífen (`-`)

**Exemplo:**
- Collection `aneis-solitarios` → Detecta `aneis` como pai
- Breadcrumb gerado: `Home > Anéis > Anéis Solitários`

---

## 📋 Collections a Criar no Shopify

### 1. ANÉIS (Handle: `aneis`)

**Collection Pai:**
- **Handle:** `aneis`
- **Título:** Anéis
- **URL:** `/collections/aneis`
- **Descrição:** Todos os anéis da coleção

**Subcollections:**

| Handle | Título | URL | Breadcrumb |
|--------|--------|-----|------------|
| `aneis-solitarios` | Anéis Solitários | `/collections/aneis-solitarios` | Home > Anéis > Anéis Solitários |
| `aneis-aliancas` | Anéis Alianças | `/collections/aneis-aliancas` | Home > Anéis > Anéis Alianças |
| `aneis-cocktail` | Anéis Cocktail | `/collections/aneis-cocktail` | Home > Anéis > Anéis Cocktail |
| `aneis-conjunto` | Anéis Conjunto | `/collections/aneis-conjunto` | Home > Anéis > Anéis Conjunto |

**Condições de Collection:**
```
aneis (pai): Product tag IS igual a "aneis" OR "anel"
aneis-solitarios: Product tag CONTAINS "solitario"
aneis-aliancas: Product tag CONTAINS "alianca"
aneis-cocktail: Product tag CONTAINS "cocktail"
aneis-conjunto: Product tag CONTAINS "conjunto"
```

---

### 2. BRINCOS (Handle: `brincos`)

**Collection Pai:**
- **Handle:** `brincos`
- **Título:** Brincos
- **URL:** `/collections/brincos`

**Subcollections:**

| Handle | Título | URL | Breadcrumb |
|--------|--------|-----|------------|
| `brincos-argolas` | Brincos Argolas | `/collections/brincos-argolas` | Home > Brincos > Brincos Argolas |
| `brincos-studs` | Brincos Studs | `/collections/brincos-studs` | Home > Brincos > Brincos Studs |
| `brincos-pendentes` | Brincos Pendentes | `/collections/brincos-pendentes` | Home > Brincos > Brincos Pendentes |
| `brincos-ear-cuff` | Brincos Ear Cuff | `/collections/brincos-ear-cuff` | Home > Brincos > Brincos Ear Cuff |

**Condições de Collection:**
```
brincos (pai): Product tag IS igual a "brincos" OR "brinco"
brincos-argolas: Product tag CONTAINS "argola"
brincos-studs: Product tag CONTAINS "stud"
brincos-pendentes: Product tag CONTAINS "pendente"
brincos-ear-cuff: Product tag CONTAINS "ear cuff" OR "ear-cuff"
```

---

### 3. COLARES (Handle: `colares`)

**Collection Pai:**
- **Handle:** `colares`
- **Título:** Colares
- **URL:** `/collections/colares`

**Subcollections:**

| Handle | Título | URL | Breadcrumb |
|--------|--------|-----|------------|
| `colares-chokers` | Colares Chokers | `/collections/colares-chokers` | Home > Colares > Colares Chokers |
| `colares-longos` | Colares Longos | `/collections/colares-longos` | Home > Colares > Colares Longos |
| `colares-pingentes` | Colares Pingentes | `/collections/colares-pingentes` | Home > Colares > Colares Pingentes |
| `colares-correntes` | Colares Correntes | `/collections/colares-correntes` | Home > Colares > Colares Correntes |

**Condições de Collection:**
```
colares (pai): Product tag IS igual a "colares" OR "colar"
colares-chokers: Product tag CONTAINS "choker"
colares-longos: Product tag CONTAINS "longo"
colares-pingentes: Product tag CONTAINS "pingente"
colares-correntes: Product tag CONTAINS "corrente"
```

---

### 4. PULSEIRAS (Handle: `pulseiras`)

**Collection Pai:**
- **Handle:** `pulseiras`
- **Título:** Pulseiras
- **URL:** `/collections/pulseiras`

**Subcollections:**

| Handle | Título | URL | Breadcrumb |
|--------|--------|-----|------------|
| `pulseiras-tennis` | Pulseiras Tennis | `/collections/pulseiras-tennis` | Home > Pulseiras > Pulseiras Tennis |
| `pulseiras-charm` | Pulseiras Charm | `/collections/pulseiras-charm` | Home > Pulseiras > Pulseiras Charm |
| `pulseiras-rigidas` | Pulseiras Rígidas | `/collections/pulseiras-rigidas` | Home > Pulseiras > Pulseiras Rígidas |
| `pulseiras-corrente` | Pulseiras Corrente | `/collections/pulseiras-corrente` | Home > Pulseiras > Pulseiras Corrente |

**Condições de Collection:**
```
pulseiras (pai): Product tag IS igual a "pulseiras" OR "pulseira"
pulseiras-tennis: Product tag CONTAINS "tennis"
pulseiras-charm: Product tag CONTAINS "charm"
pulseiras-rigidas: Product tag CONTAINS "rigida"
pulseiras-corrente: Product tag CONTAINS "corrente"
```

---

### 5. ACESSÓRIOS (Handle: `acessorios`)

**Collection Pai:**
- **Handle:** `acessorios`
- **Título:** Acessórios
- **URL:** `/collections/acessorios`

**Subcollections:**

| Handle | Título | URL | Breadcrumb |
|--------|--------|-----|------------|
| `acessorios-relogios` | Acessórios Relógios | `/collections/acessorios-relogios` | Home > Acessórios > Acessórios Relógios |
| `acessorios-oculos` | Acessórios Óculos | `/collections/acessorios-oculos` | Home > Acessórios > Acessórios Óculos |
| `acessorios-broches` | Acessórios Broches | `/collections/acessorios-broches` | Home > Acessórios > Acessórios Broches |

**Condições de Collection:**
```
acessorios (pai): Product tag IS igual a "acessorios" OR "acessorio"
acessorios-relogios: Product tag CONTAINS "relogio"
acessorios-oculos: Product tag CONTAINS "oculos"
acessorios-broches: Product tag CONTAINS "broche"
```

---

### 6. COMBOS (Handle: `combos`)

**Collection Principal:**
- **Handle:** `combos`
- **Título:** Combos
- **URL:** `/collections/combos`
- **Descrição:** Conjuntos e kits especiais com desconto

**Condições:**
```
Product tag CONTAINS "combo" OR "kit" OR "conjunto"
```

---

### 7. OUTLET (Handle: `outlet`)

**Collection Principal:**
- **Handle:** `outlet`
- **Título:** Outlet
- **URL:** `/collections/outlet`
- **Descrição:** Produtos em promoção com descontos especiais

**Condições:**
```
Product tag CONTAINS "outlet" OR "promocao" OR "desconto"
OR
Compare at price IS_SET (produtos com preço comparativo)
```

---

## 🏷️ Sistema de Tags Recomendado

Para que as collections funcionem automaticamente, os produtos devem ser tagueados seguindo este padrão:

### Categorias Principais
- `aneis`, `brincos`, `colares`, `pulseiras`, `acessorios`

### Subcategorias
- `solitario`, `alianca`, `cocktail`, `conjunto`
- `argola`, `stud`, `pendente`, `ear-cuff`
- `choker`, `longo`, `pingente`, `corrente`
- `tennis`, `charm`, `rigida`
- `relogio`, `oculos`, `broche`

### Tags Especiais
- `combo`, `kit`, `outlet`, `promocao`, `desconto`
- `novo` (produtos lançados recentemente)
- `destaque` (produtos em destaque na home)

### Tags de Materiais
- `ouro`, `prata`, `aco-inoxidavel`
- `pedras-naturais`, `zirconia`, `perola`

### Tags de Cores
- `dourado`, `prateado`, `rose-gold`, `black`

---

## 📝 Como Criar Collections no Shopify Admin

### Via Interface (Manual)

1. Acesse **Products > Collections** no Shopify Admin
2. Clique em **Create collection**
3. Preencha os campos:
   - **Title:** Nome da collection (ex: "Anéis Solitários")
   - **Handle:** Handle seguindo convenção (ex: `aneis-solitarios`)
   - **Description:** Descrição da categoria
   - **Collection type:** Automated (recomendado)
   - **Conditions:** Defina as tags/regras
4. Salve a collection

### Via CSV (Bulk Import)

Você pode criar um arquivo CSV e importar múltiplas collections:

```csv
Handle,Title,Body HTML,Collection Type,Published
aneis,Anéis,"<p>Todos os anéis da coleção Riocapria</p>",automated,TRUE
aneis-solitarios,Anéis Solitários,"<p>Anéis solitários elegantes</p>",automated,TRUE
aneis-aliancas,Anéis Alianças,"<p>Alianças de compromisso</p>",automated,TRUE
brincos,Brincos,"<p>Todos os brincos da coleção</p>",automated,TRUE
brincos-argolas,Brincos Argolas,"<p>Brincos de argola modernos</p>",automated,TRUE
...
```

**Importar:**
1. Products > Collections
2. Clique em **Import**
3. Faça upload do CSV
4. Configure as condições de cada collection manualmente após importar

---

## 🔗 Navegação no Header

O header já está configurado com os links para as collections:

```liquid
<!-- Exemplo: Dropdown de Anéis -->
<li class="menu-item has-dropdown">
  <a href="/collections/aneis" class="menu-link">Anéis</a>
  <div class="dropdown-menu">
    <ul class="dropdown-list">
      <li><a href="/collections/aneis-solitarios">Solitários</a></li>
      <li><a href="/collections/aneis-aliancas">Alianças</a></li>
      <li><a href="/collections/aneis-cocktail">Cocktail</a></li>
      <li><a href="/collections/aneis-conjunto">Conjunto</a></li>
      <li><a href="/collections/aneis">Ver todos Anéis</a></li>
    </ul>
  </div>
</li>
```

---

## ✅ Checklist de Criação

### Passo 1: Criar Collections Pai
- [ ] `aneis` - Anéis
- [ ] `brincos` - Brincos
- [ ] `colares` - Colares
- [ ] `pulseiras` - Pulseiras
- [ ] `acessorios` - Acessórios
- [ ] `combos` - Combos
- [ ] `outlet` - Outlet

### Passo 2: Criar Subcollections - Anéis
- [ ] `aneis-solitarios` - Anéis Solitários
- [ ] `aneis-aliancas` - Anéis Alianças
- [ ] `aneis-cocktail` - Anéis Cocktail
- [ ] `aneis-conjunto` - Anéis Conjunto

### Passo 3: Criar Subcollections - Brincos
- [ ] `brincos-argolas` - Brincos Argolas
- [ ] `brincos-studs` - Brincos Studs
- [ ] `brincos-pendentes` - Brincos Pendentes
- [ ] `brincos-ear-cuff` - Brincos Ear Cuff

### Passo 4: Criar Subcollections - Colares
- [ ] `colares-chokers` - Colares Chokers
- [ ] `colares-longos` - Colares Longos
- [ ] `colares-pingentes` - Colares Pingentes
- [ ] `colares-correntes` - Colares Correntes

### Passo 5: Criar Subcollections - Pulseiras
- [ ] `pulseiras-tennis` - Pulseiras Tennis
- [ ] `pulseiras-charm` - Pulseiras Charm
- [ ] `pulseiras-rigidas` - Pulseiras Rígidas
- [ ] `pulseiras-corrente` - Pulseiras Corrente

### Passo 6: Criar Subcollections - Acessórios
- [ ] `acessorios-relogios` - Acessórios Relógios
- [ ] `acessorios-oculos` - Acessórios Óculos
- [ ] `acessorios-broches` - Acessórios Broches

### Passo 7: Configurar Condições
- [ ] Definir condições automáticas para cada collection
- [ ] Testar se produtos aparecem corretamente
- [ ] Verificar breadcrumbs em todas as páginas

### Passo 8: Adicionar Conteúdo
- [ ] Adicionar descrições em cada collection
- [ ] Adicionar imagens de banner (opcional)
- [ ] Configurar SEO (meta title, meta description)

---

## 🎨 Imagens de Banner (Opcional)

Você pode adicionar imagens de banner para cada collection:

**Dimensões recomendadas:**
- Desktop: 1920x400px
- Mobile: 768x400px

**Localização:**
- Adicione via Shopify Admin > Collections > [Collection] > Image

---

## 🔍 SEO para Collections

### Title Tags
- Anéis: "Anéis Femininos | Joias Riocapria"
- Anéis Solitários: "Anéis Solitários | Joias Riocapria"
- Brincos: "Brincos Femininos | Joias Riocapria"

### Meta Descriptions (155 caracteres)
```
Anéis: "Descubra nossa coleção de anéis femininos. Solitários, alianças, cocktail e mais. Entrega para todo Brasil. Confira!"

Brincos: "Brincos elegantes para todos os momentos. Argolas, studs, pendentes e ear cuffs. Frete grátis acima de R$299."
```

---

## 📊 Resumo

**Total de Collections:** 28

| Categoria | Collections Pai | Subcollections | Total |
|-----------|----------------|----------------|-------|
| Anéis | 1 | 4 | 5 |
| Brincos | 1 | 4 | 5 |
| Colares | 1 | 4 | 5 |
| Pulseiras | 1 | 4 | 5 |
| Acessórios | 1 | 3 | 4 |
| Combos | 1 | 0 | 1 |
| Outlet | 1 | 0 | 1 |
| **TOTAL** | **7** | **19** | **28** |

---

## 🚀 Próximos Passos

1. ✅ Criar todas as collections no Shopify Admin
2. ✅ Configurar condições automáticas (tags)
3. ✅ Adicionar produtos e tagueá-los corretamente
4. ✅ Testar navegação no header
5. ✅ Verificar breadcrumbs em todas as páginas
6. ✅ Adicionar descrições e imagens de banner
7. ✅ Configurar SEO (meta tags)
8. ✅ Testar em desktop e mobile

---

**Documento criado:** Outubro 2025
**Projeto:** Riocapria E-commerce
**Tema:** Shopify Dawn Customizado
