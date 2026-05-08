# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
    # JSOA Frontend 2

    Feature-based React app with React Router and shared UI modules.

    ## Scripts

    ```bash
    npm install
    npm run dev
    ```

    Optional checks:

    ```bash
    npm run lint
    npm run build
    ```

    ## Structure

    - `src/app`: router, routes, and layout
    - `src/features`: feature pages (each has an `index.ts` barrel)
    - `src/shared`: shared UI and constants (barrel export)
