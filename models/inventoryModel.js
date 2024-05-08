const mongoose = require('mongoose');


const inventorySchema = new mongoose.Schema({
    inventoryType:{
        type:String,
        required:[true,'inventory type require'],
        enum:['in', 'out']
      
    },
    bloodGroup:{
        type:String,
        required : [true,'blood group is required'],
        enum:['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']
    
    },
    quantity:{
        type:Number,
        require:[true,'blood quantity is required']

    },

    organization:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'organization is required']

    },

    hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required : function(){
            return this.inventoryType == "out"

        }
    },

    donar:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        require : function () {
            return this.inventoryType == "in";

        },

    }, 
    
/////viewer it is custom made by this project only 
   viewer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        require : function () {
            return this.inventoryType == "in";

        },

    }, 


},{timestamps: true}
);






module.exports = mongoose.module('Inventory',inventorySchema)