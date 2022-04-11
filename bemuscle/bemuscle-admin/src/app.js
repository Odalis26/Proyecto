const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars')
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash'); 
const mysqlstore = require('express-mysql-session')(session);
const bodyparser = require('body-parser'); 

const { database } = require('./keys'); 

const app = express(); 
require('./lib/passport');

/// archivos compartidos
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'vistas'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpres: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');
/// archivos compartidos


//midlewars
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json());
app.use(session({
    secret: 'Bemuscle',
    resave: false,
    saveUninitialized: false,
    store: new mysqlstore(database)
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//midlewars

//varible globales 
app.use((req, res, next) => {
    app.locals.message = req.flash('message');
    app.locals.success = req.flash('success');
    app.locals.user = req.user;
    next();
});
//varible globales 

//public
app.use(express.static(path.join(__dirname, 'public')));
//public


//routers
app.use(require('./rutas/index.ruta'))
app.use(require('./rutas/login.ruta'))
app.use('/ejercicio',require('./rutas/ejercicio.ruta'))
app.use('/clasificacion',require('./rutas/clasificacion.ruta'))
app.use("/detalleEjercicio", require('./rutas/detalleEjercicio.ruta'))
app.use("/historialCliente", require('./rutas/historialCliente.ruta'))
app.use('/detalleRutina',require('./rutas/detalleRutina.ruta'))
app.use('/subclasificacion',require('./rutas/subclasificacion.ruta'))
app.use('/rutina',require('./rutas/rutina.ruta'))

module.exports = app;   