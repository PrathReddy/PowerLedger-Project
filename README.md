# Powerledger POC

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

Github Action CI - [![Cypress E2E Tests](https://github.com/rahul-testunity/powerledger-poc/actions/workflows/main.yml/badge.svg)](https://github.com/rahul-testunity/powerledger-poc/actions/workflows/main.yml)

### Execution Guideline

1. Install all the dependancies with the below command.

```bash
npm install
```

2. Create a `.env` file similar to `.env.local` in your directory.
3. Pass all the environment variables to the `.env` file.
4. Run below command to run the Cypress execution.

```bash
npm run cy:run
```

5. To debug the test in the headed mode, run below command.

```bash
npm run cy:debug
```

6. To create the base images for the Visual Regression tests.

```bash
npm run cy:base
```


## VOILA!!! 🎉 

----
Testunity © 2022 All Rights Reserved.