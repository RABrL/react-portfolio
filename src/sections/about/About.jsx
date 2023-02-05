import './about.css'
import { FiDownload } from 'react-icons/fi'
import Card from '../../components/Card'
import data from './data'

export default function About () {
  return (
    <section id='about'>
      <div className="container about_container">
        <div className="about_left">
          <div className="about_portrait">
            <img src="" alt="About image" />
          </div>
        </div>
        <div className="about_right">
          <h2>About Me</h2>
          <div className="about_cards">
            {
              data.map(({ id, icon, title, desc }) => (
                <Card key={id} className="about_card">
                  <span className='about_card-icon'>{icon}</span>
                  <h5>{title}</h5>
                  <small>{desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error velit expedita eius nulla doloremque veniam! Iure incidunt necessitatibus sequi? Sunt in odio adipisci a nisi laudantium unde culpa enim?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit praesentium neque, velit alias voluptatibus officiis quam, sunt magni quaerat iure a placeat nihil nostrum error repudiandae dolore quo nemo maiores?
          </p>
          <a href="" download className='btn primary'>Download my CV <FiDownload/></a>
        </div>
      </div>
    </section>
  )
}
