import  {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"

const registerUser = asyncHandler(async (req , res) => {
        //get user details from frontend
        //validation
        //check if user already exist:username,email
        //check for images,check for avatar
        //upload them to cloudinary,avatar
        //create user object-create entry in db
        //remove password and refresh token field from response
        //check for user creation
        //return res

        const {fullname,email,username,password}=req.body
        console.log("email",email);

        if(
            [fullname,email,username,password].some((field)=>
            field?.trim()==="")
        ){
            throw new ApiError(400,"All fields are required")
        }
})

export {registerUser,}