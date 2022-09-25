import { ThemeProvider } from "@emotion/react";
import theme from "./utils/theme";
import Router from "./router";
import "./assets/styles/App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
