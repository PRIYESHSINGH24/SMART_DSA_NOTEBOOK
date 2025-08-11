# Smart DSA Notebook

A unified platform to aggregate and manage your solved Data Structures & Algorithms (DSA) questions from various coding platforms like LeetCode, Codeforces, and GeeksforGeeks. This application provides a centralized interface with personalized features such as search, filter, bookmarking, and progress tracking, allowing users to efficiently view and manage their solutions.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square) ![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square) ![Version](https://img.shields.io/badge/version-0.0.0-blue.svg?style=flat-square) ![GitHub Stars](https://img.shields.io/github/stars/PRIYESHSINGH24/SMART_DSA_NOTEBOOK?style=flat-square&color=yellow)

## Table of Contents

- [Key Features](#key-features)

- [Architecture Overview](#architecture-overview)

- [Tech Stack](#tech-stack)

- [Getting Started](#getting-started)

- [Configuration](#configuration)

- [Usage](#usage)

- [Project Structure](#project-structure)

- [Scripts](#scripts)

- [Roadmap](#roadmap)

- [Contributing](#contributing)

- [Testing](#testing)

- [License](#license)

- [Acknowledgements](#acknowledgements)

## Key Features

-   **Centralized Solution Management**: Aggregate and organize solved DSA questions from various coding platforms (e.g., LeetCode, Codeforces, GeeksforGeeks).

-   **Unified Interface**: A single, intuitive dashboard to manage all your DSA progress.

-   **Personalized Search & Filter**: Quickly find specific problems or solutions using advanced search and filtering options.

-   **Progress Tracking**: Monitor your performance and track your progress across different platforms and problem types.

-   **Solution Viewing & Editing**: Directly view and update your problem descriptions and code solutions within the application.

-   **User Authentication**: Secure sign-up and login functionalities for personalized user experiences.

-   **Interactive UI**: Smooth page transitions and animations powered by Framer Motion for an engaging user experience.

-   **Responsive Design**: Optimized for seamless use across various devices and screen sizes.

-   **Comment Section**: Engage with solutions by adding comments and feedback.

## Architecture Overview

The Smart DSA Notebook is a modern, responsive Single-Page Application (SPA) built primarily with React and TypeScript. It leverages Vite for a fast development experience and optimized production builds. Client-side routing is managed by `react-router-dom`, providing seamless navigation between different sections of the application.

For state management, the application utilizes `@tanstack/react-query` for efficient server state handling, including data fetching, caching, and synchronization. User authentication state is managed globally using React's Context API. The user interface is crafted using `shadcn-ui` components, which are highly customizable with `Tailwind CSS`, ensuring a consistent and modern design. Fluid UI transitions and interactive elements are implemented with `framer-motion`, enhancing the overall user experience.

While the current repository focuses on the frontend, the application is designed to interact with a backend API for persistent storage of user data, problems, solutions, and comments, enabling the personalized features described.

## Tech Stack

| Area | Tool | Version |
|---|---|---|
|---|---|---|
| Frontend Framework | React | 18.x |
| Language | TypeScript | 5.x |
|---|---|---|
| Build Tool | Vite | 5.x |
| UI Library | shadcn-ui | Latest |
|---|---|---|
| Styling | Tailwind CSS | 3.x |
| Routing | React Router DOM | 6.x |
|---|---|---|
| Data Fetching | React Query | 5.x |
| Animations | Framer Motion | 12.x |
|---|---|---|
| Linting | ESLint | 9.x |
| CSS Preprocessing | PostCSS | 8.x |
|---|---|---|
| CSS Postprocessing | Autoprefixer | 10.x |
| UI Theming | next-themes | 0.3.x |
|---|---|---|



## Getting Started

Follow these instructions to set up and run the project locally for development.

### Prerequisites

Ensure you have the following installed on your machine:

-   Node.js (v18 or higher recommended)

-   npm (Node Package Manager) or pnpm/Yarn

### Installation

1.  **Clone the repository**:

```bash
git clone https://github.com/PRIYESHSINGH24/SMART_DSA_NOTEBOOK.git

```
2.  **Navigate to the project directory**:

```bash
cd SMART_DSA_NOTEBOOK

```
3.  **Install dependencies**:

```bash
npm install

# or pnpm install
    # or yarn install

```
## Configuration

The application can be configured using environment variables. Create a `.env` file in the root of the project and populate it with the necessary variables.

| ENV | Description | Example |
|---|---|---|
|---|---|---|
| `VITE_API_BASE_URL` | Base URL for the backend API. | `https://api.smartdsanotebook.com/v1` |


| `VITE_AUTH_SECRET` | Secret key for client-
