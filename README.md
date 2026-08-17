# 🎭 Learning Playwright & TypeScript / JavaScript

A hands-on learning repository dedicated to mastering **JavaScript/TypeScript fundamentals**, **Object-Oriented Programming (OOP)**, and **End-to-End Web Automation with Playwright**.

---

## 📚 Repository Structure

```
LearningPlayWright/
├── PlayWright_Fundamentals/          # Playwright Test Suite & Automation
│   ├── playwright.config.ts          # Playwright configuration (browsers, reporters, fixtures)
│   ├── tests/                        # Test spec files
│   │   └── example.spec.ts           # Sample E2E test scenarios
│   └── tsconfig.json                 # TypeScript configuration for Playwright
│
├── Typescript/                       # TypeScript Core Concepts
│   └── arrayFilter.ts                # Filtering arrays with strong typing
├── Interface/                        # TypeScript Interfaces & Enums
│   └── enum.ts                       # Enums and interfaces usage
├── TS_Generics/                      # Advanced TypeScript: Generics & OOP
│   ├── Generic_API_Response.ts       # Generic types for API modeling
│   ├── PageObjectModel.ts           # Page Object Model design with Generics
│   ├── override.ts                   # Method overriding & Polymorphism
│   └── readonly.ts                   # Readonly properties & immutability
├── TS_Private_Public_Protected/      # TypeScript Access Modifiers
│   └── Private_Public_Protected.ts   # public, private, and protected member access
│
├── OOPS_Encapsulation/               # JavaScript OOP: Encapsulation
│   ├── Car.js                        # Encapsulation examples
│   └── encapsulation_get_set.js      # Getters and Setters in classes
├── OOPS_Inheritance/                 # JavaScript OOP: Inheritance
│
├── async_await/                      # Asynchronous JavaScript (Promises, Async/Await)
├── objects/                          # JavaScript Object Manipulation
├── array/                            # Array methods and operations
├── challenge/                        # Coding challenges & problem solving
├── practice/                         # Code practice exercises
│
├── chapter_01_basics/                # JavaScript Basics & Data Types
├── chapter02_javascript_concepts/    # Hoisting, Scope & Closures
├── chapter03_identifier_literal_statement/ # Identifiers & Literals
├── chapter04_assignment_operator/    # Assignment & Arithmetic Operators
├── chapter05_statements/             # Conditional Statements (if/else)
├── chapter06_switch_statements/      # Switch-Case Control Flow
├── chapter09_function/               # Functions, Parameters & Return Values
│
└── .github/workflows/
    └── playwright.yml                # CI/CD Pipeline for automated test runs
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18 or higher
- **npm**: v9 or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mayankrana93/LearningPlayWright.git
   cd LearningPlayWright
   ```

2. **Install root dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright project dependencies & browsers:**
   ```bash
   cd PlayWright_Fundamentals
   npm install
   npx playwright install --with-deps
   ```

---

## 🧪 Running Playwright Tests

Navigate to the `PlayWright_Fundamentals` directory:

```bash
cd PlayWright_Fundamentals
```

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (UI visible)
```bash
npx playwright test --headed
```

### Run tests on a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run in Interactive UI Mode
```bash
npx playwright test --ui
```

### View HTML Test Report
```bash
npx playwright show-report
```

---

## 🛠️ TypeScript Verification

To verify TypeScript types across the project:

```bash
# Check root project
npx tsc --noEmit

# Check Playwright project
cd PlayWright_Fundamentals && npx tsc --noEmit
```

---

## 🔄 Continuous Integration (CI)

Playwright tests run automatically on push and pull requests to `main` via **GitHub Actions** ([.github/workflows/playwright.yml](.github/workflows/playwright.yml)).
