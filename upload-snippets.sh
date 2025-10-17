#!/bin/bash

# Script para fazer upload dos snippets para Shopify
# Uso: bash upload-snippets.sh

echo "🚀 Fazendo upload dos snippets para Shopify..."
echo ""

# Verificar se está na pasta correta
if [ ! -d "snippets" ]; then
  echo "❌ Erro: Execute este script da pasta raiz do tema"
  exit 1
fi

# Lista de snippets para upload
SNIPPETS=(
  "snippets/breadcrumbs.liquid"
  "snippets/topbar-promo.liquid"
  "snippets/search-dropdown.liquid"
  "snippets/mini-cart-dropdown.liquid"
)

echo "📦 Arquivos a serem enviados:"
for snippet in "${SNIPPETS[@]}"; do
  if [ -f "$snippet" ]; then
    SIZE=$(ls -lh "$snippet" | awk '{print $5}')
    echo "  ✅ $snippet ($SIZE)"
  else
    echo "  ❌ $snippet (não encontrado)"
  fi
done

echo ""
echo "⚙️  Limpando atributos do macOS..."
xattr -cr snippets/

echo ""
read -p "Continuar com o upload? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "❌ Upload cancelado"
  exit 0
fi

echo ""
echo "📤 Fazendo upload via Shopify CLI..."
echo ""

# Upload de cada snippet
for snippet in "${SNIPPETS[@]}"; do
  if [ -f "$snippet" ]; then
    echo "⬆️  Enviando $snippet..."
    shopify theme push --only "$snippet"

    if [ $? -eq 0 ]; then
      echo "  ✅ $snippet enviado com sucesso"
    else
      echo "  ❌ Erro ao enviar $snippet"
    fi
  fi
done

echo ""
echo "✅ Upload concluído!"
echo ""
echo "📝 Próximos passos:"
echo "  1. Acesse o Shopify Admin"
echo "  2. Verifique os snippets em: Online Store > Themes > Edit code > Snippets"
echo "  3. Teste a navegação no preview do tema"
