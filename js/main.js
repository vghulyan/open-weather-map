import * as service from './weather-service-mock';

document.getElementById('weatherBtn').addEventListener('click', () => {
    let city = document.getElementById("city").value;

	service.findAll()
    	.then(forecasts => {
    		let html = "";
        	let tmpForecasts = forecasts[0];
        	tmpForecasts.forEach(weather => {

        		html += `<table class="weatherTable">
        					<tr><th>Name</th><th>Country</th><th>Message</th><th>Description</th><th>Icon</th></tr>
                            <tr><td>${weather.city.name}</td><td>${weather.city.country}</td><td>${weather.city.message}</td>
                        `;
                weather.city.list.forEach(w => {
                	w.weather.forEach(wd => {

                		html += `<td>${wd.main}</td><td><img title="${wd.description}" src="http://openweathermap.org/img/w/${wd.icon}.png"/></td></tr>`;

                	})
                	
                });
                html += `</table>`;

        	});

        	document.getElementById("weather").innerHTML = html;
    	})
    	.catch(error => console.log(error));
});