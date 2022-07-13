import { FC, useContext } from "react"
import { dark, white, ThemeContext } from '../../theme'
import { EThemeName } from "../../theme/types"
 
export const ToogleTheme: FC = () => {
  const {theme, setTheme} = useContext(ThemeContext)

  return <div>
    <button onClick={() => theme.name === EThemeName.WHITE ? setTheme(dark) : setTheme(white)} type="button">Change theme</button>
  </div>
}