import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Nav from "./Nav"

const Layout = () => {
    const [searchResult, setSearchResult] = useState([])
    return (
        <div className="App" >
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