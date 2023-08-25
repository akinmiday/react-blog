const Nav = ({ search, setSearch }) => {
    return (
        <nav className="Nav" >
            <form className="searchForm" onSubmit={(e) => e.preventDefault()} >
                <label htmlFor="searchForm" ></label>
            </form>
        </nav >
    )
}

export default Nav