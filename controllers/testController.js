const testController = (req,res) => {
    res.status(200).send({
     message: "Welocme to testing",
     success: true,   
    });

};

module.exports = { testController};