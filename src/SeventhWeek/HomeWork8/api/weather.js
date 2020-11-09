const { Router } = require('express');
const apiRouter = Router();
const axios = require('axios')


apiRouter.get('/', (req, res) => {
    const urlWeather = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const urlImg = 'http://openweathermap.org/img/w/';
    const appKey = 'f5e90af13dc1183c98434f299e89d8b6';
    const appQ = "&appid=";
    const city = Object.values(req.query);
    const img = Number(req.query.logo);
    const getFullUrl = `${urlWeather}${city[0]}${appQ}${appKey}`;

    if (img) {
        axios
            .get(getFullUrl)
            .then(response => (
                axios
                .get(urlImg + response.data.weather[0].icon + '.png')
                .then(response => (
                    res.send(`
                        <a target="_blank" href="${response.config.url}">
                            <img src=${response.config.url}>
                        </a>
                    `)
                ))
                .catch(err => {
                    res.send({
                        "Error": err.message
                    });
                })
            ))
    } else {
        res.send(getFullUrl)
    }
});

module.exports = apiRouter;