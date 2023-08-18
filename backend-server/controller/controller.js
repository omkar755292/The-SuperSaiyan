const expressAsyncHandler = require("express-async-handler");
const scoreModel = require("../model/scoreModel");

//@desc: Post new score
//@mehode: POST /api/score
//@acess: Public
const postScore = expressAsyncHandler( async(req, res)=>{
    const {name, email, score}= req.body;
    if (!name || !email) {
        throw new Error('All fields are mandatory');
    }
    const postscore = await scoreModel.create(req.body);
    res.json(postscore);
});

module.exports = {postScore};