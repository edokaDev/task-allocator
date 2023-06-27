import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res, next) => {
    res.json({msg: 'Hello'})
})

const start = async () => {
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}...`)
    })
}

start()
