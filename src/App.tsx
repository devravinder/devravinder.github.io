import { ThemeProvider } from "./hooks/useTheme";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background"></div>
    </ThemeProvider>
  );
}
