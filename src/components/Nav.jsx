
import { Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex gap-4'>
      <Link to="/" className="font-medium text-purple-400">Home</Link>
      <Link to="" style={{pointerEvents:"none"}} className="font-medium text-gray-400">Men</Link>
      <Link to="" style={{pointerEvents:"none"}} className="font-medium text-gray-400">Women</Link>
      <Link to="" style={{pointerEvents:"none"}} className="font-medium text-gray-400">Children</Link>
    </nav>
  )
}

export default Nav