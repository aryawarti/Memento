const mongoose =require('mongoose');
const bcrypt=require('bcrypt');
const { uniqueId } = require('lodash');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      sparse: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  }
);
 // to encypt the password 
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
      next();
    }
    const salt= await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
});

// to decrypt the password
  userSchema.methods.matchPassword= async function (enteredPassword){
     return await bcrypt.compare(enteredPassword, this.password);
  }  


const User=mongoose.model("User",userSchema);

module.exports=User;