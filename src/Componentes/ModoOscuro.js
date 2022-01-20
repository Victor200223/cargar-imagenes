import { createGlobalStyle } from "styled-components";
export const LightTheme = {
  body: "#fff",
  h2: "#5800ff",
};
export const DarkTheme = {
  body: "#000",
  h2: "#ff008e",
};

export const GlobalStyles = createGlobalStyle`
body{
    background-color:${(props) => props.theme.body};
    color:${(props) => props.theme.h2}
}`;
