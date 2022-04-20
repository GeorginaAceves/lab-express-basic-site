//importar package o librerias
const express = require('express');
//creamos server
const app = express()

app.use(express.static('public'))

//creamos rutas
app.get('/', (req,res,next)=>{
    res.send('<h1> Welcome! </h1>')
})
//about
app.get('/about',(req,res,next)=>{
    res.sendFile(__dirname + '/views/about.html')
})

//home
app.get('/home',(req,res,next)=>{
    res.sendFile(__dirname + '/views/home.html')
})

//works
app.get('/works',(req,res,next)=>{
    res.sendFile(__dirname + '/views/works.html')
})

//photo gallery
app.get('/photo-gallery',(req,res,next)=>{
    res.sendFile(__dirname + '/views/photo-gallery.html')
})

//correr servidor
app.listen(3000,()=>{
    console.log("Estoy corriendo en el puerto 3000")
})