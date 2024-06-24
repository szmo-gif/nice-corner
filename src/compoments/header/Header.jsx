import logo from '../../assets/Nice_Corner_Logo.png'
import './header.css'
export default function header() {
    return (
    <header className="header">
        <img src={logo} alt="logo de nice corner" />
    </header>
    )
}