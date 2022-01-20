import "./App.css";
import Inicio from "./Pagina/Inicio";
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme, GlobalStyles } from "./Componentes/ModoOscuro";
import { Switch } from "@mui/material";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log(theme);
  };
  return (
    <div>
      <ThemeProvider
        theme={theme === "light" ? LightTheme : DarkTheme}
        values={{
          themeToggler,
        }}
      >
        <GlobalStyles />
        <StyledApp>
          <div className="encabezado-theme">
            <span className="span">Modo Oscuro</span>
            <Switch
              className="switch switch1"
              color="primary"
              onChange={() => themeToggler()}
            />
          </div>

          <Inicio />
        </StyledApp>
      </ThemeProvider>
    </div>
  );
}

export default App;
