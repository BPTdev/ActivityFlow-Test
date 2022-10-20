import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Xarrow from "./components/xarrow";
import Xarrow2 from "./components/xarrows2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    {/*<Xarrow />*/}
    <Xarrow2 />
  </StrictMode>
);
