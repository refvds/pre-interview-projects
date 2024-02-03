import './styles/main.scss';
import logo from './public/logo.svg';
import convert from './public/convert.svg';
import rate from './public/rate.svg';
import Nav from './components/Nav/index.js';
import { MainComponent } from './components/Main/index.js';
import { createRouter } from './router.js';

const main = MainComponent();
const router = createRouter(main);

const AppComponent = async () => {
  const app = document.getElementById('app');
  const navComponent = [
    { route: '/', icon: logo },
    { route: '/converter', icon: convert },
    { route: '/rate', icon: rate },
  ];

  const nav = await Nav(router, navComponent);
  app.appendChild(nav);
  app.appendChild(main);
};

document.addEventListener('DOMContentLoaded', AppComponent);
