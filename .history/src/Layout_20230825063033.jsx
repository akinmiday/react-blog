import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Nav from "./Nav"

const Layout = () => {
    return (
        <div>
            <Header title='React JS Blog' />
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout