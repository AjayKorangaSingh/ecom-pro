const UserService = require('../services/userService')

const getUserProfile = async(req,res)=>{
  try {
     const jwtToken = req.headers.authorization?.split(' ')[1]
     if(!jwtToken) return new Error('Token not found')
        const user = await UserService.getUserProfileByToken(jwtToken)
        return res.status(200).send({message:"success",user})
  } catch (error) {
    return res.status(500).send(error)
  }
}

const getAllUser = async(req,res)=>{
    try {
        const users = await UserService.getAllUser()
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send(error) 
    }
}

module.exports = {getUserProfile,getAllUser}