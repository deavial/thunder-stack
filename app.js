var express = require('express');
var stormpath = require('express-stormpath');
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


app.get('/', require('./routes').index);

// app.get('/', stormpath.loginRequired, function(req, res) {

//     //console.log(res.locals.user);

//     // set & save custom user data (arbitrary example)
//     req.user.customData.foo = 'ba!';
//     req.user.save();

//     // get custom user data and return it to rendered view
//     req.user.getCustomData(function(err, data) {
//         res.render('home', {
//             foo: data.foo
//         });
//     });

// });


app.listen(3000);
module.exports = app; 