# 🎭 Playwright E2E E-commerce Framework

[![Playwright](https://img.shields.io/badge/Playwright-2.0-brightgreen?logo=playwright)](https://playwright.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Maintenance](https://img.shields.io/badge/maintained-yes-green)]()

> Uma framework de automação E2E escalável e production-ready, focada em qualidade e fluxos reais de e-commerce.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Arquitetura](#arquitetura)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Cenários Cobertos](#cenários-cobertos)
- [Boas Práticas](#boas-práticas)
- [CI/CD](#cicd)
- [Contribuindo](#contribuindo)

## 🎯 Visão Geral

Este projeto demonstra uma **abordagem enterprise-level** para automação de testes E2E, com foco em:

✅ **Maintibilidade** - Código limpo e bem organizado  
✅ **Escalabilidade** - Fácil adicionar novos testes  
✅ **Abstração de Negócio** - Fluxos representam jornadas reais de usuários  
✅ **CI/CD Ready** - Integração com pipelines de deployment  
✅ **Real-world Scenarios** - Casos de uso práticos e reais  

## 🏗️ Arquitetura

### Page Object Model (POM)
Separação clara entre lógica de teste e interação com UI:

```
pages/
├── LoginPage.ts
├── ProductPage.ts
├── CartPage.ts
└── CheckoutPage.ts
```

### Business Flows
Abstração de fluxos de usuário reais:

```
flows/
├── AuthenticationFlow.ts
├── PurchaseFlow.ts
└── CartManagementFlow.ts
```

### Estrutura Hierárquica

```
├── tests/                    # Testes E2E
├── pages/                    # Page Objects
├── flows/                    # Business flows
├── fixtures/                 # Dados de teste
├── config/                   # Configurações
└── utils/                    # Utilitários
```

## 📦 Pré-requisitos

- **Node.js** v18 ou superior
- **npm** v9 ou superior
- **Git**
- Browser: Chrome, Firefox ou Edge (instalado automaticamente pelo Playwright)

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/Eng-paloma/playwright-e2e-ecommerce-framework.git
cd playwright-e2e-ecommerce-framework
```

### 2. Instale dependências

```bash
npm install
```

### 3. Instale os browsers do Playwright

```bash
npx playwright install
```

### 4. Adicionado as variáveis de ambiente (opcional)

Crie um arquivo `.env` na raiz do projeto:

```env
BASE_URL=https://staging.example.com
HEADLESS=true
SLOW_MO=0
```

## ▶️ Uso

### Executar todos os testes

```bash
npx playwright test
```

### Executar testes em um navegador específico

```bash
# Chrome
npx playwright test --project=chromium

# Firefox
npx playwright test --project=firefox

# Safari
npx playwright test --project=webkit
```

### Executar um arquivo de teste específico

```bash
npx playwright test tests/e2e/auth.spec.ts
```

### Executar testes com modo UI (debug)

```bash
npx playwright test --ui
```

### Executar testes em modo headed (com interface)

```bash
npx playwright test --headed
```

### Gerar e visualizar relatório HTML

```bash
npx playwright show-report
```

### Executar com traçamento (trace)

```bash
npx playwright test --trace on
```

## 📁 Estrutura do Projeto

```
playwright-e2e-ecommerce-framework/
│
├── tests/
│   └── e2e/
│       ├── auth.spec.ts                 # Testes de autenticação
│       ├── product-selection.spec.ts    # Testes de seleção de produtos
│       ├── cart-management.spec.ts      # Testes de gerenciamento de carrinho
│       └── checkout.spec.ts             # Testes de checkout
│
├── pages/
│   ├── BasePage.ts                      # Classe base para todas as pages
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── flows/
│   ├── AuthenticationFlow.ts            # Fluxo de login/logout
│   ├── PurchaseFlow.ts                  # Fluxo completo de compra
│   └── CartManagementFlow.ts
│
├── fixtures/
│   ├── users.json                       # Dados de usuários de teste
│   ├── products.json                    # Dados de produtos
│   └── test-data.ts
│
├── config/
│   └── playwright.config.ts             # Configuração principal
│
├── utils/
│   ├── logger.ts                        # Utilitário de logs
│   ├── helpers.ts                       # Funções auxiliares
│   └── constants.ts
│
├── .env.example                         # Exemplo de variáveis
├── package.json
└── README.md
```

## ✅ Cenários Cobertos

### 1. **Autenticação**
- ✅ Login com credenciais válidas
- ✅ Logout
- ❌ Login com credenciais inválidas
- ❌ Login com email inválido
- ❌ Tentativa com campos vazios

### 2. **Seleção de Produtos**
- ✅ Visualizar catálogo de produtos
- ✅ Filtrar por categoria
- ✅ Buscar por nome
- ✅ Visualizar detalhes do produto

### 3. **Gerenciamento de Carrinho**
- ✅ Adicionar produto ao carrinho
- ✅ Aumentar/diminuir quantidade
- ✅ Remover produto
- ✅ Visualizar total

### 4. **Checkout**
- ✅ Checkout com dados válidos
- ✅ Validação de endereço
- ✅ Seleção de método de pagamento
- ✅ Conclusão da compra

## 🎓 Boas Práticas

### 1. **Não use seletores hardcoded**
```typescript
// ❌ Ruim
cy.get('div.class-1234 > span')
```

### 2. **Use Page Objects**
```typescript
const loginPage = new LoginPage(page);
await loginPage.login('user@example.com', 'password123');
```

### 3. **Crie Business Flows**
```typescript
await new PurchaseFlow(page).completePurchase(product);
```

### 4. **Adicionado logs significativos**
```typescript
logger.info('Iniciando fluxo de login');
logger.info('Preenchendo formulário de login');
```

### 5. **Use fixtures do Playwright**
```typescript
test('deve fazer login', async ({ page, context }) => {
  // Seu teste aqui
});
```

## 🔄 CI/CD

### GitHub Actions
Exemplo de workflow para CI/CD:

```yaml
name: E2E Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm run test:e2e
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

## 🧪 Executar Testes em Paralelo

```bash
# Por padrão, Playwright executa testes em paralelo
npx playwright test

# Executar sequencialmente (mais lento)
npx playwright test --workers=1
```

## 📊 Relatórios e Artefatos

Após executar os testes, gere o relatório:

```bash
npx playwright show-report
```

Isso abre uma interface visual com:
- Status de cada teste
- Tempo de execução
- Screenshots e vídeos (se configurado)
- Traces para debug

## 🐛 Debug e Troubleshooting

### Modo Debug Interativo
```bash
npx playwright test --debug
```

### Visualizar Trace
```bash
npx playwright show-trace trace.zip
```

### Aumentar Timeout
```typescript
test.setTimeout(60000); // 60 segundos
```

## 📝 Escrevendo um Novo Teste

```typescript
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Autenticação', () => {
  test('deve fazer login com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.navigate();
    await loginPage.login('user@example.com', 'password');
    
    await expect(page).toHaveURL('/dashboard');
  });
});
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/sua-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/sua-feature`)
5. Abra um Pull Request

## 📚 Recursos Úteis

- [Documentação Playwright](https://playwright.dev)
- [Page Object Model Best Practices](https://playwright.dev/docs/pom)
- [Debugging Playwright](https://playwright.dev/docs/debug)
- [CI/CD Integration](https://playwright.dev/docs/ci)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Eng-paloma**
- GitHub: [@Eng-paloma](https://github.com/Eng-paloma)

## ⭐ Se este projeto foi útil, deixe uma estrela!

---

**Última atualização:** 2026-05-06
