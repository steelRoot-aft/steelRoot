import footerStyle from './footer.module.css';
import logoImg from '../assets/Logo.svg';

const Footer = () => {
  return (
    <footer className={footerStyle.container}>
      <div className={footerStyle.body}>
        <div className={footerStyle.logo}>
          <a href="https://www.fiverr.com/s/m53jjez">
            <img src={logoImg} alt="Logo" />
          </a>
        </div>
        <div className={footerStyle.info}>
          <p>@ 2024 Personal</p>
          <p>Made from Figma</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
