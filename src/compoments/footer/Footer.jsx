import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faMap, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import './footer.css'
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <nav className='footer'>
      <NavLink className={({ isActive }) => isActive ? "active" : undefined}>
        <FontAwesomeIcon className='icon' icon={faMapLocationDot} />
      </NavLink>
      <NavLink to ="/"
      className={({ isActive }) => isActive ? "active" : undefined}>
        <FontAwesomeIcon className='icon' icon={faMap} />
      </NavLink>
      <NavLink to="/login"
      className={({ isActive }) => isActive ? "active" : undefined}>
        <FontAwesomeIcon className='icon' icon={faRightToBracket} />
      </NavLink>
    </nav>
  )
}