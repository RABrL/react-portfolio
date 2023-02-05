import { IoColorPalette } from 'react-icons/io5'
import './navbar.css'
import data from './data'
export default function Navbar () {
  return (
    <nav id='navbar'>
      <div className='container nav_container'>
        <a href="index.html" className='nav_logo'>
          <img src="" alt="Logo" />
        </a>
        <ul className='nav_menu'>
          {
            data.map(({ id, link, title }) => <li key={id}><a href={link}> {title}</a></li>)
          }
        </ul>
        <button id='theme-icon'>
          <IoColorPalette/>
        </button>
      </div>
    </nav>
  )
}
