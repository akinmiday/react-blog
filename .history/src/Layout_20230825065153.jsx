import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Nav from "./Nav"

// eslint-disable-next-line react/prop-types
const Layout = ({ search, setSearch }) => {

    return (
        <div className="App" >
            <Header title='React JS Blog' />
            <Nav search={search} setSearch={setSearch} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout