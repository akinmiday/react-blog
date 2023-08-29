import { FaLaptop, FaTablet, FaMobileAlt } from "react-icons/fa"
/* eslint-disable react/prop-types */
const Header = ({ title, width }) => {
    return (
        <header className="Header" >
            <h1>{title}</h1>
        </header>
    )
}

export default Header