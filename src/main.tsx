import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

async function start() {
  const container = document.getElementById("root")!;
  const root = createRoot(container);
  root.render(<StrictMode><App /></StrictMode>);
}

start();
