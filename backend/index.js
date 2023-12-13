const connectToMongo =require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 5000
//app.use(express.static(path.join(__dirname,'folderName')))//app.use() is a function that allows us to use Middleware express.static is inbuilt middle ware
//Custom middleware
//const kashMiddleware=(req,res,next)=>{
//   console.log(req)
//   next()
// }
app.use(express.json());
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
