const mongoose = require('mongoose')

const adminUserScheme = ({

    email: {
        type: String
    },

    password: {
        type: String
    },

    phoneNumber: {
        type: String
    },
    
    name: {
        type: String
    },

    userRole: {
        type: String
    },

    createdAt: {
        type: Date,default: Date.now
    },
    
    updatedAt: {
        type: Date,default: Date.now
    }
})

const AdminUserModel = mongoose.model("AdminUserModel",adminUserScheme)
module.exports = AdminUserModel