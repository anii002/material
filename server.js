const express = require("express");
const mongoose = require("mongoose");
const User = require("./user.model");
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
})

mongoose.connect(
    process.env.MONGODB_CONNECTION,
).then(() => {
    console.log("mongodb connected")
}).catch(error => {
    console.log('Error connecting to MongoDB:', error);
});

app.post("/signup", async (req, res) => {
    try {

        let { name, email, password, confirmpassword } = req.body;

        if (name && email && password && confirmpassword) {
            if (password.length < 5)
                return res.status(401).json({ msg: "password must be at least5 character" })

            if (password !== confirmpassword)
                return res.status(401).json({ msg: "confirmpass pass doesn't match" })

            const existingUser = await User.findOne({ email: email });
            if (existingUser)
                return res.status(401).json({ msg: "email already exists" })

            res.json("successfull registered")
        } else {
            return res.json({ msg: "all are manadatory" })
        }
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

})

