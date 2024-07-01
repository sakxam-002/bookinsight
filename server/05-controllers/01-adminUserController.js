const AdminUserModel = require("../02-model/01-adminUserSchema")
const bcrypt = require('bcrypt')
const AdminUserRegistration = async(req ,res) => {
    // console.log(req.body)
        try{
            const {email, password} = req.body
    const foundUser = await AdminUserModel.findOne({email:email})

    if(foundUser){
        res.status(422).json({
            msg:"A user with that email exists."
        })
    }else{
        const encryptedPassword = await bcrypt.hash(password,10)
        req.body.password = encryptedPassword

        const data = await AdminUserModel.create(req.body)
        if (data){
            res.status(200).json({
                msg:"User registered successfully"
            })
        }else{
            res.status(403).json({
                msg: "User registration failed. Contact Admin"
            })
        }
    }
        }catch(error){
            console.log(error)
            res.status(500).json({
                msg: "Server Error"
            })
        }
}

const AdminUserLogin = async(req,res) =>{
    try{
        const {email,password} =req.body
    const foundUser = await AdminUserModel.findOne({email:email})
    if(foundUser){
        const passMatch = await bcrypt.compare(password, foundUser.password)

        if(passMatch){
            delete foundUser.password
            res.status(200).json({
                msg: "Logged In",
                id: foundUser?._id,
                email: foundUser?.email,
                name: foundUser?.name,
                phoneNumber: foundUser?.phoneNumber,
                userRole: "admin",
            })
        }else{
            res.status(404).json({
                msg: "Invalid Password"
            })
        }
     }else{
        res.status(404).json({
            msg: "User with that email not found"
        })
     }

    }catch(error){
        console.log(error)
    }
}
exports.AdminUserRegistration = AdminUserRegistration
exports.AdminUserLogin = AdminUserLogin