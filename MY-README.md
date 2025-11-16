# 🚀 PLP Task Manager: Mastering React, JSX & Tailwind

## Project Overview

This project is the submission for **Assignment Week 3** of Front-End Development, focused on building a complete React application. It serves as proof of mastery in **State Management with Hooks**, **Component Architecture**, and **Responsive Design** using Tailwind CSS.

| Status | Detail |
| :--- | :--- |
| **Live Application** | [ADD YOUR DEPLOYMENT URL HERE] |
| **Core Technologies** | React v18, Vite, Tailwind CSS |
| **Adopted Patterns** | Function Components, Hooks API (including Custom Hooks), Atomic Design Principles |

---

## 🏗️ Project Architecture and Technologies

The application follows a feature-based architecture, utilizing the following directory structure to maintain separation of concerns:

| Directory | Objective | Related Task |
| :--- | :--- | :--- |
| `src/context/` | Contains the **`ThemeContext`** and its Provider, centralizing the Dark/Light Mode logic. | Task 5 |
| `src/layouts/` | Contains the **`Layout.jsx`**, which composes the overall page structure (`Navbar`, `Main`, `Footer`). | Task 2 |
| `src/components/` | Houses reusable components (e.g., `Button`, `Card`) and feature-specific components (e.g., `TaskManager`). | Task 2, 3, 4 |
| `src/hooks/` | (Assumed) Contains the **Custom Hook** `useLocalStorageTasks` for data persistence. | Task 3 |

### 🎯 Implemented Tasks Breakdown

#### 1. Task Management (Task 3)
* **Centralized State:** The `TaskManager` uses `useState` and `useReducer` (or complex state logic) to manipulate the task list.
* **Data Persistence:** Use of the Custom Hook `useLocalStorageTasks` to save and load task state across browser sessions.
* **Essential Hooks:** Effective implementation of `useEffect` to load initial state and synchronize with LocalStorage.

#### 2. API Integration (Task 4)
* The **`ApiDataFetcher.jsx`** component uses `useState` and `useEffect` to manage the HTTP request lifecycle.
* Handling of **three UI states**: `Loading...` (while fetching), rendered data (on success), and **Error** message (on request failure).
* Implementation of a **real-time filtering** functionality on the API results.

#### 3. Advanced Styling (Task 5)
* **Tailwind CSS:** Used for rapid and responsive styling, eliminating the need for traditional CSS.
* **Dark Mode:** Implemented using the **Context API** pattern (`ThemeContext`) and Tailwind's class variant (`darkMode: 'class'`), allowing the user to toggle the theme globally.

---

## 💻 Local Setup and Execution

### Prerequisites
* Node.js (v18+)
* npm

### Instructions
1.  **Clone the repository:**
    ```bash
    git clone []
    cd []
    ```

2.  **Install all dependencies (React, Vite, Tailwind, etc.):**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173/`.

---

## 🖼️ Visual Proof

*(Insert your images here to show the application in action.)*

### 1. Complete Interface (Dark Mode)
*(Demonstrates Task Manager, API Data, and complete layout.)*

### 2. Responsiveness
*(Demonstrates the layout on a mobile resolution, showing the grid collapse.)*

---

## 👤 Author

* **Name:** Josué Solota
* **GitHub:** Josuesolota