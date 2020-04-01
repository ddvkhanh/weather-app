const request = require('request')

const geocode =(address, callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address)+ '.json?access_token=pk.eyJ1IjoiZGR2a2hhbmgiLCJhIjoiY2s4MmtlcGx2MG1kMTNtcDRnd3c2ajNuMCJ9.7j_CoN5zBvIWHBUOlyz_RQ'
    request({url, json:true}, (error,{body}) => {
        const {place_name, center}= body.features[0]
        if (error) {
            callback('Unable to connect to weather service!') //reuseable, flexible
        } else if (body.features.length===0) {
            callback('Unable to find location. Try again with a different search term.')
        } else {
            callback(undefined, {
                latitude: center[1],
                longitude: center[0],
                location: place_name
            })
        }
    })
}

module.exports = geocode