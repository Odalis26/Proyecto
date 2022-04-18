const loginctl = {}
const passport = require('passport')
const sql = require('../configuracion_base_datos/base.sql')

loginctl.mostrar = async(req, res) => {
    const id = req.params.id
    const usuario= await sql.query('select * from clientes where idClientes=?',[id])
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
    successRedirect: '/CerrarSecion',
    failureRedirect: '/registro',
    failureFlash: true,
})

loginctl.cerrarSesion=(req, res)=>{
    req.logOut()
    res.redirect('/')
}

module.exports = loginctl