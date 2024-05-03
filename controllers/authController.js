const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs')

const registerController =async (req,res) => {
    try{
        const exisitingUser = await userModel.findOne ({email:req.body.email})
        //validation
        if(exisitingUser){
            return res.status(200).send({
                sucess:false,
                message:'User Already exists'
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password,salt)
        req.body.password = hashedPassword

        //rest data
        const user = new userModel(req.body)
        await user.save()
        return res.status(201).send({        ////201 means some thing or data is succesluy enetred in data base
            sucess:true,
            message:'User Registers Sucessfully',
            user,

        });
    } catch (error){
        console.log(error)
        res.status(500).send({
            sucess:false,
            message:'Error In Register API',
            error
        })
    }
};


module.exports = { registerController};