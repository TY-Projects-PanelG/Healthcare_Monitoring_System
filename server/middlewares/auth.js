import jwt from "jsonwebtoken";

export const verifyToken = (request,response,next)=>{
    try {
        let token = request.header("Authorization");

        if(!token) return response.status(403).send("Access Denied!");

        if(token.startsWith('Bearer ')){
            token = token.slice(7, token.length).trimLeft();
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        request.patient = verified;
        next();
    } catch (error) {
        console.log(error);
    }
};