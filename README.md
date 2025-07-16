# 📷 Clever Photos

A modern web application for browsing and favoriting nature photos, built for the Clever frontend challenge using **React**, **Next.js**, **TypeScript**, and **Tailwind CSS**.

---

## 🌐 Live Demo

Access the live version here:  
👉 [https://clever-photos.netlify.app/signin](https://clever-photos.netlify.app/signin)

---

## 📌 Overview

Clever Photos allows users to:

- Sign in (with spoofed authentication).
- Browse a curated list of nature photos from the Pexels API.
- Favorite/unfavorite photos with a single click.
- View photographer details and portfolio links.
- Enjoy a clean, responsive, and mobile-friendly UI.

---

## 🚀 Tech Stack

- **React & Next.js** – Modern, scalable frontend framework with SSR and routing.
- **TypeScript** – Type safety for reliability and maintainability.
- **Tailwind CSS** – Utility-first CSS for rapid, consistent, and responsive design.
- **Framer Motion** – Smooth animations for photo cards and transitions.
- **Pexels API** – Real photo data for a realistic experience.

---

## 🖥️ Features

- **Sign In Page** – Centralized, responsive login with validation.
- **Photo Gallery** – Displays 10 nature photos from Pexels.
- **Favorite Photos** – Click the star icon to favorite/unfavorite photos.
- **Photographer Info** – See photographer name, portfolio link (with icon), and photo color details.
- **Logout** – Securely log out from the app.
- **Mobile Responsive** – Optimized for both desktop and mobile screens.
- **Animations** – Card transitions and feedback using Framer Motion.
- **Persistent Favorites** – Favorites are stored during the session.

---

## 📁 Project Structure

- `app/` – Next.js app directory (routing, pages).
- `components/` – Reusable UI components (SignInForm, PhotosView, PhotosCard, etc).
- `hooks/` – Custom React hooks (authentication, favorites).
- `styles/` – Tailwind and global CSS.
- `types/` – TypeScript type definitions.
- `public/` – Static assets (SVGs, logo, icons).
- `README.md` – Project documentation.

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/fredericoberchof/clever-project.git
cd clever-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Open the app

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Recommendations for Production

To prepare this app for production, I would suggest:

- **Full Authentication:** Replace spoofed login with real authentication (e.g., OAuth, JWT).
- **Error Handling:** Add user-friendly error messages for API failures and network issues.
- **Test Coverage:** Increase unit and integration test coverage for all components and hooks.
- **SEO Optimization:** Add meta tags, Open Graph, and improve page titles/descriptions.
- **State Management:** For scalability, consider using Zustand or Redux Toolkit.
- **Add pagination:** To support a larger number of photos instead of just bringing the top ten.

---