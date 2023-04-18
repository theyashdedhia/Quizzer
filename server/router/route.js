import { Router } from "express";
const router = Router();
import * as controlers from '../controler/controler.js'

// QUESTIONS
router.get('/questions', controlers.getQuestions)
router.post('/questions', controlers.insertQuestions)

router.route('/questions')
    .get(controlers.getQuestions)
    .post(controlers.insertQuestions)
    .delete(controlers.dropQuestion)


router.route('/result')
    .get(controlers.getResult)
    .post(controlers.storeResult)
    .delete(controlers.dropResult)
export default router;