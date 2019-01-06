var Axios = require('axios'),
    Moment = require('moment');
    IpRequest = require('request-ip');

module.exports = function(req, res, next) {
    //Disabled until alternative req logger middleware is implemented
    next()
    return;
    var ip = IpRequest.getClientIp(req);
    var clientData = {};
    let url = 'http://ip-api.com/json/';
    if (typeof ip != 'undefined'){
        url += ip;
    }
    
    Axios.get(url)
        .then(response => {
            clientData = response.data;
            //console.log(response);
            if(clientData.status == 'success') {
                //Show log entry
                console.log(`[${Moment().format('MM-DD-YYY H:mm:ss.SSSS')}] Connection from ${clientData.query} (${clientData.city}, ${clientData.regionName} ${clientData.country}`);
            } else if(clientData.status == 'fail'){
                //Local Network or API error
                console.log(`[${Moment().format('MM-DD-YYY H:mm:ss.SSSS')}] Connection from ${ip} - PROTOCOL: ${req.protocol} - REQUEST_URL: ${req.method} "${req.originalUrl}"`);
            }
        })
        .catch(error => {
            console.log('Logger Error', error);
        });    
    next();
}