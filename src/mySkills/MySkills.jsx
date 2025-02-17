import skillsStyle from './mySkills.module.css';
import InfoCards from './components/InfoCards.jsx'
import {
  faCss3Alt,
  faHtml5,
  faSass,
  faJs,
  faReact,
  faGit,
  faFigma,
  
} from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';


const MySkills = () => {
  return (
    <article className={skillsStyle.body}>
      <section className={skillsStyle.top}>
        <h2>
          My <strong>Skills</strong>
        </h2>
      </section>
      <section className={skillsStyle.bottom}>
        <InfoCards icon={faHtml5} title="HTML" />
        <InfoCards icon={faCss3Alt} title="CSS" />
        <InfoCards icon={faSass} title="Sass/Scss" />
        <InfoCards icon={faJs} title="JavaScript" />
        <InfoCards icon={faReact} title="React" />
        <InfoCards icon={faGit} title="Git" />
        <InfoCards icon={faFigma} title="Figma" />
        <InfoCards icon={faImage} title="Photoshop" />
      </section>
    </article>
  );
}

export default MySkills