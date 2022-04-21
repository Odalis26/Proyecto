const loginctl = {}
const passport = require('passport')
const sql = require('../configuracion_base_datos/base.sql')

loginctl.mostrar = async(req, res) => {
    const id = req.params.id
    const usuario= await sql.query('select * from usuarios where idUsuarios=?',[id])
    res.render('login/login', {usuario});
}

loginctl.mostrarRegistro = (req, res) => {
    res.render('login/registro');
}

loginctl.login = passport.authenticate('local.signin', {
    successRedirect: '/proyecto/agregar/',
    failureRedirect: '/login',
    failureFlash: true,
})

loginctl.registro = passport.authenticate('local.signup', {
    successRedirect: '/CerrarSesion/',
    failureRedirect: '/registro',
    failureFlash: true,
})

loginctl.cerrarSesion=(req, res)=>{
    req.logOut()
    res.redirect('/inicio/')
}

module.exports = loginctl