import { Outlet, NavLink, ScrollRestoration } from 'react-router-dom'
import Navbar from '../components/nav/Navbar'

const RootLayout = () => {
    return (
        <div>
            <ScrollRestoration />
            <header>
                <Navbar>
                </Navbar>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout 
