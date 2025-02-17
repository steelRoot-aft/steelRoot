import experienceStyle from './myExperience.module.css';
import Card from './card/Card';
import fiverrLogo from '../assets/Fiverr-Logo.png';
import lightIcon from '../assets/light.svg'

const MyExperience = () => {
  return (
    <article className={experienceStyle.body}>
      <section className={experienceStyle.top}>
        <h2>
          My <strong>Experience</strong>
        </h2>
      </section>
      <section className={experienceStyle.bottom}>
        <Card
          className={experienceStyle.block}
          icon={fiverrLogo}
          link="https://www.fiverr.com/s/2KkqKvV"
          title="Front-end developer on Fiverr"
          date="Nov 2024 - Present"
          text="As a Front-End Developer on Fiverr, I specialize in transforming
          design concepts into fully responsive and SEO-friendly websites.
          Collaborating closely with clients, I ensure that each project meets
          their unique vision while optimizing user experience and performance.
          By utilizing HTML, CSS, JavaScript, React, and Sass, I deliver clean
          and efficient code, creating stunning websites that are both visually
          appealing and highly functional. My focus is on delivering projects
          quickly, ensuring seamless adaptability across devices and maximizing
          online visibility for my clients."
        />
        <Card
          className={experienceStyle.block}
          icon={lightIcon}
          link="https://www.fiverr.com/s/P2Lo4Bp"
          title="Self-Taught Front-End Developer"
          date="Feb 2024 - Present"
          text="As a self-taught Front-End Developer, I have dedicated countless hours to mastering modern web technologies and best coding practices. Through online courses, documentation, and real-world projects, I have honed my skills in HTML, CSS, Sass/Scss, JavaScript and React. My hands-on approach to learning has allowed me to build responsive and user-friendly websites while keeping up with industry trends and performance optimization. This continuous self-education ensures that I bring innovative solutions and high-quality code to every project."
        />
      </section>
    </article>
  );
};

export default MyExperience;
