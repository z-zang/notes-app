import './Settings.css';
import { useThemeContext } from '../../hooks/ThemeContext';
const Settings = () => {
    const { theme, setTheme } = useThemeContext();

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
    }

    return (
        <div>
            <h1>Settings</h1>
            <span className='toggle__container'>
                <h2>Dark theme</h2>
                <label className="toggle">
                    <input type="checkbox" checked={theme === 'dark'} onChange={() => toggleTheme()} />
                    <span className="slider round" />
                </label>
            </span>
            <p>Made by Zichao Zang </p>
        </div>
    )
}

export default Settings