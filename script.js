/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */


const forecastBtn = document.querySelector('.forecast-btn');
const currentForecast = document.querySelector('.current-forecast');
const forecastsContainer = document.querySelector('.forecasts');
const forecastTemplate = document.getElementById('forecast-item');


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const predictions = [
  {
    text: 'Удача на вашей стороне!',
    probability: getRandomInt(50, 100) 
  },
  {
    text: 'Вас ждут небольшие трудности.',
    probability: getRandomInt(20, 50) 
  },
  {
    text: 'Сегодня не лучший день для важных решений.',
    probability: getRandomInt(0, 20) 
  },
  {
    text: 'Вас ожидает приятное событие.',
    probability: getRandomInt(60, 100)
  },
  {
    text: 'Будьте осторожны сегодня.',
    probability: getRandomInt(10, 40)
  }
];


forecastBtn.addEventListener('click', () => {
  
 
  const index = getRandomInt(0, predictions.length -1);
  
  const prediction = predictions[index];
  

  currentForecast.querySelector('h1').textContent = prediction.text;
  currentForecast.querySelector('p').textContent = `Вероятность сбыться: ${prediction.probability}%`;
  
  
  const forecastClone = forecastTemplate.content.cloneNode(true);
  

  forecastClone.querySelector('h3').textContent = prediction.text;
  
 
  forecastsContainer.insertBefore(forecastClone, forecastsContainer.firstChild);
});
