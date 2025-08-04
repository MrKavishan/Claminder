const userModel = require('../model/user');

class userService{
    static async registerUser(name,email,password){
        try {
            const createUser =new userModel({name,email,password});
            return await createUser.save();
            
        } catch (error) {
            throw error;
        }
    }
}