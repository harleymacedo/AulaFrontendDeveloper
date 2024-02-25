import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const BarraMenu = () => {
    return (
        <div>
            <Nav className='bg-body-tertiary'>
                <Nav.Link><Link to='/create' className='justify-content-end'>Create</Link></Nav.Link>
                <Nav.Link><Link to='/read'>Read</Link></Nav.Link>
                <Nav.Link><Link to='/update'>Update</Link></Nav.Link>
                <Nav.Link><Link to='/delete'>Delete</Link></Nav.Link>
            </Nav>            
        </div>
    )
}

export default BarraMenu