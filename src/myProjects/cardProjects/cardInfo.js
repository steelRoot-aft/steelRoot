import usaRaffleWebsite from '../../assets/usaRaffleWebsite.png';
import wheatherApp from '../../assets/wheatherApp.png';
import startUpAppLanding from '../../assets/startUpAppLanding.png';
import startUpHardLanding from '../../assets/startUpHardLanding.png';
import deliveryLanding from '../../assets/deliveryLanding.png';
import photoStLanding from '../../assets/photoStLanding.png';
import productLanding from '../../assets/productLanding.png';

import servicesLanding from '../../assets/servicesLanding.png';
import yogaLanding from '../../assets/yogaLanding.png';

const cardInfo = [
  {
    image: servicesLanding,
    link: 'https://steelroot-aft.github.io/services_landing/',
    title: 'Services Landing',
    categories: 'landing',
  },
  {
    image: yogaLanding,
    link: 'https://steelroot-aft.github.io/yoga_landing/',
    title: 'Yoga Landing',
    categories: 'landing',
  },
  {
    image: productLanding,
    link: 'https://steelroot-aft.github.io/Product_land/',
    title: 'Restaurant Landing',
    categories: 'landing',
  },
  {
    image: photoStLanding,
    link: 'https://steelroot-aft.github.io/blog_PhotoSt/',
    title: 'Photo Studio',
    categories: 'landing',
  },
  {
    image: deliveryLanding,
    link: 'https://steelroot-aft.github.io/Delivery_food/',
    title: 'Delivery Landing',
    categories: 'landing',
  },
  {
    image: startUpHardLanding,
    link: 'https://steelroot-aft.github.io/startup_hard/',
    title: 'StartUp Advanced',
    categories: 'landing',
  },
  {
    image: startUpAppLanding,
    link: 'https://steelroot-aft.github.io/startUp_app/',
    title: 'StartUp Basic',
    categories: 'landing',
  },
  {
    image: wheatherApp,
    link: 'https://steelroot-aft.github.io/app-weather/',
    title: 'Weather-app',
    categories: 'other',
  },
  {
    image: usaRaffleWebsite,
    link: 'https://usaraffle-app.vercel.app/',
    title: 'USA Raffle-app',
    categories: 'website',
  },
].sort(() => Math.random() - 0.5);

export default cardInfo;
