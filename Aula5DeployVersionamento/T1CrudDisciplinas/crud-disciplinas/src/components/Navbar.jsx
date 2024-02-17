import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <Link to='/create' >Create</Link>
            <Link to='/read' >Read</Link>
            <Link to='/update' >Update</Link>
            <Link to='/delete' >Delete</Link>
        </nav>
    )
}

export default Navbar