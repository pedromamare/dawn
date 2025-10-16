/**
 * RIOCAPRIA - Sistema de Seleção de Variantes Customizado
 * Gerencia todos os tipos de seletores de variantes
 * - Tamanhos numéricos
 * - Letras A-Z
 * - Tipos de fonte (imagens)
 * - Cores (imagem + nome)
 */

class RiocapriaVariantSelector {
  constructor() {
    this.form = document.querySelector('[data-product-form]');
    this.productJSON = null;
    this.currentVariant = null;
    this.selectedOptions = {};

    this.init();
  }

  init() {
    if (!this.form) return;

    // Busca dados do produto
    this.loadProductData();

    // Inicializa seletores
    this.initNumericSelectors();
    this.initLetterSelectors();
    this.initFontSelectors();
    this.initColorSelectors();
    this.initSelectDropdowns();

    // Define variante inicial
    this.setInitialVariant();
  }

  loadProductData() {
    const productDataElement = document.querySelector('[data-product-json]');
    if (productDataElement) {
      try {
        this.productJSON = JSON.parse(productDataElement.textContent);
      } catch (e) {
        console.error('Erro ao carregar dados do produto:', e);
      }
    }
  }

  /**
   * Seletor de tamanhos numéricos (12-21)
   */
  initNumericSelectors() {
    const selectors = document.querySelectorAll('.filters1_list .select_iten');

    selectors.forEach(item => {
      if (item.classList.contains('desativado')) return;

      item.addEventListener('click', (e) => {
        const container = item.closest('.filters1_list');

        // Remove seleção anterior
        container.querySelectorAll('.select_iten').forEach(el => {
          el.classList.remove('active');
        });

        // Adiciona nova seleção
        item.classList.add('active');

        // Atualiza variante
        const optionIndex = item.dataset.optionIndex;
        const optionValue = item.dataset.optionValue;
        this.updateSelectedOption(optionIndex, optionValue);
      });
    });
  }

  /**
   * Seletor de letras A-Z
   */
  initLetterSelectors() {
    // Usa mesma lógica do seletor numérico
    // pois compartilham as mesmas classes
    this.initNumericSelectors();
  }

  /**
   * Seletor de tipos de fonte (imagens)
   */
  initFontSelectors() {
    const fontItems = document.querySelectorAll('.letras-itens');

    fontItems.forEach(item => {
      if (item.classList.contains('is-disabled')) return;

      item.addEventListener('click', (e) => {
        const container = item.closest('.variant-button-row');

        // Remove seleção anterior
        container.querySelectorAll('.letras-itens').forEach(el => {
          el.classList.remove('is-active');
        });

        // Adiciona nova seleção
        item.classList.add('is-active');

        // Atualiza variante
        const optionIndex = item.dataset.optionIndex;
        const optionValue = item.dataset.optionValue;
        this.updateSelectedOption(optionIndex, optionValue);
      });
    });
  }

  /**
   * Seletor de cores (imagem + nome)
   */
  initColorSelectors() {
    const colorButtons = document.querySelectorAll('.variant-button');

    colorButtons.forEach(button => {
      if (button.classList.contains('is-disabled')) return;

      button.addEventListener('click', (e) => {
        const container = button.closest('.variant-button-row');

        // Remove seleção anterior
        container.querySelectorAll('.variant-button').forEach(el => {
          el.classList.remove('is-active');
        });

        // Adiciona nova seleção
        button.classList.add('is-active');

        // Atualiza variante
        const optionIndex = button.dataset.optionIndex;
        const optionValue = button.dataset.optionValue;
        this.updateSelectedOption(optionIndex, optionValue);

        // Atualiza imagem do produto se houver
        this.updateProductImage(button);
      });
    });
  }

  /**
   * Seletor dropdown (select) para opções sem imagem
   */
  initSelectDropdowns() {
    const selectElements = document.querySelectorAll('.variant-select');

    selectElements.forEach(select => {
      select.addEventListener('change', (e) => {
        const optionIndex = select.dataset.optionIndex;
        const optionValue = select.value;

        // Atualiza variante
        this.updateSelectedOption(optionIndex, optionValue);
      });
    });
  }

  /**
   * Atualiza opção selecionada e encontra variante correspondente
   */
  updateSelectedOption(optionIndex, optionValue) {
    this.selectedOptions[optionIndex] = optionValue;

    // Encontra variante correspondente
    const variant = this.findMatchingVariant();

    if (variant) {
      this.currentVariant = variant;
      this.updateProduct(variant);
    }
  }

  /**
   * Encontra variante baseada nas opções selecionadas
   */
  findMatchingVariant() {
    if (!this.productJSON || !this.productJSON.variants) return null;

    return this.productJSON.variants.find(variant => {
      const option1Match = !this.selectedOptions['0'] || variant.option1 === this.selectedOptions['0'];
      const option2Match = !this.selectedOptions['1'] || variant.option2 === this.selectedOptions['1'];
      const option3Match = !this.selectedOptions['2'] || variant.option3 === this.selectedOptions['2'];

      return option1Match && option2Match && option3Match;
    });
  }

