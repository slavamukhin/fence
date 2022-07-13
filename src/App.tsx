import { useState } from 'react'
import GlobalCSS from './global.css'
import { ThemeProvider } from 'styled-components'
import { ThemeContext, white } from './theme'
import { Block } from './layout'
import { Main, Installation, FenceType, Benefits, Quote, Quality } from './component'

function App() {
  const [theme, setTheme] = useState(white)

  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Block content={<Main />} background={require('./img/main.jpg')}/>
          <Block content={<Installation />} />
          <Block content={<FenceType />} />
          <Block content={<Benefits />} />
          <Block content={<Quote />} background='#003b78' />
          <Block content={<Quality />} />
          <Block content={<Main footer />} background={require('./img/footer.jpg')}/>
        </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
