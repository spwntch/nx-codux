# nx-codux

Welcome to the nx-codux boilerplate project! This repository is a configured starter template designed to use NX for managing components and other libraries, as well as supporting multiple applications. Codux is integrated into the mix as a replacement for Storybook.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Adding UI Components](#adding-ui-components)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [License](#license)

## Introduction

The `nx-codux` project is a boilerplate configured to leverage NX for component and library management while supporting multiple applications. Instead of using Storybook, this project integrates Codux, providing a modern and efficient, integrated design & development experience.

## Features

- **NX Integration**: Utilize NX for efficient monorepo management, enabling scalable architecture for your projects.
- **Codux Integration**: Replace Storybook with Codux for component development and visualization.
- **Tailwind CSS Support**: Preconfigured Tailwind CSS for rapid UI development.
- **Global Setup for Boards**: Custom global setup for Codux boards.
- **Shadcn/UI Integration**: Easily add base UI components to your project.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/spwntch/nx-codux.git
   cd nx-codux
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Open Codux:**

   Follow the instructions on [Codux](https://codux.com) to set up and visualize your components.

## Scripts

The `package.json` includes several scripts to help streamline your workflow:

- **Start the demo site in development mode:**

  ```bash
  pnpm run start
  ```

  This runs the demo site in development mode using NX.

- **Add a Shadcn/UI component:**

  ```bash
  pnpm run shadcn-ui button <!- or an other shadcn/ui component->
  ```

  This script allows you to add a new Shadcn/UI component to the library.

- **Convert images to .webp format:**

  ```bash
  pnpm run webp .assets/spwn/brand <!- or an other directory containing uncompressed images.->
  ```

  This script converts `.png`, `.jpg`, and other image types to `.webp` formats using a custom script located in `scripts/webp.sh`.

## Adding UI Components

This project includes a capability to add base UI components from [Shadcn/UI](https://ui.shadcn.com/) to a library called `@/react-ui`. To add a component, follow these steps:

1. **Add a component using Shadcn/UI:**

   ```bash
   pnpm dlx shadcn-ui@latest add button
   ```

   Alternatively, you can use the script in the package.json to achieve the same result:

   ```bash
   pnpm run shadcn-ui button
   ```

2. Follow the instructions on [Shadcn/UI](https://ui.shadcn.com/) for further customization and usage of the components.

## Project Structure

This project follows the standard NX monorepo structure:

- `apps/`: Contains the applications in the workspace.
- `libs/`: Contains the libraries in the workspace.
- `codux/`: Contains Codux specific configuration and setup files.
- `assets/`: This is where all static assets are stored.
- `scripts/`: These are bash scripts used during build and deploy steps. An example is our webp script to minimize images.

## Configuration

Here is the `codux.config.json` used in this project:

```json
{
  "$schema": "https://wixplosives.github.io/codux-config-schema/codux.config.schema.json",
  "boardGlobalSetup": "./codux/boards-global-setup.ts",
  "tailwindcssConfig": "./codux/tailwind.config.js",
  "boardsPath": "codux/src/boards",
  "componentsDiscovery": {
    "include": ["apps/**/app/**", "apps/**/components/**", "libs/**/src/lib/components/**"],
    "exclude": ["codux/component-templates/**"]
  },
  "newComponent": {
    "componentsPath": "libs/react-ui/src/lib/components/.new"
  }
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Feel free to contribute and open issues if you find any bugs or have suggestions for improvements.

Happy coding!
