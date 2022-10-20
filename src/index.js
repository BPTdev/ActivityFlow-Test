import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Xarrow from "./components/xarrow";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Xarrow />
  </StrictMode>
);
