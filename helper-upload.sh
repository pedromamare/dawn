#!/bin/bash

# Helper script para copiar snippets para área de transferência
# e criar manualmente no Shopify Admin

echo "╔════════════════════════════════════════════════════════╗"
echo "║   HELPER: Criar Snippets Manualmente no Shopify       ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

SNIPPETS=(
  "search-dropdown:Search Dropdown (busca)"
  "breadcrumbs:Breadcrumbs (navegação)"
  "topbar-promo:Topbar Promo (barra promocional)"
)

echo "📋 Este script vai copiar cada snippet para sua área de transferência."
echo "   Você vai criar cada um manualmente no Shopify Admin."
echo ""
echo "⚠️  NÃO faça upload de arquivos. Crie manualmente!"
echo ""

read -p "Pressione Enter para começar..."

for item in "${SNIPPETS[@]}"; do
  IFS=':' read -r filename description <<< "$item"
  filepath="snippets/${filename}.liquid"

  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "📄 Snippet: ${filename}"
  echo "   ${description}"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  if [ ! -f "$filepath" ]; then
    echo "❌ Arquivo não encontrado: $filepath"
    continue
  fi

  # Copiar para clipboard
  cat "$filepath" | pbcopy

  echo ""
  echo "✅ Código copiado para área de transferência!"
  echo ""
  echo "👉 AGORA FAÇA ISSO NO SHOPIFY:"
  echo ""
  echo "   1. Vá para: Online Store > Themes > ... > Edit code"
  echo "   2. Na seção 'Snippets', clique em 'Add a new snippet'"
  echo "   3. Digite o nome: ${filename}"
  echo "   4. Pressione Cmd+V (colar)"
  echo "   5. Clique em 'Save'"
  echo ""

  read -p "Pressione Enter quando terminar e quiser o próximo snippet..."
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📝 SNIPPET EXTRA: mini-cart-dropdown (atualizar existente)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ -f "snippets/mini-cart-dropdown.liquid" ]; then
  cat "snippets/mini-cart-dropdown.liquid" | pbcopy

  echo "✅ Código copiado!"
  echo ""
  echo "👉 PARA ESTE, EDITE O EXISTENTE:"
  echo ""
  echo "   1. No editor, abra: Snippets > mini-cart-dropdown.liquid"
  echo "   2. Selecione tudo (Cmd+A)"
  echo "   3. Cole (Cmd+V)"
  echo "   4. Salve"
  echo ""
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ PROCESSO COMPLETO!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📌 Próximos passos:"
echo "   • Verifique se todos os snippets foram criados"
echo "   • Teste a navegação no preview do tema"
echo "   • Crie as collections seguindo: COLLECTIONS-STRUCTURE.md"
echo ""
