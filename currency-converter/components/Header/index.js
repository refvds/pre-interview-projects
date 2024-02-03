import { addZero } from '../../utils/addZero';

export default function HeaderComponent(title) {
  const header = document.createElement('header');

  const date = new Date();
  const hours = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());
  const months = addZero(date.getMonth() + 1);

  header.innerHTML = `
    <header class="header">
      <div class="header__left-side">
        <h1 class="header__title">${title}</h1>
        <span class="header__current-day">Today, ${date.getDate()}:${months}:${date.getFullYear()}</span>
        <span class="header__current-time">${hours}:${minutes}</span>
      </div>
      <div class="header__right-side">
        <button class="header__lang">BY</button>
      </div>
    </header>
  `;
  return header;
}
