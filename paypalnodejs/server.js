const express = require("express")

const app = express()


app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.json())

app.get("/",(req,res) => {
    res.render('index',{paypalClientId:' AWHt2eysbxh9MOR2xrARU7lixXt2ZHOh0WeKTMHM97IixrX6vIoZrqf0GaJEPBOyPFmN2h6U9gHvbmR4'})
})

app.listen(3000,() => {
    console.log("server 3000");
})