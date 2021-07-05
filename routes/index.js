import express from 'express'
const router = express.Router()

// Import controllers
import { registerController } from '../controllers'

router.post('/register', registerController.register)

export default router;