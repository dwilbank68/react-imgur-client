var Fetch = require('whatwg-fetch');
var rootUrl = "https://api.imgur.com/3/";
var apiKey = '3ef636b310d792e';

var configObj = {
    headers: {
        "Authorization": 'Client-ID ' +apiKey
    }
};

module.exports = window.api = {

    get: function (url) {
        return fetch(
            rootUrl + url,
            configObj
        )
        .then(function (response) {
            return response.json();
        })
    }
};