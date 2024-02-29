import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import routes, { renderRoutes } from "routers/routes";

import { viVN } from "@mui/material/locale";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme(viVN);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>{renderRoutes(routes)}</Router>
      </ThemeProvider>
    </>
  );
}

export default App;
