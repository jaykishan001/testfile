const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.post('/register', (req, res)=> {
    const {username, name} = req.body;

    if(username && name) {
        return res.status(200).json({
            message: "Successfully registered",
            success: true
        })
    }
    else {
        return res.status(400).json({
            message: "something went wrong"
        })
    }
})


app.listen(9000);