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

function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1; 
}

function getPrediction(number) {
    let prediction;
    switch (number) {
        case 1:
            prediction = "Сегодня будет удачный день!";
            break;
        case 2:
            prediction = "Вам предстоит важное решение.";
            break;
        case 3:
            prediction = "Ожидайте приятный сюрприз.";
            break;
        case 4:
            prediction = "Ваши старания будут вознаграждены.";
            break;
        case 5:
            prediction = "Будьте внимательны к своим близким.";
            break;
        default:
            prediction = "Нет предсказания.";
    }
    return prediction;
}

function generateForecast() {
    const randomNumber = generateRandomNumber(); 
    const prediction = getPrediction(randomNumber); 
    currentForecastTitle.textContent = prediction;
    currentForecastProbability.textContent = `Сгенерированное число: ${randomNumber}`;
}

forecastButton.addEventListener('click', generateForecast);