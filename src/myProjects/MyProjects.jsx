import projectsStyle from './myProjects.module.css';
import Card from './cardProjects/Card';
import cardInfo from './cardProjects/cardInfo';
import { useState } from 'react';

const MyProjects = () => {
  const [filter, setFilter] = useState('all'); // Сам фильтр
  const [visableCount, setVIsableCount] = useState(4);  // Колл-во отображаемых эелементов
  const [isHidden, setIsHidden] = useState(false); // Анимация появления

  // Функция фильтрации
  function fillterProjects(categories) {
    if (filter === categories) {
      return;
    }
    setIsHidden(true);
    setTimeout(() => {
      setFilter(categories);
      setIsHidden(false);
    }, 500);
  }

  // Кнопки фильтрации
  const Button = ({ name, filterName }) => {
    return (
      <button
        className={`${filterName === filter ? projectsStyle.active : ''}`}
        onClick={() => fillterProjects(filterName)}
      >
        {name}
      </button>
    );
  };

  return (
    <article className={projectsStyle.body}>
      <section className={projectsStyle.top}>
        <h2>
          My <strong>Projects</strong>
        </h2>
      </section>
      <section className={projectsStyle.main}>
        <div className={projectsStyle.buttons}>
          <Button name="All" filterName="all" />
          <Button name="Landing" filterName="landing" />
          <Button name="Website" filterName="website" />
          <Button name="Other" filterName="other" />
        </div>
        <div className={projectsStyle.projects}>
          {cardInfo
            .filter((item) => filter === 'all' || filter === item.categories)
            .slice(0, visableCount)
            .map((item, index) => {
              return (
                <Card
                  image={item.image}
                  link={item.link}
                  title={item.title}
                  key={index}
                  className={`${projectsStyle.block} ${
                    isHidden ? projectsStyle.hidden : ''
                  }`}
                />
              );
            })}
        </div>
      </section>
      <section className={projectsStyle.more}>
        <button
          onClick={() => setVIsableCount(visableCount + 2)}
          disabled={visableCount >= cardInfo.length}
          style={{
            background: visableCount >= cardInfo.length ? '#27272a' : '',
            color: visableCount >= cardInfo.length ? '#71717a' : '',
          }}
        >
          Show More
        </button>
      </section>
    </article>
  );
};

export default MyProjects;
