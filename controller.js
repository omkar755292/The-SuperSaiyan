const asyncHandler = require('express-async-handler');
const Score = require('./models/scoresModel');
//@desc: Post new score
//@mehode: POST /api/score
//@acess: Public
const postScore = asyncHandler( async (req, res)=>{
    console.log(req.body);
    const {name, email, score } = req.body;
    if (!name || !email) {
        res.status(400);
        throw new Error('all fields are mandory');
    }
    const postscore = await Score.create({
        name, email, score
    })
    res.status(200).json(postscore);

});

module.exports = postScore;