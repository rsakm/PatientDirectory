A modern, responsive web application for managing a directory of patient records. This project demonstrates best practices in React development, including a clean component-based architecture, state management with custom hooks, and a polished user interface built with Tailwind CSS.
![alt text](https://img.shields.io/badge/Live_Demo-patientdirectory.netlify.app-00C7B7?style=for-the-badge&logo=netlify)

![alt text](https://api.netlify.com/api/v1/badges/e850428d-a447-4959-99a3-a804eddddd17/deploy-status)
✨ View the Live Application ✨
Demo
A brief demonstration of searching, filtering by medical issue, sorting, and switching between Table and Card views.
Features
🔍 Dynamic Search: Instantly search for patients by name, email, or phone number with debouncing to optimize performance.
📊 Advanced Filtering: Filter the patient list by one or more medical issues using checkboxes.
🔃 Versatile Sorting: Sort the directory by patient name, age, or medical issue in both ascending and descending order.
📱 Dual View Modes: Seamlessly switch between a detailed Table View for comprehensive data comparison and a visually appealing Card View for a quick overview.
📄 Pagination: Efficiently handles large datasets with a clean and intuitive pagination system.
🎨 Responsive Design: A fully responsive layout that looks great on devices of all sizes, from mobile phones to desktops.
💡 Modern UI/UX: Built with Tailwind CSS for a professional look and Lucide React for crisp, clear icons.
🔄 Loading & Empty States: Provides clear user feedback with a loading spinner during data fetching and a helpful message when no results are found.
Tech Stack
This project is built with a modern front-end stack:
![alt text](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![alt text](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

![alt text](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

![alt text](https://img.shields.io/badge/Lucide-Icons-1fb2a6?style=for-the-badge)
React: For building the user interface.
Vite: As the next-generation front-end tooling for a fast development experience.
Tailwind CSS: For utility-first styling.
Lucide React: For beautiful and lightweight icons.
Project Structure
The codebase is organized following best practices to ensure scalability and maintainability.
src/
├── App.jsx                 # Main application component
├── components/             # Reusable UI components
│   ├── common/             # Generic components (Button, Input, etc.)
│   ├── layout/             # Layout components (Header, Layout)
│   ├── patient/            # Patient-specific components
│   └── pagination/         # Pagination component
├── hooks/                  # Custom React hooks for business logic
│   ├── useDebounce.js
│   └── usePatients.js
├── services/               # API interaction layer
│   └── api.js
├── utils/                  # Helper functions and constants
│   ├── constants.js
│   └── helpers.js
├── index.css               # Global styles (Tailwind)
└── main.jsx                # Application entry point
Use code with caution.
Getting Started
To run this project locally, follow these steps:
Clone the repository:
git clone https://github.com/your-username/patient-directory-app.git
Use code with caution.
Sh
Navigate to the project directory:
cd patient-directory-app
Use code with caution.
Sh
Install dependencies:
npm install
Use code with caution.
Sh
Run the development server:
npm run dev
Use code with caution.
Sh
Open your browser and navigate to http://localhost:5173 (or the port specified in your console).
Deployment
This application is deployed on Netlify and configured for continuous deployment. Every push to the main branch will automatically trigger a new build and deploy the latest version of the site.
The netlify.toml file is included to handle redirects for this Single Page Application (SPA), ensuring that all routes are correctly forwarded to index.html.
Distributed under the MIT License. See LICENSE for more information.