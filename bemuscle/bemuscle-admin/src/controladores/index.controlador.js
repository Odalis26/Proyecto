const indexctl ={}
const orm = require('../configuracion_base_datos/base.orm')
const sql = require('../configuracion_base_datos/base.sql')

indexctl.mostrar= async(req, res)=>{
    res.render('index')
}

indexctl.verificar=async(req, res)=>{
    const {verificacion}= req.body
    const usuario = await orm.usuario.findOne({ where: { username: verificacion }}) 
    if(usuario){
        const usuarios = usuario
        if(usuarios.username == null){
            res.redirect('/registro');
        }else{
            res.redirect('/login/'+ usuarios.idUsuarios);
        }
    }else{
        res.redirect('/registro');
    }
}

module.exports =indexctl