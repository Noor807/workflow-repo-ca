 
# Workflow (Project Setup and Tooling)

This project uses several tools for linting, formatting, testing, and automating Git hooks to ensure code quality and consistency.

## 1. ESLint & Prettier – Linting and Formatting

ESLint is used for identifying issues in JavaScript code and enforcing coding standards.
Prettier formats code to ensure a consistent style.
Installation:

npm install eslint prettier eslint-plugin-import eslint-config-prettier eslint-plugin-prettier --save-dev
Configured to lint and format JavaScript and HTML files. ESLint is set up to handle test globals (e.g., describe, it, expect).

## 2. Husky – Git Hooks for Pre-commit Checks

Husky runs linting and formatting checks automatically before commits using lint-staged.
Installation:

npm install husky lint-staged --save-dev
Hooks ensure that code is properly linted and formatted before each commit.

## 3. Vitest – Unit Testing

Vitest is a lightweight testing framework for unit tests.
Installation:

npm install vitest --save-dev
Configured to run unit tests on utility functions (e.g., isActivePath, getUserName).

## 4. Playwright – End-to-End Testing

Playwright is used for browser automation to write E2E tests.
Installation:

npm install playwright --save-dev
Configured to test user interactions like login and navigation on the website.

## 5. Environment Variables

Sensitive data (like login credentials) is stored in the .env file and is ignored by Git (.gitignore).

## 6. Running Tests

Unit Tests: npm run test
End-to-End Tests: npm run test:e2e

## 7. Contributing

Fork the repo and clone it.
Create a new branch (Workflow)
Install dependencies: npm install.
Commit and push your changes.
Create a pull request.

