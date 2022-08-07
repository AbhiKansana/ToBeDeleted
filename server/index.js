import express from 'express'
import mongoose from 'mongoose'
import stats from './routes/infoRoute.js'
import userRouter from './routes/userRoute.js'
import cors from 'cors'

const app = express()
const port = 3000
app.use(
  cors({
    origin:"*"
  })
)

  


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const url = 'mongodb://localhost/CountryData'
mongoose.connect(url , { useNewUrlParser : true})
const con = mongoose.connection
con.on('open',function(){
    console.log("Database connected...")
})
app.use(express.json())

// * For Country Data 
app.use('/stats',stats)

// * For User Signup
app.use('/user',userRouter)



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})