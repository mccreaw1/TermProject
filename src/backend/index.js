const mongoose = require("mongoose");
// const { applyMiddleware } = require("redux");
mongoose.connect(
  "mongodb://localhost:27017/register",
  {
    dbName: "applicationdb",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
//   (err) =>
//     err ? console.log(`Error is ${err}`) : console.log(`Connected to database succesful`)
);

// Schema
const UserSchema = mongoose.Schema ({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },

});

const User = mongoose.model('users', UserSchema)
User.createIndexes()

// For backend express
const express = require('express')
const app = express()
const cors = require('cors')
console.log(`App listen on port 5000`)
app.use(express.json())
app.use(cors())
app.get("/", (req, resp) => {
    resp.send("App is working")
    // Check if backend is working at http://localhost:5000
})

app.post("/register", async (req, resp) => {
    try{
        const user = new User(req.body)
        let result = await user.save()
        result = result.toObject();
        if(result) {
            delete result.password
            resp.send(req.body)
            console.log(`Result: ${result}`)
        }
        else
        {
            console.log(`User already subscribed`)
        }

    }
    catch (e) {
        resp.send(`Opps, something did not work`)
    }
})
app.listen(5000)