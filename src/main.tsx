import { createRoot } from "react-dom/client";
import "index.scss";
import App from "App";

async function start() {
  const container = document.getElementById("root")!;
  const root = createRoot(container);
  root.render(<App />);
}

start();
