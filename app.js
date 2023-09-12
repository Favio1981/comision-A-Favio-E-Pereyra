import express from 'express';
import { taskRouter } from './src/routes/taskroutes.js';
import { startDb } from './src/config/database.js';

const app = express();

const port = 3000;

app.use('/', taskRouter)

app.get('/', (req, res)=>{

    res.send('Todo Listo')

})

app.listen(port, ()=> {

console.log('Server en puerto http://localhost:3000')
startDb()
})
