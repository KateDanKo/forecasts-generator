/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const forecastButton = document.querySelector('.forecast-btn');
const currentForecastTitle = document.querySelector('.current-forecast h1');
const currentForecastProbability = document.querySelector('.current-forecast p');

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPrediction(number) {
    switch (number) {
        case 1:
            return "Сегодня будет удачный день!";
        case 2:
            return "Вам предстоит важное решение.";
        case 3:
            return "Ожидайте приятный сюрприз.";
        case 4:
            return "Ваши старания будут вознаграждены.";
        case 5:
            return "Будьте внимательны к своим близким.";
        default:
            return "Нет предсказания.";
    }
}

// Функция для клонирования шаблона и заполнения данными
function createForecastItem(prediction, probability) {
    const template = document.getElementById('forecast-item');
    const clone = template.content.cloneNode(true);
    clone.querySelector('h3').textContent = prediction;
    clone.querySelector('p').textContent = `Вероятность: ${probability}%`;
    return clone;
}

function generateForecast() {
    const predictionNumber = generateRandomNumber(1, 5);
    const probability = generateRandomNumber(0, 100);
    const predictionText = getPrediction(predictionNumber);
    
    currentForecastTitle.textContent = predictionText;
    currentForecastProbability.textContent = `Вероятность: ${probability}%`;
    
    const forecastElement = createForecastItem(predictionText, probability);
    
    const forecastsContainer = document.querySelector('.forecasts');
    
    forecastsContainer.appendChild(forecastElement);
}

forecastButton.addEventListener('click', generateForecast);