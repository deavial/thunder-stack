var express = require('express');
var stormpath = require('express-stormpath');
var routes = require('./routes/index');
var app = express();


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-view-engine').createEngine());


app.use(stormpath.init(app, {
    // required
    apiKeyFile: process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + '/.stormpath/apiKey.properties',
    application: 'https://api.stormpath.com/v1/applications/7imlsUYTElHiERPeWq1gja',
    secretKey: 'qS-gM4[/40-vK2ZO0KM7)w.[h07>mm',

    // expire session after 24 hours
    sessionDuration: 1000 * 60 * 60 * 24, 

    postRegistrationHandler: function(account, req, res, next) {
        res.redirect(302, '/').end();
    }
}));


app.use('/', routes);


app.listen(3000);
module.exports = app; 