import User from "../models/user.model.js";
import {createToken} from "../utils/jwt.js";

const registerUser = async (req, res) => {
    try {
        const { name, email, username, password } = req.body
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                success: false,
                message: 'user with this email already exists'
            })
        }

        const user = await User.create({ name, email, username, password });

        return res.status(201).json({
            success: true,
            message: 'user successfully registered',
            token: createToken(user)
        })
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            success: false,
            message: err.message
        })
    }

}


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'user with this email does not exist'
            })
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid Password"
            })
        }

        return res.status(200).json({
            success : true,
            message : 'login successful',
            token : createToken(user)
        })
        


    } catch (err) {
        console.log(err);
        return res.status(400).json({
            success: false,
            message: err.message
        })
    }

}


const getProfile = async (req, res) => {
    try{ 
        res.json({
            success : true,
            user : {
                 _id: req.user._id,
                name: req.user.name,
                email: req.user.email,
                tests: req.user.tests
            }
        })
    }
    catch(err){
        console.log(err);
          return res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

const testUpdate = async (req,res)=>{
    try{
        const data = req.body;
        data.date = new Date();
        let user = await User.findById(req.user._id);
        user.tests.push(data);
        await user.save();

        return res.status(200).json({
            success : true,
            message : "updated result successfully"
        })
 
    } catch(err){
        console.log(err);
          return res.status(400).json({
            success: false,
            message: err.message
        })
    }
}


export default {registerUser,loginUser,getProfile,testUpdate}