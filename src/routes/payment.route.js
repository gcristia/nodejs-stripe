import {Router} from 'express'
import {createSession} from "../controllers/payment.controller.js";

const router = Router()

router.post("/create-checkout-session", createSession);

router.get("/success", (req, res) => res.redirect("/success.html"));

router.get("/cancel", (req, res) => res.redirect("/index.html"));

export default router