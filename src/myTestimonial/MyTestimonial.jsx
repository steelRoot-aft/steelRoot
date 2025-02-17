import testimonialStyle from './myTestimonial.module.css';
import Card from './card/Card';
import testimonialMan from '../assets/testimonial-1.svg';

const MyTestimonial = () => {
  return (
    <article className={testimonialStyle.container}>
      <div className={testimonialStyle.body}>
        <section className={testimonialStyle.top}>
          <h2>
            My <strong>Testimonial</strong>
          </h2>
        </section>
        <section className={testimonialStyle.bottom}>
          <Card
            image={testimonialMan}
            text="Did good work"
            name="tyler_god"
            raiting={5}
          />
        </section>
      </div>
    </article>
  );
};

export default MyTestimonial;
