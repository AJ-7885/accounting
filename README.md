<h1 align="center">
  <a href="https://github.com/AJ-7885/accounting">
    Personal Accounting Management System
  </a>
</h1>

<p align="center">
  <a href="https://github.com/AJ-7885/accountingp/releases">
    <img src="https://img.shields.io/github/v/release/github.com/AJ-7885" alt="GitHub Release (latest by date)" />
  </a>
  <a href="https://github.com/AJ-7885/accounting/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/github.com/AJ-7885" alt="License" />
  </a>
</p>

<p align="center">
  A simple and beautiful <a href="https://www.codecademy.com/articles/what-is-crud">CRUD</a> application built with <a href="https://reactjs.org">React</a>.
</p>

# React + TypeScript + Vite template

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Technologies Used

- [React](http://reactjs.org)
- [Primitive UI](https://taniarascia.github.io/primitive)
- [SweetAlert2](https://sweetalert2.github.io)

## License

CRUD App is open-source software licensed under the [MIT License](https://github.com/SafdarJamal/crud-app/blob/master/LICENSE).

## Todo list

- Rooznameh
- Daftar kool
- Daftar Joeeh
- Taraz nameh
- [ ] I want to make react application to show the bank statement transaction but I need to sort the transaction base on date and then calculate supply and display in each row.

## Reference

 Reference for Double-Entry Principle accounting : <https://lwvworc.org/in-bookkeeping-what-is-double-entry-system>

## Double Entry System in Accounting

The **double entry system** is a fundamental concept in accounting that ensures accurate financial recording. It operates on the principle that every transaction impacts a company's finances in two ways: through **debit** and **credit** entries. Here's a breakdown of key aspects related to the double entry system:

## What is the Double Entry Accounting System?

In **double entry accounting**, every transaction results in two corresponding entries: a **debit** entry representing an increase in assets or expenses, and a **credit** entry representing a decrease in liabilities or income. This system ensures that financial records are comprehensive and balanced.

## How Does the Double Entry System Work?

1. **Recording Transactions:** Each financial transaction is recorded in at least two accounts.
2. **Debits and Credits:** Debits and credits are applied to different accounts based on the nature of the transaction.
3. **Balancing the Books:** The total debits must equal total credits, ensuring the books are balanced.

## Basic Steps for Double-Entry Bookkeeping

1. **Create a Chart of Accounts:** Define accounts to categorize transactions.
2. **Record Transactions:** Enter transactions using debits and credits.
3. **Ensure Balance:** Each transaction should have equal debit and credit components.
4. **Verify Financial Statements:** Confirm that financial statements are balanced and adhere to the accounting equation: **Assets = Liabilities + Equity**.

## Key Principles of Double Entry Accounting

- **Dual Aspect:** Every transaction impacts at least two accounts, maintaining the balance in the system.
- **Debit and Credit:** Debits increase assets and expenses, while credits decrease liabilities and income.

## Advantages of Double Entry Accounting

- **Accuracy:** Reduces errors and ensures comprehensive recording of financial activities.
- **Financial Statements:** Facilitates the creation of accurate profit and loss statements and balance sheets.

## Examples of Double Entry Bookkeeping

In a loan transaction of $5,000:

- **Debit:** Increase in assets (e.g., cash or bank balance) by $5,000.
- **Credit:** Increase in liabilities (e.g., loans payable) by $5,000.

## Single Entry vs. Double Entry

- **Single Entry System:** Records only one aspect of a transaction, lacks comprehensive financial insights.
- **Double Entry System:** Provides a complete and balanced view of financial transactions, enhancing accuracy and accountability.

*Sources: [1](URL1), [2](URL2), [3](URL3)*
