import './nav.scss';
import { getSvg } from '../../utils/getSvg';

export default async function NavigationComponent(router, navLinks) {
  const generateNavHTML = async (navLinks) => {
    const lis = await Promise.all(
      navLinks.map(async ({ route, icon }) => {
        const svg = await getSvg(icon);
        return `<li class="nav__item"><a class="nav__link" href="${route}">${svg}</a></li>`;
      })
    );

    return `<ul class="nav__list">${lis.join('')}</ul>`;
  };

  const aside = document.createElement('aside');
  const nav = document.createElement('nav');

  nav.innerHTML = await generateNavHTML(navLinks);
  nav.classList.add('.nav');

  const handleClick = (event) => {
    const target = event.target.closest('a');
    if (target) {
      event.preventDefault();
      const route = target.getAttribute('href');
      router.navigate(route);
      window.history.pushState(null, null, route);
    }
  };

  nav.addEventListener('click', handleClick);
  aside.appendChild(nav);
  return aside;
}
