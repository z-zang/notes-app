import './Settings.css';

const Settings = () => {
    return (
        <div>
            <h1>Settings</h1>
            <span>
                <h2>Dark theme</h2>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                </label>
            </span>
        </div>
    )
}

export default Settings