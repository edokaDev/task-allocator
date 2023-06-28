import express from 'express'
import UserType from '../models/userType.model.js'

const router = express.Router()

router.get('/', async (req, res, next) => {
    const ut = await UserType.find()
    res.json({usertypes: ut})
})

export default router
