import React from "react";
import { createRoot } from "react-dom/client"; // Updated import

import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(<App />); // Use createRoot to render your app
