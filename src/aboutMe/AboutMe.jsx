import aboutStyle from './aboutMe.module.css'
import aboutImg from '../assets/aboutUs.svg'

const AboutMe = () => {
  return (
    <article className={aboutStyle.container}>
      <div className={aboutStyle.body}>
        <section className={aboutStyle.left}>
          <img src={aboutImg} alt="AboutMe" />
        </section>
        <section className={aboutStyle.right}>
          <h2>
            About <strong>Me</strong>
          </h2>
          <div className={aboutStyle.text}>
            <p>
              Hi, I'm Anastasia, a Front-End Developer specializing in creating
              modern, responsive, and SEO-friendly websites. I transform design
              concepts into clean and efficient code, ensuring a seamless
              experience across devices. With expertise in HTML, CSS,
              JavaScript, React, Tailwind, and Sass, I deliver visually
              appealing, high-performance web solutions.
            </p>
            <p>
              My journey started with self-learning, and now I help clients
              worldwide bring their ideas to life through web development. On
              Fiverr, I collaborate with businesses from various industries,
              always focusing on creating beautiful and functional websites
              optimized for search engines. My goal is to provide fast,
              reliable, and user-friendly websites that help businesses stand
              out in the digital world.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}

export default AboutMe