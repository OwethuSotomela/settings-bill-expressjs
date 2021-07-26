const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const SettingsBill = require('./settings-bill');

const app = express();
const settingsBill = SettingsBill()

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('index', {
        forCalls: settingsBill.getCallCostEpress(),
        forSmses: settingsBill.getSmsCostExpress(),
        forWarning: settingsBill.getWarningLevel2(),
        forCritical: settingsBill.getCriticalLevel2(), totals: settingsBill.totals()
    })
});

app.post('/settings', function (req, res) {

    settingsBill.setCallCost(req.body.callCost);
    settingsBill.setSmsCost(req.body.smsCost);
    settingsBill.setWarningLevel2(req.body.warningLevel);
    settingsBill.setCriticalLevel2(req.body.criticalLevel);

    console.log(settingsBill.getCallCostEpress());
    console.log(settingsBill.getSmsCostExpress());
    console.log(settingsBill.getWarningLevel2());
    console.log(settingsBill.getCriticalLevel2());

    res.redirect('/');
});

app.post('/action', function (req, res) {
    settingsBill.billSettAction(req.body.itemType);
    res.redirect('/');
});

app.get('/actions', function (req, res) {
    res.render("actions", { actions: settingsBill.getTheList() });
});

app.get('/actions/:type', function (req, res) {
    const type = req.params.type;
    res.render("actions", { actions: settingsBill.actionsFor(type) });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log("App started at port:", PORT)
});