const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    role:{
        type:String,
        enum:['admin','organization','user','hospital']

        
    },
    
    name:{
        type: String,
        required:function(){
            if(this.role  == 'user '|| this.role == 'admin'){
                return true
            }
            return false
        }
    },

    organization:{
        type: String,
        required:function() {
            if(this.role == 'organization'){
                return true
            }
            return false
        }
    },

    hospitalName:{
        type:String,
        required:function () {
            if(this.role == 'hospital'){
                return true
            }
            return false

        }
    },
    
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password is required']

    },
    website:{
        type:String
    },
    address:{
        type:String,
        required:[true,'adress is required']
    },
    phone:{
        type:String,
        required:[true,'phone number is required']
    }
}, {timestamps:true});

module.exports = mongoose.model('user',userSchema)