const cities = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань"];
const temperatures = [];

for (let i = 0; i < cities.length; i++) {
    const temp = Number(prompt(`Введите температуру для города ${cities[i]}:`, "0"));
    temperatures.push(temp);
}

const outputDiv = document.getElementById('output');
const list = document.createElement('ul');

for (let i = 0; i < cities.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `${cities[i]}: ${temperatures[i]}°C`;
    list.appendChild(listItem);
}

outputDiv.appendChild(list);

const maxTemp = -Infinity;
const minTemp = Infinity;

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > maxTemp) {
        maxTemp = temperatures[i];
    }
    if (temperatures[i] < minTemp) {
        minTemp = temperatures[i];
    }
}

const summary = document.createElement('p');
summary.innerHTML = `
    Максимальная температура: <span class="highlight"> ${maxTemp}°C </span> <br>
    Минимальная температура: <span class="highlight"> ${minTemp}°C </span>
`;
outputDiv.appendChild(summary);