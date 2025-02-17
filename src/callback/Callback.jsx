import callbackStyle from './callback.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { faL } from '@fortawesome/free-solid-svg-icons';

const Callback = () => {
  const [name, setName] = useState(''); // Имя
  const [email, setEmail] = useState(''); // Почта
  const [site, setSite] = useState(''); // Сайт
  const [message, setMessage] = useState(''); // Сообщение
  const [status, setStatus] = useState(''); // Статус
  const [sendMessage, setSendMessage] = useState(true); // Отправка смс

  // Данные бота
  const botToken = '7753110246:AAHmKYresCvVb-1eJYVRoskt9oa6tyyH90Q';
  const chatId = '5805708007';

  // Функция отправки смс
  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `Name: ${name}\nEmail: ${email}\nWebsite: ${site}\nMessage: ${message}`; // форма отправки в телеграмм

    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          chat_id: chatId,
          text: text,
        },
      );

      if (response.data.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setSite('');
        setMessage('');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
  };

  // Разрешает только буквы (латиница и кириллица) и пробелы.
  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Zа-яА-Я\s]*$/.test(value)) {
      setName(value);
    }
  };

  // Запрет на отправку символы кроме буквы, цифры, @, ., _, -
  const handleEmailChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z0-9@._-]*$/.test(value)) {
      setEmail(value);
    }
  };

  // Разрешенные символы: латинские буквы, цифры, точка, слэш и дефис.
  const handleSiteChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z0-9.-/]*$/.test(value)) {
      setSite(value);
    }
  };

  // Разрешенные символы: буквы (латиница и кириллица), цифры, точка, запятая, восклицательный знак, вопросительный знак, точка с запятой, двоеточие и пробелы.
  const handleMessageChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Zа-яА-Я0-9.,!?;:\s]*$/.test(value)) {
      setMessage(value);
    }
  };

  // Отправка смс
  useEffect(() => {
    if (name.trim() && email.trim() && message.trim()) {
      setSendMessage(false);
    } else {
      setSendMessage(true);
    }
  }, [name, email, message]);

  return (
    <article className={callbackStyle.container}>
      <div className={callbackStyle.body}>
        <section className={callbackStyle.left}>
          <form className={callbackStyle.form} onSubmit={handleSubmit}>
            <input
              placeholder="Your name"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              placeholder="Your website (If exists)"
              type="text"
              value={site}
              onChange={handleSiteChange}
            />
            <textarea
              placeholder="How can I help?*"
              name="message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
            <button type="submit" disabled={sendMessage}>
              Get In Touch
            </button>
          </form>
        </section>
        <section className={callbackStyle.right}>
          <h2>
            Let’s <span>talk</span> for <br /> Something special
          </h2>
          <p>
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <div className={callbackStyle.buttons}>
            <a href="https://t.me/Salestopmanager">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="https://www.fiverr.com/s/2KkqKvV">Fiver</a>
            <a href="https://github.com/steelRoot-aft">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Callback;
