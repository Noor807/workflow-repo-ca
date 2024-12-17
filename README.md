 
# Workflow     (Project Setup and Tooling)

This project uses several tools for linting, formatting, testing, and automating Git hooks to ensure code quality and consistency.


## Fork Repository

```
https://github.com/NoroffFEU/workflow-repo-ca
```
------------------------------------------------------


##  Create a New Branch (workflow)
Before starting, create and switch to a new Git branch named workflow:

```
git checkout -b workflow
```

Make sure to commit all changes to this branch.

--------------------------------------------------


## Install the dependencies:

```
npm install
```
----------------------------------------------


## 1. Install ESLint

ESLint is used for identifying issues in JavaScript code and enforcing coding standards.

```
npm init @eslint/config@latest
```
--------------------------------------------------


## 2. Install Prettier –  Formatting

Prettier formats code to ensure a consistent style.

```
npm install -D prettier@3
```

Configured to lint and format JavaScript and HTML files. 

ESLint is set up to handle test globals (e.g., describe, it, expect).


------------------------------------------------------------------------


## 3. Husky – Git Hooks for Pre-commit Checks

Husky runs linting and formatting checks automatically before commits using lint-staged.

Installation:

```
npm install husky lint-staged --save-dev
```

Hooks ensure that code is properly linted and formatted before each commit.

------------------------------------------------------------------------




## 4.Install Vite

```
npm install -D vitest
```



###  Vitest – Unit Testing

Vitest is a lightweight testing framework for unit tests.

Installation:

```
npm install vitest --save-dev
```


Configured to run unit tests on utility functions 
(e.g.),

isActivePath,

getUserName,

-------------------------------------------------------------------


## 5. Install Playwright

```
npm init playwright@latest
```



###  Playwright – End-to-End Testing

Playwright is used for browser automation to write E2E tests.

Installation:

```
npm install playwright --save-dev
```

Configured to test user interactions like 

=> login

=> navigation on the website.

-------------------------------------------------------------------------


## 6. Environment Variables


### How It Was Set Up:

We added a .env file to store sensitive data such as login credentials:

```
USERNAME=your_username

PASSWORD=your_password
```

An example .env.example file is included to provide a template for developers to add their own credentials, but the actual .env file is added to .gitignore to ensure sensitive data is not exposed in version control.

The .gitignore file includes:

```
.env
```

-------------------------------------------------------------------------

## 7. Running Tests

Unit Tests: 

```
npm run test
```

End-to-End Tests: npm run test:e2e

----------------------------------------------------------------------------





