import { Link } from 'react-router-dom'

const BarraMenu = () => {
    return (
        <div>
            <nav className='bg-body-tertiary'>
                <Link to='/create' className='justify-content-end'>Create</Link>
                <Link to='/read' >Read</Link>
                <Link to='/update' >Update</Link>
                <Link to='/delete' >Delete</Link>
            </nav>            
        </div>
    )
}

export default BarraMenu