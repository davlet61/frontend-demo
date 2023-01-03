# Module Federation with React and Webpack

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://github.com/davlet61/frontend-demo/blob/main/LICENSE)

This is a project scaffold to demonstrate microfrontend architechture with Module Federation and Monorepo.
The project utilizes the power of Typescript

[![My Tech Stack](https://github-readme-tech-stack.vercel.app/api/cards?title=Tech%20Stack&fontSize=19&lineCount=3&theme=discord&line1=react,react,6dd6fa;typescript,typescript,3178C6;webpack,webpack,8DD6F9;&line2=tailwindcss,tailwindcss,06B6D4;storybook,storybook,FF4785;&line3=turborepo,turbborepo,EF4444;)](https://github-readme-tech-stack.vercel.app/api/cards?title=Tech%20Stack&fontSize=19&lineCount=3&theme=discord&line1=react,react,6dd6fa;typescript,typescript,3178C6;webpack,webpack,8DD6F9;&line2=tailwindcss,tailwindcss,06B6D4;storybook,storybook,FF4785;&line3=turborepo,turbborepo,EF4444;)

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `notes`: A React Federated application serving as a host-app.
- `modules`: Another federated React app, can be considered a Micro Frontend.
- `config`: Shared configuration files inlcuding `eslint`, `prettier`, `tailwindcss`.
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `lib`: Mainly a store package, `shared state`with `Zustand`.
- `ui`: UI library and a design system built with `Tailwindcss`, `Headless UI` and React.
- `storybook`: Not entirely finished.

### Local Development

To develop all apps and packages, run the following command:

```
git clone https://github.com/davlet61/frontend-demo.git
cd frontend-demo
yarn
yarn dev
```

Notes will be available at `localhost:3000` and Modules at `localhost:3001`
You can also access Stories at `localhost:6006`

### Build

To build all apps and packages, run the following command:

```
cd frontend-demo
yarn build
```

_and to run it_:

```
yarn start
```
