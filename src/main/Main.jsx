import mainStyle from './main.module.css';
import mainSvg from '.././assets/girlbanner1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Main = () => {
  return (
    <article className={mainStyle.container}>
      <div className={mainStyle.body}>
        <section className={mainStyle.left}>
          <h1>
            Hello I’am <strong>Anastasia B.</strong>
            <br />
            <strong>Frontend</strong> <span>Developer</span>
            <br />
            Based In <strong>Ukraine.</strong>
          </h1>
          <p>
            <strong>Hi, I'm Anastasia B.</strong> I specialize in front-end
            development, transforming PSD and Figma designs into fully
            functional websites using HTML, CSS, Sass/Scss, JavaScript and React
            . I take pride in delivering clean, fast, and SEO-friendly code. My
            focus is on creating responsive, adaptive websites that provide
            excellent user experiences across all devices.
          </p>
          <div className={mainStyle.buttons}>
            <a href="https://t.me/Salestopmanager">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="https://www.fiverr.com/s/2KkqKvV">Fiver</a>
            <a href="https://github.com/steelRoot-aft">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </section>
        <section className={mainStyle.right}>
          <img src={mainSvg} alt="mainSvg" />
        </section>
      </div>
    </article>
  );
};

export default Main;
