const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (address === undefined) {
    console.log('Location not provided!')
} else {
    geocode(address, (error, {latitude, longitude, location}) => {
        if (error) {
            return (error)
        }
        forecast(latitude, longitude, (error, data) => {
            if (error) {
                return (error)
            }
            console.log(location)
            console.log(data)
        })
    })
}

