import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { useThemeContext } from './hooks/ThemeContext';
import './App.css'

const App = () => {
    const { theme } = useThemeContext();

    return (
        <main className={`main ${theme}`}>
            <Sidebar />
            <section className='contentWrapper'>
                <Outlet />
            </section>
        </main>
    )
}

export default App