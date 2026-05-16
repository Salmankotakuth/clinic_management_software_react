
  // import { createRoot } from "react-dom/client";
  // import App from "./app/App.tsx";
  // import "./styles/index.css";

  // createRoot(document.getElementById("root")!).render(<App />);
  
  // src/main.tsx
// src/main.tsx
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { AuthProvider } from "./context/AuthContext";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);