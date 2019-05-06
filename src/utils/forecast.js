const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/f8166b8c3bb313367a7faa023758213a/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + Math.round((body.currently.temperature - 32) * 5/9) + ' degress out. This a high today is ' + Math.round((body.daily.data[0].temperatureHigh - 32) * 5/9) + ' with a low of ' + Math.round((body.daily.data[0].temperatureLow - 32) * 5/9) + '. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast