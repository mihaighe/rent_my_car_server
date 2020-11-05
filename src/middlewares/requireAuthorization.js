// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const User = mongoose.model("User");

// module.exports = (req, res, next) => {
//   const token = req.header("Authorization").replace("Bearer ", "");

//   // replace with process.env
//   jwt.verify(token, "MY_SECRET_KEY", async (err, payload) => {
//     if (err) {
//       return res.status(401).send({ error: "You must be logged in." });
//     }

//     // if working destructure in function arguments
//     const { userId } = payload;

//     const user = await User.findOne({
//       _id: userId,
//       "tokens.token": token,
//     });

//     req.user = user;
//     next();
//   });
// };
