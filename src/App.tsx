import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './App.css'

const App = () => {
    return (
        <main className='main'>
            <Sidebar />
            <div className='contentWrapper'>
                <Outlet />
            </div>
        </main>
    )
}

export default App