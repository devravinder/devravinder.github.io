import { ThemeProvider } from "./hooks/useTheme";
import Routes from "./routes";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Routes/>
      </div>
    </ThemeProvider>
  );
}
