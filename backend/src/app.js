import express, { json, urlencoded } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConfig from './helpers/db_config.js'
import userRouter from './routes/user.route.js'
import userTypeRouter from './routes/userType.route.js'
import addUserType from './helpers/addUserTypes.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use('/users', userRouter)
app.use('/user-types', userTypeRouter)

app.get('/', (req, res, next) => {
    res.json({msg: 'Hello'})
})

const start = async () => {
    dbConfig()
    addUserType()
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}...`)
    })
}

start()
