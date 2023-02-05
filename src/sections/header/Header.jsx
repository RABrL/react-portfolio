import './header.css'
import data from './data.js'

export default function Header () {
  return (
    <header id='header'>
      <div className="container header_container">
        <div className="header_profile">
          <img src="" alt="Profile photo" />
        </div>
        <h3>Robinson Brito</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quis animi esse eius amet, expedita ea quia porro molestiae repellat earum? Velit recusandae eum laboriosam? Facilis velit nesciunt est debitis?</p>
        <div className="header_cta">
          <a href="#contact" className='btn primary'>Let&#39;s Talk</a>
          <a href="#portfolio" className='btn ligth'>My work</a>
        </div>
        <div className="header_socials">
          {
            data.map(({ id, link, icon }) => (
              <a href={link} key={id} target="_blank" rel='noopener noreferrer'>{icon}</a>
            ))
          }
        </div>
      </div>
    </header>
  )
}
