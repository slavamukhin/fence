import React, { useState } from 'react';
import GlobalCSS from './global.css'
import { ThemeProvider } from 'styled-components'
import { ThemeContext, white } from './theme'
import { ToogleTheme } from './component';

function App() {
  const [theme, setTheme] = useState(white)

  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div>App</div>
          <ToogleTheme />
        </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
