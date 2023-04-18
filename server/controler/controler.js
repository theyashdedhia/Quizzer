import Questions from "../models/questionSchema.js";
import Result from "../models/resultSchema.js";
import questions, {answers} from '../database/data.js'

// GET ALL QUESTIONS
export async function getQuestions(req, res){
    try{
        const q = await Questions.find()
        res.json(q)
    }catch(error){
        res.json({error})
    }
}

// INSERT ALL QUESTIONS
export async function insertQuestions(req, res){
    try{
        Questions.insertMany({questions, answers})
    }catch(error){
        res.json({error})
    }
}

// DELETE ALL QUESTIONS
export async function dropQuestion(req, res){
    try {
        await Questions.deleteMany();
        res.json({msg : "Questions Deleted"})
    } catch (error) {
        res.json({error})
    }
}

// GET RESULTS 
export async function getResult(req, res){
    try {
        const r = await Result.find()
        res.json(r)
    } catch (error) {
        res.json({error})        
    }
}

// POST RESULTS
export async function storeResult(req, res){
    try {
        const {username, result, attempts, points, achieved} = req.body;
        if(!username && !result){
            throw new Error('Data Not Provided')
        }
        Result.create({username, result, attempts, points, achieved})
    } catch (error) {
        res.json({error})        
    }
    
}

// DELETE REULTS
export async function dropResult(req, res){
    try {
        await Result.deleteMany();
        res.json({msg : "Result Deleted Successfully"})
    } catch (error) {
        res.json({error})
    }
}


