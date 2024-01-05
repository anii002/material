// const express = require("express")
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.json());

// const user = [
//   {
//     name: "aniket",
//     email: "aniket2002@gmail.com",
//     password: "Aniket123",
//   },
//   {
//     name: "rahul",
//     email: "rahul2002@gmail.com",
//     password: "Aniket123"
//   }
// ]

// app.post("/login", (req, res) => {
//   const { email, password } = req.body
//   const users = user.find(u => u.email === email || u.password === password);
//   if (users) {
//     res.json('Logedin')
//   } else {
//     res.status(401).json({ message: 'Invalid credentials ' })
//   }
// });


// app.post("/register", (req, res) => {
//   const { name, email, password, checkpassword } = req.body

//   if (password.length < 5) {
//     return res.status(401).json({ message: "password must be 5 digit" })
//   }

//   if (password !== checkpassword) {
//     return res.json({ message: "doesn't match check password" })
//   }

//   // const existUser = user.findOne({ email: email });
//   // if (existUser) {
//   //   return res.status(401).json({message:"email already exists"})
//   // }

//   if (name && email && password && checkpassword) {
//     user.push({
//       name,
//       password,
//       email
//     });
//     const adduser = user.filter(item => item.name === name || item.email === email || item.password === password);
//     res.send(adduser)
//   }
//   else {
//     return res.status(401).json({ message: "all feilds are required" })
//   }

// });

// app.listen(PORT, () => {
//   console.log(`server is running on port no ${PORT}`)
// })