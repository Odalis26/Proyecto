const loginctl = {}
const passport = require('passport')

loginctl.mostrar = (req, res) => {
    res.render('login/login');
}

loginctl.mostrarRegistro = (req, res) => {
    res.render('login/registro');
}

loginctl.login = passport.authenticate('local.signin', {
    successRedirect: '/ejercicio/agregar/',
    failureRedirect: '/login',
    failureFlash: true,
})

loginctl.registro = passport.authenticate('local.signup', {
    successRedirect: '/cerrarsesion',
    failureRedirect: '/registro',
    failureFlash: true,
})

loginctl.cerrarSesion=(req, res)=>{
    req.logOut()
    res.redirect('/')
}

module.exports = loginctl