# ⚡ SNPulse | ServiceNow News Hub

A high-performance, real-time news aggregator for the ServiceNow ecosystem. Built to provide developers and ITOM/ITSM professionals with the latest updates on ServiceNow releases, AI advancements, and industry partnerships.

## 🚀 Key Features
- **Real-time Feed:** Fetches the latest ServiceNow news using GNews/NewsData APIs.
- **Topic Categorization:** Automatically filters news into categories like AI, Releases, and Financials.
- **Responsive UI:** A modern, "glassmorphism" inspired dashboard built with CSS variables.
- **Serverless Architecture:** Uses Vercel Functions to handle API requests securely.

## 🛠️ Technical Architecture
This project is built with a **Decoupled Architecture** to ensure security and performance:

1. **Frontend:** Vanilla HTML5, CSS3 (Syne & DM Sans typography), and Modern JavaScript.
2. **Backend (Proxy):** Node.js Serverless Functions (hosted on Vercel) used for **API Proxying**.
3. **Security:** Implemented **Environment Variable Masking** to prevent API key exposure in the client-side code.
4. **CORS Management:** Resolved Cross-Origin Resource Sharing (CORS) issues by routing requests through a server-side middleman.

## 📂 Folder Structure
```text
├── api/
│   └── news.js        # Serverless Function (Node.js)
├── index.html         # Main Application UI
└── README.md          # Project Documentation
