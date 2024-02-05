import { addZero } from '../utils/addZero';

const dateTime = () => {
  const date = new Date();

  let day = addZero(date.getDate());
  let month = addZero(date.getMonth() + 1);

  let currentDay = `${day}.${month}.${date.getFullYear()} `;

  let hours = date.getHours();
  let minutes = date.getMinutes();

  let formattedHours = hours < 10 ? `0${hours}` : hours;
  let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `<span>Today, ${currentDay} ${formattedHours}:${formattedMinutes}</span>`;
};

export const CurrencyConverterPage = () => {
  const page = document.createElement('div');
  const dateElement = document.createElement('p');

  const updateTime = () => {
    dateElement.innerHTML = dateTime();
  };

  updateTime();
  setInterval(updateTime, 60 * 1000);

  page.innerHTML = `<p>Currency Converter</p>`;
  page.appendChild(dateElement);
  return page;
};
