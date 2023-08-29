import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa"
/* eslint-disable react/prop-types */
const Header = ({ title, width }) => {
    return (
        <header className="Header" >
            <h1>{title}</h1>
            {width < 768 ? <FaMobileAlt />
                : width < 992 ? <FaTabletAlt />
                    : <FaLaptop />}
        </header>
    )
}

export default Header