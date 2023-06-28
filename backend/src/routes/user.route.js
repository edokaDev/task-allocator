import { createUser, getAllUsers, getUser } from "../classes/user.class.js"
import express from 'express'
import User from "../models/user.model.js"

const router = express.Router()

router.get('/', async (req, res, next) => {
    const allUsers = await getAllUsers()
    res.json({users: allUsers})
})

router.get('/:id', async (req, res, next) => {
    const { id: userId } = req.params
    try {
        const user = await User.findById(userId).populate('userType')
        if (user !== null) {
            res.json({user})
        } else {
            res.status(404).json({error: 'user not found'})
        }
    } catch (e) {
        res.status(500).json({error: `something went wrong: ${e.message}`})
    }
})

router.post('/', async (req, res, next) => {
    const newUser = await createUser(req.body)
    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (e) {
        res.status(400).json({msg: newUser.error || e.message})
    }
})

export default router
