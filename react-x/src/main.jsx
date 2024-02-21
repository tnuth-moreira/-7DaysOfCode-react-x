import React from "react";
import { createRoot } from "react-dom/client";
import Pages from "./pages/Pages";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import "./assets/styles/index.css";

const rootElement = document.getElementById("root");

const firebaseApp = initializeApp(firebaseConfig);

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Pages app={firebaseApp} />
  </React.StrictMode>
);
