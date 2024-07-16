# nx-codux

Welcome to the nx-codux boilerplate project! This repository is a configured starter template designed to use NX for managing components and other libraries, as well as supporting multiple applications. Codux is integrated into the mix as a replacement for Storybook.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [License](#license)

## Introduction

The `nx-codux` project is a boilerplate configured to leverage NX for component and library management while supporting multiple applications. Instead of using Storybook, this project integrates Codux, providing a modern and efficient development experience.

## Features

- **NX Integration**: Utilize NX for efficient monorepo management, enabling scalable architecture for your projects.
- **Codux Integration**: Replace Storybook with Codux for component development and visualization.
- **Tailwind CSS Support**: Preconfigured Tailwind CSS for rapid UI development.
- **Global Setup for Boards**: Custom global setup for Codux boards.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/spwntch/nx-codux.git
    cd nx-codux
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Serve the applications:**

    ```bash
    nx serve
    ```

4. **Open Codux:**

    Follow the instructions on [Codux](https://codux.com) to set up and visualize your components.

## Project Structure

This project follows the standard NX monorepo structure:

- `apps/`: Contains the applications in the workspace.
- `libs/`: Contains the libraries in the workspace.
- `.codux/`: Contains Codux specific configuration and setup files.

## Configuration

Here is the `codux.config.json` used in this project:

```json
{
  "$schema": "https://wixplosives.github.io/codux-config-schema/codux.config.schema.json",
  "boardGlobalSetup": "./.codux/boards-global-setup.ts",
  "tailwindcssConfig": "./.codux/tailwind.config.js",
  "boardsPath": ".codux/src/boards",
  "componentsDiscovery": {
    "include": [
      "apps/**/app/**",
      "apps/**/components/**",
      "libs/**/src/lib/components/**"
    ],
    "exclude": [".codux/component-templates/**"]
  },
  "newComponent": {
    "componentsPath": "libs/react-ui/src/lib/components/.new"
  }
}
