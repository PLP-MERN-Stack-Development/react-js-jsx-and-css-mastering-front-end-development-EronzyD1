# 🌍 React + Tailwind Assignment – Country Weather Explorer & Task Manager

This project is built with **React.js**, **Vite**, and **Tailwind CSS**.  
It demonstrates component-based architecture, state management with hooks, context for theming, API integration, and responsive design.

---

## 🚀 Deployment
Live demo: 

---

## 📂 Project Structure
```
src/
├── api/          # API functions (REST Countries, Open Meteo, JSONPlaceholder)
├── components/   # Reusable UI components (Button, Card, Navbar, Footer, etc.)
├── context/      # Theme context for light/dark mode
├── hooks/        # Custom hooks (useFetch, useLocalStorage)
├── pages/        # Page components (Home, Country, TaskManager, Posts)
├── utils/        # Utility functions (e.g., number formatting)
└── App.jsx       # Main application router
```

---

## 🧪 Features Implemented

### ✅ Task 1: Project Setup
- Vite + React project scaffolded
- Tailwind CSS configured
- Basic routing with React Router
- SPA rewrite configured (`vercel.json`) for deployment on Vercel

### ✅ Task 2: Component Architecture
- **Button** component with variants (primary, secondary, danger)
- **Card** for boxed content
- **Navbar (Header)** for site navigation
- **Footer** with links and copyright
- **Layout** wraps Navbar + Footer around main pages

### ✅ Task 3: State Management & Hooks
- **TaskManager page** lets users:
  - Add tasks
  - Mark as completed
  - Delete tasks
  - Filter tasks (All, Active, Completed)
- Hooks used:
  - `useState` for state
  - `useEffect` for persisting tasks
  - `useContext` for theme management
  - `useLocalStorage` custom hook for persistence

### ✅ Task 4: API Integration
- **REST Countries API**: search countries
- **Open Meteo API**: get live weather for a country
- **JSONPlaceholder API**: fetch posts with search + pagination
- Loading/error states implemented

### ✅ Task 5: Tailwind Styling
- Responsive layout (mobile → desktop)
- Theme switcher (light/dark) with Tailwind’s dark mode
- Utility classes for spacing, layout, typography
- Interactive hover/focus states

---

## ⚙️ Running Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 👤 Author
Eromosele
