import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className="root-layout p-5">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout