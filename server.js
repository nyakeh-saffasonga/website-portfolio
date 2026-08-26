const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

// This serves as the static floor from which assets are called
app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','about.html'))
})

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','contact.html'))
})

app.get('/projects',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','projects.html'))
})

app.get('/skills',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','skills.html'))
})

app.listen(PORT, ()=>{
    console.log(`Server started listening on http://localhost:${PORT}`)
})