# Genralis Website

# src folder structure and what they contain

- `components/`: Reusable React components used across different pages.
- `data/`: Static data files, such as project details and event information.
- `pages/`: Individual page components for the website, such as Home, Projects, Events, and Contact.

  - Home
    - page.tsx
    - components
      - AboutCard.tsx
      - HomePageFooter.tsx
  - Projects
    - page.tsx
    - components
      - ProjectDetailCard.tsx
  - Events
  - Contact
  - EventsDetailPage
    - page.tsx

- `ui/`: UI components like buttons and form elements.
- `types/`: TypeScript type definitions for better type safety and code clarity.
- `constants/`: Constant values used throughout the application, such as button variants.
- `styles/`: Global and component-specific CSS styles.
- `utils/`: Utility functions and helpers used across the application.
- `hooks/`: Custom React hooks for managing state and side effects.
- `assets/`: Static assets like images, icons, and fonts.
- `index.tsx`: The main entry point of the React application.
- `App.tsx`: The root component that sets up routing and layout for the application.
- `index.css`: Global CSS styles and theme variables.

# Technologies Used

- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- Vite: A fast build tool and development server for modern web projects.
- React Router: A library for routing in React applications.
- Framer Motion: A library for animations and gestures in React.
- ESLint & Prettier: Tools for code linting and formatting to maintain code quality and consistency.
- Substack: For embedding newsletter subscription forms.
- GitHub Pages: For hosting the website.
