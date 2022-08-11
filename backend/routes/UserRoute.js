import express from "express";
import {
    userLogin,
    userLogout,
    userDaftar
} from "../controllers/UserController.js";

const router = express.Router();

router.post('/user/login', userLogin);
router.post('/user/logout', userLogout);
router.post('/user/daftar', userDaftar);

export default router;