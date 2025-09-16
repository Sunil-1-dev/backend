import { asyncHandler } from "../utils/asyncHandler";


const verifyJWT=asyncHandler(async(req,res,next)=>{
    req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer","")
})