const Nav = ({ search, setSearch }) => {
    return (
        <nav className="Nav" >
            <form className="searchForm" onSubmit={(e) => e.preventDefault()} >
                <label htmlFor="search" >Search Post</label>
            </form>
        </nav >
    )
}

export default Nav