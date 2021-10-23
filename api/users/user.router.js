const {
    createUser,
    getUserByUserId,
    getUsers,
    updateUsers,
    deleteUser,
    login
  } = require("./user.controller");

const router=require("express").Router();
const{checkToken}=require("../../auth/token_vaildation");
router.get("/",checkToken,  getUsers);
router.post("/",   createUser);
router.get("/:id",  checkToken,   getUserByUserId);
router.post("/login", login);
router.patch("/", checkToken,   updateUsers);
router.delete("/",checkToken,    deleteUser);

module.exports=router;
/*
{
    "first_name":"Sujitha",
    "last_name":"D",
    "gender":"Male",
    "email":"suji@gmail.com",
    "password":"test@1223",
    "number":"123456789"
}
*/