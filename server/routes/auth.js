import express from "express";

import { Register, logIn, logOut} from "../controllers/auth.js";

const router = express.Router();

router.post('/register', Register);
router.post('/login', logIn);
router.post('/logOut', logOut);

export default router;
