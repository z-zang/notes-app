import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { useThemeContext } from './hooks/ThemeContext';
import './App.css'

const App = () => {
    const { theme } = useThemeContext();

    return (
        <main className={`main ${theme}`}>
            <Sidebar />
            <div className='contentWrapper'>
                <Outlet />
            </div>
        </main>
    )
}

export default App