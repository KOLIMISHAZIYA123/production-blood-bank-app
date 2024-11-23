const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Auth Failed",
        });
      } else {
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      error,
      message: "Auth Failedd",
    });
  }
};


// const JWT = require('jsonwebtoken');

// module.exports = async (req, res, next) => {
//   try {
//     const authHeader = req.headers['authorization'];

//     // Check if the Authorization header exists and is formatted correctly
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(401).send({
//         success: false,
//         message: 'Authorization header missing or malformed',
//       });
//     }

//     // Extract token from the Authorization header
//     const token = authHeader.split(" ")[1];

//     // Verify the token
//     JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
//       if (err) {
//         return res.status(401).send({
//           success: false,
//           message: 'Auth Failed',
//         });
//       } else {
//         req.body.userId = decode.userId; // Add the decoded user ID to the request body
//         next();
//       }
//     });
//   } catch (error) {
//     console.error("Authorization error:", error);
//     return res.status(401).send({
//       success: false,
//       error,
//       message: 'Auth Failed',
//     });
//   }
// };
