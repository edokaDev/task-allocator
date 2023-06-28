import UserType from "../models/userType.model.js"

const addUserType = async () => {
    const userTypes = await UserType.find()

    if (userTypes.length < 3) {
        const newTypes = [
            {name: 'Admin'},
            {name: 'Manager'},
            {name: 'Employee'},
        ]
        newTypes.map(async (ut) => {
            const type = new UserType(ut)
            await type.save()
        })
    }
}

export default addUserType
