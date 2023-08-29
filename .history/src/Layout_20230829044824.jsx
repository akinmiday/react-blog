import { Outlet } from "react-router-dom"
import { width } from "./hooks/useWindowSize"
import Footer from "./Footer"
import Header from "./Header"
import Nav from "./Nav"

// eslint-disable-next-line react/prop-types
const Layout = ({ search, setSearch }) => {
    const { width } = useWindowSize()

    return (
        <div className="App" >
            <Header title='React JS Blog' width={width} />
            <Nav search={search} setSearch={setSearch} />
            <main className="Home" >
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout