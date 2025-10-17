# 🚨 TROUBLESHOOTING: Erro de Upload

## Erro Reportado

```
Upload Errors
snippets/search-dropdown.liquid.tmp.89046.1760640995486
É necessário ter uma extensão de arquivo .liquid
```

---

## ✅ Correções Aplicadas

### 1. Atributos Estendidos do macOS Removidos
- ✅ Executado: `xattr -cr snippets/`
- ✅ Arquivo `search-dropdown.liquid` recriado sem metadata

### 2. Verificação do Arquivo
- ✅ Tamanho: 9.6KB (normal)
- ✅ Encoding: UTF-8 (correto)
- ✅ Extensão: `.liquid` (correta)
- ✅ Sem caracteres especiais

---

## 🔍 Causa Provável

O erro `.tmp.89046.1760640995486` indica que a **ferramenta de upload** está criando um arquivo temporário durante o processo.

**Possíveis causas:**
1. Upload manual via Shopify Admin (arrastar e soltar)
2. Cache do navegador
3. Conflito de sincronização
4. Arquivo sendo editado durante upload

---

## 🛠️ Soluções

### Solução 1: Upload via Shopify CLI (RECOMENDADO)

```bash
# No terminal, navegue até a pasta do tema
cd /Users/pedromamare/projetos/sites/shopify/riocapria-theme

# Fazer login (se ainda não estiver logado)
shopify auth login

# Fazer push do tema
shopify theme push

# Ou apenas os snippets novos:
shopify theme push -o snippets/breadcrumbs.liquid
shopify theme push -o snippets/topbar-promo.liquid
shopify theme push -o snippets/search-dropdown.liquid
```

**Por que usar CLI:**
- ✅ Não cria arquivos temporários
- ✅ Upload direto
- ✅ Validação automática
- ✅ Controle de versão

---

### Solução 2: Upload Manual (Alternativa)

Se não puder usar Shopify CLI:

#### Passo 1: Limpar Cache do Navegador
1. Abra o Shopify Admin em modo anônimo/privado
2. Vá para **Online Store > Themes > ... > Edit code**

#### Passo 2: Criar os Snippets Manualmente

**Para cada snippet:**

1. Clique em **Add a new snippet**
2. Nome: `breadcrumbs` (SEM .liquid)
3. Cole o conteúdo do arquivo
4. Clique em **Save**

**Arquivos a criar:**
- `breadcrumbs` → conteúdo de `snippets/breadcrumbs.liquid`
- `topbar-promo` → conteúdo de `snippets/topbar-promo.liquid`
- `search-dropdown` → conteúdo de `snippets/search-dropdown.liquid`

**Para arquivos que já existem (mini-cart-dropdown):**
1. Abra o arquivo existente
2. Substitua o conteúdo
3. Salve

---

### Solução 3: Upload via Arquivo ZIP

1. Selecione os 4 snippets:
   - `breadcrumbs.liquid`
   - `topbar-promo.liquid`
   - `search-dropdown.liquid`
   - `mini-cart-dropdown.liquid`

2. Crie um arquivo ZIP:
```bash
cd snippets
zip snippets-riocapria.zip breadcrumbs.liquid topbar-promo.liquid search-dropdown.liquid mini-cart-dropdown.liquid
```

3. No Shopify Admin:
   - **Online Store > Themes**
   - **Actions > Upload theme file**
   - Selecione o ZIP

---

## 📋 Checklist de Verificação

Antes de fazer upload, verifique:

### Arquivos Locais
- [ ] Arquivo existe: `snippets/search-dropdown.liquid`
- [ ] Extensão correta: `.liquid` (não `.tmp`, não `.liquid.liquid`)
- [ ] Sem arquivos temporários na pasta
- [ ] Encoding UTF-8

```bash
# Verificar no terminal:
cd /Users/pedromamare/projetos/sites/shopify/riocapria-theme/snippets
ls -la search-dropdown.liquid
file search-dropdown.liquid
```

### Durante Upload
- [ ] Nenhum editor de código está aberto com o arquivo
- [ ] Não há sincronização automática rodando (Theme Kit, etc)
- [ ] Conexão estável com internet

---

## 🎯 Conteúdo dos Arquivos (Para Copy/Paste Manual)

Se precisar criar manualmente no Shopify Admin:

### 1. breadcrumbs.liquid

```liquid
[Conteúdo está no arquivo snippets/breadcrumbs.liquid]
```

Para copiar:
```bash
cat /Users/pedromamare/projetos/sites/shopify/riocapria-theme/snippets/breadcrumbs.liquid
```

### 2. topbar-promo.liquid

```liquid
[Conteúdo está no arquivo snippets/topbar-promo.liquid]
```

Para copiar:
```bash
cat /Users/pedromamare/projetos/sites/shopify/riocapria-theme/snippets/topbar-promo.liquid
```

### 3. search-dropdown.liquid

```liquid
[Conteúdo está no arquivo snippets/search-dropdown.liquid]
```

Para copiar:
```bash
cat /Users/pedromamare/projetos/sites/shopify/riocapria-theme/snippets/search-dropdown.liquid
```

---

## 🔧 Comandos Úteis

### Verificar arquivos temporários:
```bash
find . -name "*.tmp*"
find . -name "*1760640995486*"
```

### Limpar atributos macOS:
```bash
xattr -cr snippets/
```

### Listar todos os snippets:
```bash
ls -lh snippets/*.liquid | grep -E "(breadcrumbs|topbar|search|mini-cart)"
```

### Validar sintaxe Liquid (opcional):
```bash
shopify theme check snippets/search-dropdown.liquid
```

---

## ✅ Status Atual

| Arquivo | Status | Tamanho | Pronto para Upload |
|---------|--------|---------|-------------------|
| `breadcrumbs.liquid` | ✅ Criado | 4.6KB | ✅ Sim |
| `topbar-promo.liquid` | ✅ Corrigido | 2.7KB | ✅ Sim |
| `search-dropdown.liquid` | ✅ Recriado | 9.6KB | ✅ Sim |
| `mini-cart-dropdown.liquid` | ✅ Atualizado | 10KB | ✅ Sim |

---

## 📞 Ainda com Problemas?

### Se o erro persistir:

1. **Verifique qual ferramenta está usando:**
   - Shopify Admin (navegador)
   - Shopify CLI
   - Theme Kit
   - Outro?

2. **Tente esta sequência:**
   ```bash
   # 1. Parar qualquer sincronização
   # 2. Fechar editores de código
   # 3. Limpar cache
   rm -rf .shopify/

   # 4. Fazer upload limpo
   shopify theme push --only snippets/search-dropdown.liquid
   ```

3. **Última alternativa:**
   Crie o arquivo manualmente copiando e colando o conteúdo no Shopify Admin.

---

**Última atualização:** 16 de Outubro de 2025, 20:17
**Status:** ✅ Arquivos limpos e prontos para upload
