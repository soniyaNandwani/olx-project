// verifyTokenMiddleware.js
import { AuthModel } from "./Authentication/Model/SignupSchema";


export const verifyTokenMiddleware = async (req, res, next) => {
  let token = req.body.token;
  if(!token){
   token = req.params.token
  }
  console.log("middleware"+ JSON.stringify(req.body));

  try {
    const data = await AuthModel.findOne({  accessToken: token});
    console.log(data)
    if (data === null) {
      res.status(400).json({ status: 400, message: "Account not verified" });
    } else {
      req.user = data; // Store the user data in the request for later use
      next(); // Continue with the request
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
};

