const Express = require('express')
const router = Express.Router()

const {AdminUserRegistration} = require("../05-controllers/01-adminUserController")
const {AdminUserLogin} = require("../05-controllers/01-adminUserController")

router.post("/admin-signup",AdminUserRegistration)
router.post("/admin-login",AdminUserLogin)
module.exports = router