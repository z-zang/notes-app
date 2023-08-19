import { Dispatch, SetStateAction, createContext, useState, useContext, ReactNode } from "react"
type ThemeContextType = {
    theme: string,
    setTheme: Dispatch<SetStateAction<string>>
}

type ThemeContextProviderPropsType = {
    children: ReactNode[] | ReactNode
}

const ThemeContext = createContext<ThemeContextType>({
    theme: '',
    setTheme: () => { }
})

const ThemeContextProvider = ({ children }: ThemeContextProviderPropsType) => {
    const [theme, setTheme] = useState('')
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => useContext(ThemeContext)

export default ThemeContextProvider