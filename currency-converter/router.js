import { CurrencyConverterPage } from './pages/currencyConverter';
import { RatePage } from './pages/Rate';
export function createRouter(mainOutlet) {
  let currentRoute = null;

  window.addEventListener('popstate', handlePopState);
  handlePopState();

  function handlePopState() {
    const route = getCurrentRoute();
    navigate(route);
  }

  function getCurrentRoute() {
    const path = window.location.pathname;
    return path === '/' ? 'home' : path.slice(1);
  }

  function navigate(route) {
    let component;

    switch (route) {
      case '/converter':
        component = CurrencyConverterPage;
        break;
      case '/rate':
        component = RatePage;
        break;

      default:
        component = CurrencyConverterPage;
    }

    if (currentRoute !== route) {
      mainOutlet.innerHTML = '';
      mainOutlet.appendChild(component());
      currentRoute = route;
    }
  }

  return {
    navigate,
    getCurrentRoute,
  };
}
