# WL React Frontend

This project is built with `Vite` and `TypeScript`. It includes `ESLint` and `Prettier` for code linting and formatting. It also uses `Tailwind CSS` for styling and `Vitest` for testing.

## Table of Contents
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environments](#environments)

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (version 18 or higher)
- [npm](https://www.npmjs.com/get-npm)

### Installing

1. Clone the repository:
    ```bash
    git clone https://github.com/wellnessliving/wl-react-fe.git
    ```

2. Navigate into the project directory:
    ```bash
    cd wl-react-fe
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and go to [http://localhost:5173](http://localhost:5173) to see the app.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the app for production.
- `npm run serve`: Previews the production build.
- `npm run lint`: Runs ESLint to check for code issues.
- `npm run test`: Runs the test suites using Vitest.
- `npm run test:coverage`: Runs the test suites and generates a coverage report.

## Environments
In order to handle different environments and align them with current monolith's implementation, several `.env.*` files have been created. In `package.json`, the `dev` and `build` scripts have been updated to use the appropriate `.env.*` files.

Please pay attention to the `Vite` docs regarding difference in `NODE_ENV` and `--mode` approaches to environment handling https://vite.dev/guide/env-and-mode.html#node-env-and-modes. All scripts in `package.json` use the `--mode` approach.  