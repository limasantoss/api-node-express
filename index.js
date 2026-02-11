import express from 'express';

const app =  express()

app.get('/projeto' , (req , res)=>{
    res.json('Rota inicial ')
    console.log("https://www.google.com ")
})
app.get('/user' ,(req ,res)=>{
    res.json('Rota user')
})
app.listen(3000 , ()=>{
    console.log('servidor rodando em http://localhost:3000')
})