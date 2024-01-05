const express = require("express");
const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3000;

let data = [
    {
        name: "aniket",
        father: "ramashankar",
        mother:"anita"
    },

    {
        name: "ramu",
        father: "shyam",
        mother:"abhilasha"
    }
]

app.post("/info", (req, res) => {
    let { name, father, mother } = req.body;
    if (father && name && mother) {
        data.push({
            name,
            father
        })
       let update = data.filter(item => item.name === name || item.father === father);
        res.send(update);
    } else {
        console.log("all are mendatory")

    }
})

app.listen(PORT, () => {
    console.log(`server start at port ${PORT}`)
})