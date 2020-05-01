import { Router } from 'express'
const router: Router = Router()
import { indexController } from '../controllers/index'

router.get('/', indexController.index)

router.get('/about', indexController.about)

export default router