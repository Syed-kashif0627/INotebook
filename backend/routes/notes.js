const express=require('express')
const Note=require('../models/Note')
const user=require('../models/User')
const {body, validationResult}=require('express-validator');
const fetchuser=require('../middleware/fetchuser');

const router=express.Router();

//Route1 Add Notes using post: api/notes/addnote 
router.post('/addnote',fetchuser,[
    body('title','Title must be minimum of length 3').isLength({min:3}),
    body('description','Description should be minimum of length 5').isLength({min:5}),
],async (req,res)=>{
    const error=validationResult(req);
    if(!error.isEmpty())
        return res.status(400).json({errors:error.array()})
    const {title,description,tag}=req.body
try{
    const note=new Note({
        title,description,tag,user:req.user.id
    })
    const savednote=await note.save();

    res.json(savednote);
}catch(err){
    console.log(err.message);
    res.status(500).send({error:"Internal server error occured"})
}
})

//Route2 fetch all notes using GET: api/notes/fetchnote
router.get('/fetchallnote',fetchuser,async (req,res)=>{
    try {
        const notes= await Note.find({user:req.user.id})
        res.json(notes)
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Internal server error occured")
    }
})

//Route3 update existing note using PUT:/api/notes/updatenote
router.put('/updatenote/:id',fetchuser,async (req,res)=>{
    try {
    const {title,description,tag}=req.body;
    const newNote={};    

    if(title) 
        newNote.title=title;
    if(description)
        newNote.description=description;
    if(tag)
        newNote.tag=tag;
    //checking if requested note exist or not
    let note=await Note.findById(req.params.id)
    if(!note)
        return res.status(404).send("404 Not Found");
    //checking if user is updating his note only not others note
    if(note.user.toString() !==req.user.id)
        return res.status(401).send("Not Allowed")

    note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})

    res.json({note})
    } catch (err) {
        console.log(err.message);
        res.status(500).send({error:"Internal server error occured"})
    }
})

//Route4: delete existing note using PUT:/api/notes/deletenote
router.delete('/deletenote/:id',fetchuser,async (req,res)=>{
    try {
    //checking if requested note exist or not
    let note=await Note.findById(req.params.id)
    if(!note)
        return res.status(404).send("404 Not Found");
    //checking if user is deleting his note only not others note
    if(note.user.toString() !==req.user.id)
        return res.status(401).send("Not Allowed")

    note=await Note.findByIdAndDelete(req.params.id)

    res.json({"Success":"note has been Deleted",note:note})
    } catch (err) {
        console.log(err.message);
        res.status(500).send({error:"Internal server error occured"})
    }
})
module.exports= router