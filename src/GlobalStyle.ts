import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --theme-color: #d5dce2;
  --primary-color: #124f88;
  --secondary-color: #f7c331;
  --text-color-inverse: white;
  --text-color: black;
  --navbar-shallow-color: #e5e5e5;
  --menu-mobile-background-color: #3a4460;
  --font-family-web: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family-web);
  background-color: var(--theme-color);
  color: var(--text-color);
  margin: 0;
  overflow-y: visible;
}
/* 
.horizontal-padding {
  padding-left: 25px;
  padding-right: 25px;
}
.vertical-padding {
  padding-top: 25px;
  padding-bottom: 25px;
}

@media (min-width: 950px) {
  .horizontal-padding {
    padding-left: 70px;
    padding-right: 70px;
  }
  .vertical-padding {
    padding-top: 70px;
    padding-bottom: 70px;
  }
} */
`
