import User from "../models/user.model.js"
import UserType from "../models/userType.model.js"

const createUser = async (user) => {
    const {userType: userTypeId} = user
    try {
        const userType = await UserType.findById(userTypeId)
        if (userType !== null) {
            user.userType = UserType(userType)
            const newUser = new User(user)
            return newUser
        }
    } catch (e) {
        return {error: `invalid usertype: ${e.message}`}
    }
}

const getUser = async (id) => {
    const user = await User.findById(id)
    return user
}

const getAllUsers = async () => {
    const users = await User.find().populate('userType')
    return users
}

const updateUser = () => {

}

const deleteUser = () => {

}

export {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser
}
