import request from './request';

export let findAll = () => {
    return request({url:"http://api.openweathermap.org/data/2.5/weather?q=London"})
        .then(data => data = JSON.parse(data))
}