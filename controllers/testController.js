const testController = (req,res) => {
    res.status(200).send({
     message: "test route now it was run runde nodemon",
     success: true,   
    });

};

module.exports = { testController};