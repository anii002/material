const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

const user = [
    {
        username: "ramu",
        email: "ramu123@gmail.com",
        password: "ramu1234",
    },
    {
        username: "babuji",
        email: "babu123@gmail.com",
        password: "babu123"
    }
]

app.post("/signup", (req, res) => {
    let { username, email, password, checkpassword } = req.body;
    if (password.length < 5) return res.status(401).json({ msg: "pass must be 5 character" })
    if (password !== checkpassword) return res.status(401).json({ msg: "checkpass doesn't match" })

    if (username && email && password && checkpassword) {
        user.push({
            username,
            email,
            password
        })
        const addUsers = user.filter(item => item.username === username || item.email === email || item.password === password)
        res.send(addUsers)
    } else {
        return res.status(401).json({msg:"all feilds are required"})
    }
  
})

app.post("/login", (req, res) => {
    let { email, password } = req.body;
    const User = user.find(item => item.email === email || item.password === password);
    if (User) {
        return res.json({msg:"loggedin!"})
    } else {
        return res.status(401).json({msg:"login error"})
    }
})

app.listen(PORT, () => {
    console.log(`The server started on port ${PORT}`)
})