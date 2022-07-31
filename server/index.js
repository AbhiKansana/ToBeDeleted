import express from 'express'
import mongoose from 'mongoose'
import stats from './routes/infoRoute.js'
const app = express()
const port = 3000

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

app.use('/stats',stats)


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})