import Joi from "joi"
import { User } from '../../models'

const registerController = {
    async register(req, res, next) {
        // Validation
        const registerSchema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            repeat_password: Joi.ref('password')
        })
        const { error } = registerSchema.validate(req.body)
        if (error) {
            return next(error)
        }

        // Check if user is in the database already
        try {
            const exist = await User.exist({ email: req.body.email })
            if (exist) {
                return next(CustomErrorHandler.alreadyExist("This email is already taken"))
            }
        } catch (err) {
            return next(err)
        }

        res.json({ msg: "hello from express 243" })
    }
}

export default registerController