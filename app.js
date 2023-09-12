import express from 'express';

const app = express();

const port = 3000;

app.use('/, taskRouter')

app.get('/', (req, res)=>{

    res.send('Todo Listo')

})

app.listen(port, ()=> {

console.log("Server en puerto http://localhost:3000")

})