  /**
   * Atualiza informações do produto baseado na variante
   */
  updateProduct(variant) {
    // Atualiza ID da variante no formulário
    const variantInput = this.form.querySelector('[name="id"]');
    if (variantInput) {
      variantInput.value = variant.id;
    }

    // Atualiza preço
    this.updatePrice(variant);

    // Atualiza disponibilidade
    this.updateAvailability(variant);

    // Atualiza URL
    this.updateURL(variant);
  }

  /**
   * Atualiza preços exibidos
   */
  updatePrice(variant) {
    const priceElement = document.querySelector('[data-product-price]');
    const comparePriceElement = document.querySelector('[data-product-compare-price]');

    if (priceElement) {
      priceElement.innerHTML = this.formatMoney(variant.price);
    }

    if (comparePriceElement) {
      if (variant.compare_at_price && variant.compare_at_price > variant.price) {
        comparePriceElement.innerHTML = this.formatMoney(variant.compare_at_price);
        comparePriceElement.style.display = '';
      } else {
        comparePriceElement.style.display = 'none';
      }
    }
  }

  /**
   * Atualiza disponibilidade e botão de adicionar
   */
  updateAvailability(variant) {
    const addButton = document.querySelector('[data-add-to-cart]');
    const addButtonText = addButton ? addButton.querySelector('[data-add-to-cart-text]') : null;

    if (!addButton) return;

    if (variant.available) {
      addButton.disabled = false;
      addButton.classList.remove('disabled');
      if (addButtonText) {
        addButtonText.textContent = 'Adicionar ao Carrinho';
      }
    } else {
      addButton.disabled = true;
      addButton.classList.add('disabled');
      if (addButtonText) {
        addButtonText.textContent = 'Esgotado';
      }
    }
  }

  /**
   * Atualiza URL sem recarregar página
   */
  updateURL(variant) {
    if (!window.history.replaceState) return;

    const url = new URL(window.location.href);
    url.searchParams.set('variant', variant.id);
    window.history.replaceState({}, '', url.toString());
  }

  /**
   * Atualiza imagem principal do produto
   */
  updateProductImage(element) {
    const variantId = element.dataset.variantId;
    if (!variantId || !this.productJSON) return;

    const variant = this.productJSON.variants.find(v => v.id == variantId);
    if (!variant || !variant.featured_image) return;

    const mainImage = document.querySelector('[data-product-main-image]');
    if (mainImage) {
      mainImage.src = variant.featured_image.src;
      mainImage.alt = variant.featured_image.alt || this.productJSON.title;
    }
  }

  /**
   * Define variante inicial baseada na URL ou primeira disponível
   */
  setInitialVariant() {
    const urlParams = new URLSearchParams(window.location.search);
    const variantId = urlParams.get('variant');

    if (variantId && this.productJSON) {
      const variant = this.productJSON.variants.find(v => v.id == variantId);
      if (variant) {
        this.currentVariant = variant;
        this.selectVariantOptions(variant);
        return;
      }
    }

    // Seleciona primeira variante disponível
    if (this.productJSON && this.productJSON.variants.length > 0) {
      const firstAvailable = this.productJSON.variants.find(v => v.available);
      if (firstAvailable) {
        this.currentVariant = firstAvailable;
        this.selectVariantOptions(firstAvailable);
      }
    }
  }

  /**
   * Seleciona opções visualmente baseado na variante
   */
  selectVariantOptions(variant) {
    // Option 1
    if (variant.option1) {
      this.selectOption(0, variant.option1);
    }

    // Option 2
    if (variant.option2) {
      this.selectOption(1, variant.option2);
    }

    // Option 3
    if (variant.option3) {
      this.selectOption(2, variant.option3);
    }

    this.updateProduct(variant);
  }

  /**
   * Seleciona opção visualmente
   */
  selectOption(optionIndex, optionValue) {
    // Busca por diferentes tipos de seletores
    const selectors = [
      `.select_iten[data-option-index="${optionIndex}"][data-option-value="${optionValue}"]`,
      `.letras-itens[data-option-index="${optionIndex}"][data-option-value="${optionValue}"]`,
      `.variant-button[data-option-index="${optionIndex}"][data-option-value="${optionValue}"]`
    ];

    selectors.forEach(selector => {
      const element = document.querySelector(selector);
      if (element && !element.classList.contains('desativado') && !element.classList.contains('is-disabled')) {
        element.click();
      }
    });

    // Busca por select dropdown
    const selectElement = document.querySelector(`.variant-select[data-option-index="${optionIndex}"]`);
    if (selectElement) {
      selectElement.value = optionValue;
      // Trigger change event
      const event = new Event('change', { bubbles: true });
      selectElement.dispatchEvent(event);
    }

    this.selectedOptions[optionIndex] = optionValue;
  }

  /**
   * Formata preço em reais
   */
  formatMoney(cents) {
    const value = cents / 100;
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }
}

// Inicializa quando DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new RiocapriaVariantSelector();
  });
} else {
  new RiocapriaVariantSelector();
}

// Exporta para uso global se necessário
window.RiocapriaVariantSelector = RiocapriaVariantSelector;
